// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/e2e/"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*.config.{js,ts}",
    "!**/e2e/**/*",
    "!./*setup*.ts",
  ],
  // preset: 'ts-jest',
  // transform: {
  //   '^.+\\.(ts|tsx)?$': 'ts-jest',
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  // },
  // snapshotFormat: {
  //   escapeString: true,
  //   printBasicPrototype: true,
  // },
  // moduleNameMapper: {
  //   '^uuid$': require.resolve('uuid'),
  // },
  // transformIgnorePatterns: ['/node_modules/'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG mock first
      "\\.svg$": "<rootDir>/__mocks__/svg.js",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
