import { MutationResolvers } from "@/server/generated/resolvers-types";
import type { ResolverContext } from "@/server/resolvers";
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

export const sendEmail: MutationResolvers<ResolverContext>["sendEmail"] =
  async (_: any, { email: { subject, html, email } }) => {
    await sendMessage({
      to: process.env.EMAIL ?? "",
      from: `website@einmalohnebitte.de`, // sender address
      subject,
      html,
    });

    await sendMessage({
      to: email ?? "",
      from: `website@einmalohnebitte.de`, // sender address
      subject,
      html,
    });

    return true;
  };
