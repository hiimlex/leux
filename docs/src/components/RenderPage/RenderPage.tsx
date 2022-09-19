import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";
import "./RenderPage.scss";

interface RenderPageProps {
	doc: ReactElement;
}

const RenderDocPage = ({ doc }: RenderPageProps) => {
	const { hash } = useLocation();

	const handleHashScroll = () => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));

			if (element) {
				animateScroll.scrollTo(element.offsetTop - 65);
			}
		} else {
			animateScroll.scrollToTop();
		}
	};

	useEffect(() => {
		handleHashScroll();
	}, []);

	return <div className="le-markdown" children={doc}></div>;
};

export default RenderDocPage;
