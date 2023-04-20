import { LeHighlighter } from "@/components";
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

installationAttr["NpmCode"] = NpmCode;

const InstallationPage = () => <InstallationMD {...installationAttr} />;

export default InstallationPage;
