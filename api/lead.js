export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = new FormData();

    formData.append("name", req.body.name ?? "");
    formData.append("website", req.body.website ?? "");
    formData.append("email", req.body.email ?? "");
    formData.append("phone", req.body.phone ?? "");
    formData.append("budget", req.body.budget ?? "");
    formData.append("source", "Ads Matrix Website");

    const response = await fetch("DEINE_ZAPIER_HOOK_URL", {
      method: "POST",
      body: payload,
    });

    const text = await response.text();

    return res.status(200).json({
      zapierStatus: response.status,
      zapierOk: response.ok,
      zapierResponse: text,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}
