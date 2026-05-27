import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { vorname, nachname, email, telefon, auswahl } = req.body;

    if (!vorname || !nachname || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "deine-email@example.com",
      replyTo: email,
      subject: `Neue Anfrage von ${vorname} ${nachname}`,
      html: `
        <h2>Neue Anfrage</h2>
        <p><strong>Vorname:</strong> ${vorname}</p>
        <p><strong>Nachname:</strong> ${nachname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon || "-"}</p>
        <p><strong>Auswahl:</strong> ${auswahl || "-"}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
