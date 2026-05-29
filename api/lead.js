export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = new URLSearchParams();

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

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Zapier request failed",
        details: text,
      });
    }

    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}
