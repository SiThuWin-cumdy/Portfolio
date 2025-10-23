import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
};

export const sendEmail = async (data: EmailPayload) => { 
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    to: process.env.TO_EMAIL,
    ...data,
  });
};

export const getEmailTemplate = (name, email, message) => {
  return `<h3>Name : ${name} </h3>
          <h3>Email : ${email} </h3>
          <h3>Message</h3>
          <p>${message}</p> `;
};
