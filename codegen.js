// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: ".env" });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generate } = require("@graphql-codegen/cli");

async function run() {
  await generate(
    {
      schema: {
        [`https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`]:
          {
            headers: {
              Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
            },
          },
      },
      documents: "src/**/*.cms.graphql",
      generates: {
        [process.cwd() + "/src/server/generated/graphql.tsx"]: {
          plugins: ["typescript"],
        },
        ["src/"]: {
          preset: "near-operation-file",
          presetConfig: {
            extension: ".generated.ts",
            baseTypesPath: "/server/generated/graphql.tsx",
          },
          plugins: ["typescript-operations", "typed-document-node"],
        },
        [process.cwd() + "/src/server.schema.json"]: {
          plugins: ["introspection"],
        },
      },
    },
    true
  );
}

run();
