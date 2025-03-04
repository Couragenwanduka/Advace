import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { firstname, lastname, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "SMTP.titan.email",
    port: 587,
    secure: false,
    auth: {
      user: "CHI@advantawealth.co",
      pass: "AD3578$$",
    },
  });

  const mailOptions = {
    from: "CHI@advantawealth.co",
    to: "CHI@advantawealth.co",
    subject: `Message From: ${firstname} ${lastname}`,
    html: `
      <center><img src="https://advantawealth.co/images/logo.svg"></center>
      <h5>Dear Admin,</h5>
      <p>You have a message from:</p>
      <p>Email: ${email}</p>
      <p>Name: ${firstname} ${lastname}</p>
      <p>Message: ${message}</p>
      <br />
      <p>Advanta Investment Limited</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
