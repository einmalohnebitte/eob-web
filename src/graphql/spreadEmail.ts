import { MutationResolvers } from "@/generated/resolvers-types";
import { sendMessage } from "@/graphql/emails";
import { ResolverContext } from "@/graphql/resolvers";

export const spreadEmail: MutationResolvers<ResolverContext>["spreadEmail"] = async (
  _: any,
  { email: { firstName, lastName, email, postCode, town, message } }
) => {
  await sendMessage({
    to: process.env.EMAIL ?? "",
    from: `website@einmalohnebitte.de`, // sender address
    subject: `[Verkaufen] ${firstName} ${lastName}`, // Subject line
    html: `
        <h1> ${firstName} ${lastName}</h1>
        <p>Email: ${email} </p>
        <p>Location:  ${postCode}, ${town} </p>
        <p>Message: ${message} </p>
    `,
  });

  return true;
};
