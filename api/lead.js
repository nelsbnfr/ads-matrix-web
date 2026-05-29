export default async function handler(req, res) {
  const payload = new URLSearchParams();
  payload.append("test", "hello");
  payload.append("source", "ads-matrix");

  const response = await fetch(
    "https://hooks.zapier.com/hooks/catch/9781487/4b40u4y/",
    {
      method: "POST",
      body: payload,
    },
  );

  const text = await response.text();

  return res.status(response.status).json({
    status: response.status,
    response: text,
  });
}
