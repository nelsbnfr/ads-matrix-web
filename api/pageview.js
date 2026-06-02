import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { url } = req.body || {};
  
  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;
  
  if (!pixelId || !accessToken) {
    return res.status(200).json({ success: false, message: "Missing Meta credentials" });
  }

  const clientIp = req.headers["x-forwarded-for"] || "0.0.0.0";
  const userAgent = req.headers["user-agent"] || "";

  try {
    const metaPayload = {
      data: [
        {
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: url || "",
          user_data: {
            client_ip_address: clientIp.split(',')[0].trim(),
            client_user_agent: userAgent,
          }
        }
      ]
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metaPayload),
    });

    const result = await response.json();
    return res.status(200).json({ success: true, meta: result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
