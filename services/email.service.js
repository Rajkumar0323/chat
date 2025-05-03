import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // You can replace with other services
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};
