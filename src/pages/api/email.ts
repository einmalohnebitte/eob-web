import type { NextApiRequest, NextApiResponse } from "next";
import mailgun, { messages } from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API ?? "",
  domain: `mailg.einmalohnebitte.de`,
  host: `api.eu.mailgun.net`,
});

export const sendMessage = (data: messages.SendData) => {
  return new Promise((resolve, reject) => {
    mg.messages().send(data, function (error, body) {
      if (error) {
        reject(error);
      }
      resolve(body);
    });
  });
};

export interface EmailRequest extends NextApiRequest {
  body: {
    subject: string;
    html: string;
    email: string;
  };
}

export default async function sendEmail(
  req: EmailRequest,
  res: NextApiResponse
) {
  try {
    const { subject, html, email } = req.body;
    await sendMessage({
      to: process.env.EMAIL ?? "",
      cc: email,
      from: `website@einmalohnebitte.de`, // sender address
      subject,
      html,
    });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
  res.status(200).json({ sent: true });
}
