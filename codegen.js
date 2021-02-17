require("dotenv").config({ path: ".env.local" });
const { generate } = require("@graphql-codegen/cli");

async function run() {
  await generate(
    {
      schema: {
        [`https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`]: {
          headers: {
            Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
          },
        },
      },
      documents: "src/components/**/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/graphql.tsx"]: {
          plugins: ["typescript"],
        },
        ["src/"]: {
          preset: "near-operation-file",
          presetConfig: {
            extension: ".generated.ts",
            baseTypesPath: "/generated/graphql.tsx",
          },
          plugins: ["typescript-operations", "typed-document-node"],
        },
        [process.cwd() + "/src/graphql.schema.json"]: {
          plugins: ["introspection"],
        },
      },
    },
    true
  );
}

run();
