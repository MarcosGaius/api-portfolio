import { Response, Request } from "express";
import Mail from "nodemailer/lib/mailer";
import { createEmailService } from "../services/email.services";

export const handleEmailCreation = async (req: Request, res: Response) => {
  const { message, fromEmail, senderName } = req.body;

  const emailInfo: Mail.Options = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Portfólio - Mensagem de ${senderName} - ${fromEmail}`,
    text: `
    ${message} 
    
    🧑‍💻 Enviado por ${senderName} - ${fromEmail}
    `,
  };

  await createEmailService(emailInfo);
  return res.status(200).json({ message: "E-mail sent with success." });
};
