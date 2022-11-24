"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEmailCreation = void 0;
const email_services_1 = require("../services/email.services");
const handleEmailCreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, fromEmail, senderName } = req.body;
    const emailInfo = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Portfólio - Mensagem de ${senderName} - ${fromEmail}`,
        text: `
    ${message} 
    
    🧑‍💻 Enviado por ${senderName} - ${fromEmail}
    `,
    };
    yield (0, email_services_1.createEmailService)(emailInfo);
    return res.status(200).json({ message: "E-mail sent with success." });
});
exports.handleEmailCreation = handleEmailCreation;
