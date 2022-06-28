export default {
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
  testMatch: ["**//**/*.spec.ts"],
};
