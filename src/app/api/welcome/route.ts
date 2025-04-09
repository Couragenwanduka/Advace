import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, firstname } = await req.json();
 
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
    to: email,
    subject: "Welcome to Advanta Wealth!",
    html: `
      <center><img src="https://advantawealth.co/images/logo.svg" width="150px"></center>
      <h3>Dear ${firstname},</h3>
      <p>Welcome to <b>Advanta Wealth</b>! We're excited to have you on board.</p>
      <p>We look forward to helping you on your investment journey.</p>
      <br />
      <p>Best Regards,</p>
      <p><b>Advanta Wealth Team</b></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Welcome email sent!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
