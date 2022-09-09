import React from "react";
import {
	ReactComponent as InstallationMD,
	attributes as installationAttr,
} from "./installation.md";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { NavLink } from "react-router-dom";

const NpmCode = () => (
	<Code language="bash" style={dracula}>
		{`npm install leux
// or
yarn install leux`}
	</Code>
);

const LinkCode = () => (
	<Code language="html" style={dracula}>
		{`<link rel="stylesheet" href="leux.min.css" />`}
	</Code>
);

const InstallationPage = () => {
	installationAttr["NpmCode"] = NpmCode;
	installationAttr["LinkCode"] = LinkCode;
	installationAttr["NavLink"] = NavLink;

	return (
		<React.Fragment>
			<InstallationMD {...installationAttr} />
		</React.Fragment>
	);
};

export default InstallationPage;
