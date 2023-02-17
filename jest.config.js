/* eslint-disable */

const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage/",
    "<rootDir>/cache",
    "<rootDir>/build",
  ],
  globals: {
    __VERSION__: "test",
  },
  testEnvironment: "jsdom",
};
const f = async () => {
  const c = await createJestConfig(customJestConfig)();
  delete c["moduleNameMapper"]["^.+\\.(css|sass|scss)$"];
  return c;
};

module.exports = f();
