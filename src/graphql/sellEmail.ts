import { MutationResolvers } from "@/generated/resolvers-types";
import { sendMessage } from "@/graphql/emails";
import { ResolverContext } from "@/graphql/resolvers";

export const sellEmail: MutationResolvers<ResolverContext>["sellEmail"] = async (
  _: any,
  {
    email: {
      shop,
      firstName,
      lastName,
      email,
      address,
      postCode,
      town,
      sticker,
      message,
    },
  }
) => {
  await sendMessage({
    to: process.env.EMAIL ?? "",
    from: `website@einmalohnebitte.de`, // sender address
    subject: `[Verkaufen] ${shop} ${firstName} ${lastName}`, // Subject line
    html: `
        <h1>${shop} (${firstName} ${lastName})</h1>
        <p>Email: ${email} </p>
        <p>Address: ${address}, ${postCode}, ${town} </p>
        <p>Stickers: ${sticker} </p>
        <p>Message: ${message} </p>
    `,
  });

  return true;
};
