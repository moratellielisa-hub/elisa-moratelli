import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nome, email, azienda, messaggio } = await req.json();

    if (!nome || !email || !messaggio) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Sito Elisa Moratelli <noreply@elisamoratelli.it>",
      to: "info@elisamoratelli.it",
      replyTo: email,
      subject: `Nuova richiesta da ${nome}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fff;">
          <h2 style="color: #1C2B3A; margin-bottom: 24px;">Nuova richiesta di contatto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; font-size: 14px; width: 120px;">Nome</td>
              <td style="padding: 10px 0; color: #1C2B3A; font-size: 14px; font-weight: bold;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #1C2B3A; font-size: 14px;"><a href="mailto:${email}" style="color: #d4689a;">${email}</a></td>
            </tr>
            ${azienda ? `<tr>
              <td style="padding: 10px 0; color: #6B6B6B; font-size: 14px;">Azienda</td>
              <td style="padding: 10px 0; color: #1C2B3A; font-size: 14px;">${azienda}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; font-size: 14px; vertical-align: top;">Messaggio</td>
              <td style="padding: 10px 0; color: #1C2B3A; font-size: 14px; line-height: 1.6;">${messaggio.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #f5dff0; margin: 24px 0;">
          <p style="color: #6B6B6B; font-size: 12px;">Inviato da elisamoratelli.it — Rispondi direttamente a questa email per contattare ${nome}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
  }
}
