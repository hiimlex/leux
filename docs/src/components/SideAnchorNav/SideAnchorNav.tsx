import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { Topography } from "../../../../src";
import "./SideAnchorNav.scss";

interface AnchorLink {
	label: string;
	href: string;
}

const SideAnchorNav = () => {
	const [anchors, setAnchors] = useState<AnchorLink[]>([]);
	const { pathname } = useLocation();

	const getAllAnchors = () => {
		const anchors: AnchorLink[] = [];

		document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
			const anchor = el as HTMLElement;

			if (anchor.id) {
				anchors.push({ href: el.id, label: anchor.innerText });
			}
		});

		setAnchors(anchors);
	};

	useEffect(() => {
		getAllAnchors();
	}, [pathname]);

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
							className="le-anchor-link le-text--body-1"
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
