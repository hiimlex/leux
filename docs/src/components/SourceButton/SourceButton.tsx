import React from "react";
import "./SourceButton.scss";
import { FaGithub } from "react-icons/fa";

interface SourceButtonProps {
	url: string;
	label?: string;
}

const SourceButton: React.FC<SourceButtonProps> = ({ url, label }) => {
	const navigateToSource = () => {
		window.open(url, "_blank");
	};

	return (
		<button className="le-source--button le-text-button" onClick={navigateToSource}>
			<FaGithub size={"1rem"} className="le-source--icon" /> {label || "Code"}
		</button>
	);
};

export default SourceButton;
