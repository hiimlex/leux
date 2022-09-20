import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { Topography } from "../../../../src";
import "./SideAnchorNav.scss";

interface AnchorLink {
	label: string;
	href: string;
	element: HTMLElement;
}

const SideAnchorNav = () => {
	const [anchors, setAnchors] = useState<AnchorLink[]>([]);
	const [activeAnchor, setActiveAnchor] = useState("");

	const { pathname } = useLocation();

	const getAllAnchors = () => {
		const anchors: AnchorLink[] = [];

		document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
			const anchor = el as HTMLElement;

			if (anchor.id) {
				anchors.push({ href: el.id, label: anchor.innerText, element: anchor });
			}
		});

		setAnchors(anchors);
	};

	useEffect(() => {
		getAllAnchors();
	}, [pathname]);

	const [scrollTop, setScrollTop] = useState(document.body.scrollTop);

	const handleActiveAnchor = () => {
		const active = anchors.find(({ element }, index) => {
			const {
				offsetTop: elementOffset,
				clientHeight: elementHeight,
				scrollHeight: elementScrollHeight,
			} = element;

			const { scrollHeight, clientHeight } = document.documentElement;

			if (scrollTop + clientHeight >= scrollHeight) {
				return index === anchors.length - 1;
			}

			return elementOffset >= scrollTop;
		});

		if (active) {
			setActiveAnchor(active.href);
		}
	};

	useEffect(() => {
		handleActiveAnchor();
	});

	useEffect(() => {
		const onScroll = (e: any) => {
			setScrollTop(e.target.documentElement.scrollTop);
		};

		handleActiveAnchor();

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	return (
		<nav className="le-anchor-nav">
			<div className="fixed-content">
				<Topography type="subtitle-2">TOPICs</Topography>

				<div className="le-anchor-links">
					{anchors.map(({ href, label }, index) => (
						<Link
							key={index}
							to={href}
							offset={-95}
							className={
								"le-anchor-link le-text--body-1" +
								(activeAnchor === href ? " active" : "")
							}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default SideAnchorNav;
