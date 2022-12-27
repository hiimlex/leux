import type { Config } from "jest";

const config: Config = {
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
};

export default config;
