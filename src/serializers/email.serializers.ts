import * as yup from "yup";

export const createEmailSerializer = yup.object().shape({
  message: yup.string().required(),
  fromEmail: yup.string().email().required(),
  senderName: yup.string().required(),
});
