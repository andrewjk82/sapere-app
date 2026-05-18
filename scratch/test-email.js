import nodemailer from 'nodemailer';
import 'dotenv/config';

async function run() {
  console.log("USER:", process.env.GMAIL_USER ? "Exists" : "Missing");
  console.log("PASS:", process.env.GMAIL_PASS ? "Exists" : "Missing");
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    connectionTimeout: 8000,
  });

  try {
    const res = await transporter.sendMail({
      from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
      to: "andrewjk82@gmail.com",
      subject: "Test Email Task",
      text: "This is a test to verify nodemailer."
    });
    console.log("Sent:", res.messageId);
  } catch(e) {
    console.error("Failed:", e.message);
  }
}
run();
