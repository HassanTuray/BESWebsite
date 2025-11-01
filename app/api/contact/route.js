import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, role, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: [
        "bes.president@gmail.com",
        "bes.vicepres@gmail.com",
        "bes.secretary@gmail.com",
        "bes.treasurer@gmail.com",
        "bes.programschair@gmail.com"
      ],
      subject: `New Contact Form Submission: (${role})`,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}