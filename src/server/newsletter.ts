import { MutationResolvers } from "@/server/generated/resolvers-types";
import type { ResolverContext } from "@/server/resolvers";

export const newsletter: MutationResolvers<ResolverContext>["newsletter"] =
  async (_: any, { user: { firstName, lastName, email } }) => {
    try {
      const leads = await fetch(process.env.MAUTIC_BASE + "/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            process.env.MAUTIC_USERPWD ?? ""
          ).toString("base64")}`,
        },
        body: JSON.stringify({
          is_published: 1,
          firstname: firstName,
          lastname: lastName,
          created_by_user: "Admin EOB",
          points: 0,
          email,
          date_identified: new Date().toISOString().replace("Z", ""),
        }),
      }).then((r) => r.json());

      const update = await fetch(process.env.MAUTIC_BASE + "/lead_tags_xref", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            process.env.MAUTIC_USERPWD ?? ""
          ).toString("base64")}`,
        },
        body: JSON.stringify({ tag_id: 233, lead_id: leads.insertId }),
      }).then((r) => r.json());
    } catch (e) {}
    return true;
  };
