const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, email, message } = req.body;
  // const user = process.env.NODEMAILER_EMAIL;
  const user = "sadik5780@gmail.com";

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass: "xahomjwpfhsrwkeb",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: user,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
    return res.status(200).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
