import 'dotenv/config';
import nodemailer from 'nodemailer';

async function test() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
  });
  try {
    const info = await transporter.sendMail({
      from: `"Sapere" <${process.env.GMAIL_USER}>`,
      to: 'andrewjk82@gmail.com',
      subject: 'Test mail',
      text: 'Test mail body'
    });
    console.log('Success:', info.messageId);
  } catch (e) {
    console.error('Email Error:', e.message);
  }
}
test();
