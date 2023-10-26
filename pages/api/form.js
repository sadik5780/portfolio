require("dotenv").config();
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS, ">>>>>");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: email,
    to: "sadik5780@gmail.com", // Update with your actual email
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
