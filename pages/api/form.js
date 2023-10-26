require("dotenv").config();
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message, number } = req.body; 
// console.log(req.body)
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
    html: `<div>${message}</div><p>Sent from: ${email}</p> <p>Contact Number : ${number}</p>`,
  };
  const mailData2 = {
    from: "Sadik Shaikh",
    to: email, // Update with your actual email
    subject: `You have enquired for web development services`,
    text: message + " | Sent from: sadik5780@gmail.com",
    html: `<div>We have recieved you request regarding ${message}</div><p>We will get back to you soon</p>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    const info2 = await transporter.sendMail(mailData2);
    // console.log("Email sent:", info.response);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
