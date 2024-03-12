import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./RenderPage.scss";

interface RenderPageProps {
	doc: ReactElement;
	title: string;
}

const RenderDocPage = ({ doc, title }: RenderPageProps) => {
	const { hash, pathname } = useLocation();

	const handleHashScroll = () => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));

			if (element) {
				document.documentElement.scrollTo(0, element.offsetTop - 90);
			}
		} else if (document.documentElement.scrollTop > 0) {
			document.documentElement.scrollTo(0, 0);
		}
	};

	const handlePageTitle = () => {
		document.title = `leux - ${title}`;
	};

	useEffect(() => {
		handleHashScroll();
		handlePageTitle();
	}, [pathname]);

	return <div className="le-markdown" children={doc}></div>;
};

export default RenderDocPage;
