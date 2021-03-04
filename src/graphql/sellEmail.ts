import { MutationResolvers } from "@/generated/resolvers-types";
import { sendMessage } from "@/graphql/emails";
import { ResolverContext } from "@/graphql/resolvers";

export const sellEmail: MutationResolvers<ResolverContext>["sellEmail"] = async (
  _: any,
  { email: { firstName, lastName, email, subject, message } }
) => {
  await sendMessage({
    to: process.env.EMAIL ?? "",
    from: email, // sender address
    subject: `[Verkaufen] ${subject}`, // Subject line
    html: `
        <h1>${firstName} ${lastName}</h1>
        <p> ${message} </p>
    `,
  });

  return true;
};
