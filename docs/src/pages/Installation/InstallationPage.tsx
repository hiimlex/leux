import { LeHighlighter } from "@/components";
import {
	attributes as installationAttr,
	ReactComponent as InstallationMD,
} from "./installation.md";
import React from "react";

const NpmCode = () => (
	<LeHighlighter
		language="bash"
		code={`npm install @leux/ui

yarn install @leux/ui`}
	/>
);

installationAttr["NpmCode"] = NpmCode;

const InstallationPage = () => <InstallationMD {...installationAttr} />;

export default InstallationPage;
