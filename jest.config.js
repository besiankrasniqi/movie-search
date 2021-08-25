module.exports = {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/__tests__/*js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: { "\\.[jt]sx?$": "babel-jest" },
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
}