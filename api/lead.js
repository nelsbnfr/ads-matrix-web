import crypto from "crypto";

function hash(str) {
  if (!str) return undefined;
  return crypto.createHash("sha256").update(str.trim().toLowerCase()).digest("hex");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = new FormData();

    payload.append("name", req.body.name ?? "");
    payload.append("website", req.body.website ?? "");
    payload.append("email", req.body.email ?? "");
    payload.append("phone", req.body.phone ?? "");
    payload.append("budget", req.body.budget ?? "");
    payload.append("source", "Ads Matrix Website");

    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/9781487/4b40u4y/",
      {
        method: "POST",
        body: payload,
      },
    );

    const text = await response.text();

    // Meta CAPI Lead Event
    const pixelId = process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const clientIp = req.headers["x-forwarded-for"] || "0.0.0.0";
    const userAgent = req.headers["user-agent"] || "";

    if (pixelId && accessToken) {
      const metaPayload = {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: req.headers.referer || "",
            user_data: {
              em: [hash(req.body.email)],
              ph: [hash(req.body.phone)],
              client_ip_address: clientIp.split(',')[0].trim(),
              client_user_agent: userAgent,
            }
          }
        ]
      };

      await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metaPayload),
      }).catch(console.error); // Catch silently to not disrupt the user if Meta fails
    }

    return res.status(response.ok ? 200 : response.status).json({
      success: response.ok,
      zapierStatus: response.status,
      zapierResponse: text,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}
