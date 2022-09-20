import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";
import "./RenderPage.scss";

interface RenderPageProps {
	doc: ReactElement;
}

const RenderDocPage = ({ doc }: RenderPageProps) => {
	const { hash, pathname } = useLocation();

	const handleHashScroll = () => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));

			if (element) {
				animateScroll.scrollTo(element.offsetTop - 90);
			}
		} else if (document.documentElement.scrollTop > 0) {
			animateScroll.scrollToTop();
		}
	};

	useEffect(() => {
		handleHashScroll();
	}, [pathname]);

	return <div className="le-markdown" children={doc}></div>;
};

export default RenderDocPage;
