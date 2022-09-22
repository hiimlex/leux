import { LeHighlighter } from "@/components";
import { NavLink } from "react-router-dom";
import {
	attributes as installationAttr,
	ReactComponent as InstallationMD,
} from "./installation.md";

const NpmCode = () => (
	<LeHighlighter
		language="bash"
		code={`npm install leux

yarn install leux`}
	/>
);

const LinkCode = () => (
	<LeHighlighter
		language="tsx"
		code={`<link rel="stylesheet" href="leux.min.css" />`}
	/>
);

installationAttr["NpmCode"] = NpmCode;
installationAttr["LinkCode"] = LinkCode;
installationAttr["NavLink"] = NavLink;

const InstallationPage = () => <InstallationMD {...installationAttr} />;

export default InstallationPage;
