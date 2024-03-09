import type { Config } from "jest";

const config: Config = {
	silent: true,
	projects: [
		{
			displayName: "lib",
			testMatch: ["<rootDir>/src/**/*.(spec|test).tsx"],
			testEnvironment: "jsdom",
			moduleNameMapper: {
				".(css|less|scss)$": "identity-obj-proxy",
			},
		},
	],
	coverageReporters: ["json-summary", "text"],
};

export default config;
