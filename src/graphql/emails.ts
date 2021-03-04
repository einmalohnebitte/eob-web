import mailgun, { messages } from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API ?? "",
  domain: `einmalohnebitte.de`,
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
