module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      branches: 67,
      functions: 66,
      lines: 78,
      statements: 76
    }
  }
};
