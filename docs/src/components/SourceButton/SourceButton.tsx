import "./SourceButton.scss";
import { FaGithub } from "react-icons/fa";

interface SourceButtonProps {
	url: string;
}

const SourceButton = ({ url }: SourceButtonProps) => {
	const navigateToSource = () => {
		window.open(url, "_blank");
	};

	return (
		<button className="le-source--button" onClick={navigateToSource}>
			<FaGithub size={"1rem"} className="le-source--icon" />
			Source
		</button>
	);
};

export default SourceButton;
