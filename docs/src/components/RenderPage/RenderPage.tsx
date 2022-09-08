import React, { ReactElement } from "react";
import "./RenderPage.scss";

interface RenderPageProps {
	markdown: ReactElement;
}

const RenderDocPage = ({ markdown }: RenderPageProps) => {
	return <div className="le-markdown" children={markdown}></div>;
};

export default RenderDocPage;
