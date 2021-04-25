import { MutationResolvers } from "@/generated/resolvers-types";
import { ResolverContext } from "@/graphql/resolvers";
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

export const sendEmail: MutationResolvers<ResolverContext>["sendEmail"] = async (
  _: any,
  { email: { subject, html } }
) => {
  await sendMessage({
    to: process.env.EMAIL ?? "",
    from: `website@einmalohnebitte.de`, // sender address
    subject,
    html,
  });

  return true;
};
