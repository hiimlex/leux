import "./SideNav.scss";
import { matchRoutes, NavLink, useLocation } from "react-router-dom";

interface ILink {
	name: string;
	path: string;
}

const LINKS: Record<string, ILink[]> = {
	"Getting Started": [
		{ name: "Overview", path: "/started/overview" },
		{ name: "Installation", path: "/started/installation" },
	],
	Layout: [
		{
			name: "Topography",
			path: "/layout/topography",
		},
	],
	Components: [
		{ name: "Button", path: "/components/button" },
		{ name: "LeCSS", path: "/components/lecss" },
	],
};

const SideNav = () => {
	const location = useLocation();

	return (
		<aside className="le-sidenav">
			{Object.keys(LINKS).map((category) => (
				<section key={category} className="le-sidenav--section">
					<div className="le-sidenav--header">
						<span className="le-text--subtitle-2">{category}</span>
					</div>
					<div className="le-sidenav--links">
						{LINKS[category].map(({ name, path }) => (
							<NavLink key={path} to={path} className="le-text--body-1">
								{name}
							</NavLink>
						))}
					</div>
				</section>
			))}
		</aside>
	);
};

export default SideNav;
