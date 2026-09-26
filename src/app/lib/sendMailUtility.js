import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTPEmail(email, otp) {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [email],
    subject: "Querlabs On-Boarding OTP",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto;">
        
        <h2>Verify your email</h2>

        <p>
          Use the following OTP to verify your email address:
        </p>

        <div style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          padding: 20px;
          background: #f5f5f5;
          text-align: center;
          margin: 20px 0;
        ">
          ${otp}
        </div>

        <p>
          This OTP is valid for <strong>10 minutes</strong>.
        </p>

        <p>
          If you did not request this OTP, you can safely ignore this email.
        </p>

      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}