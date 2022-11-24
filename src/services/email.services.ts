import * as nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { AppError } from "../errors/AppError";

export const createEmailService = async (data: Mail.Options): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail(data);
  } catch (error) {
    console.log("Internal Server Error", error);
    throw new AppError("Internal Server Error", 500);
  }
};
