// backend_email_sender/index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.mailersend.net",
    port: 587,
    secure: false,
    auth: {
      user: "MS_aFg9TC@test-r9084zvw8xvgw63d.mlsender.net",
      pass: "mssp.fFEqaFI.x2p0347jr2y4zdrn.ylbhq1M"
    },
    tls: {
      rejectUnauthorized: false // <--- Esto permite certificados autofirmados
    }
  });
  

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: 'Contacto Portafolio <no-reply@tu-dominio.com>',
      to: "ssselenia1998@gmail.com",
      subject: `Mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `
    });

    res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false, message: "No se pudo enviar el correo." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
