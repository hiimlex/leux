import { ReactElement } from "react";
import "./RenderPage.scss";

interface RenderPageProps {
	doc: ReactElement;
}

const RenderDocPage = ({ doc }: RenderPageProps) => {
	return <div className="le-markdown" children={doc}></div>;
};

export default RenderDocPage;
