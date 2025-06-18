const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587, // o 2525
  secure: false,
  auth: {
    user: "MS_aFg9TC@test-r9084zvw8xvgw63d.mlsender.net",
    pass: "mssp.fFEqaFI.x2p0347jr2y4zdrn.ylbhq1M"
  }
});

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: '"Portfolio Contacto" <no-reply@tu-dominio.com>',
      to: "ssselenia1998@gmail.com", // tu email
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    });

    res.status(200).json({ success: true, message: "Correo enviado!" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar." });
  }
};

module.exports = sendMail;
