import React from "react";
import "./SourceButton.scss";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface SourceButtonProps {
	url: string;
	label?: string;
}

const SourceButton: React.FC<SourceButtonProps> = ({ url, label }) => {
	const { t } = useTranslation();

	const navigateToSource = () => {
		window.open(url, "_blank");
	};

	return (
		<button className="le-source--button" onClick={navigateToSource}>
			<FaGithub size={"1rem"} className="le-source--icon" /> {t(label || "Source.Label")}
		</button>
	);
};

export default SourceButton;
