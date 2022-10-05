module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
	},
	coveragePathIgnorePatterns: [
		"src/index.js",
		"src/05_Store",
		"src/04_Constans",
		"src/06_Utils",
		"src/07_Services",
	],
	coverageThreshold: {
		global: {
			statements: 80,
		},
	},
};
