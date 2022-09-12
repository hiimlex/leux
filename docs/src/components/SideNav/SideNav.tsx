import { NavLink } from "react-router-dom";
import "./SideNav.scss";

interface ILink {
	name: string;
	path: string;
}

const LINKS: Record<string, ILink[]> = {
	"Getting Started": [
		{ name: "Overview", path: "/started/overview" },
		{ name: "Installation", path: "/started/installation" },
		{ name: "CSS", path: "/started/css" },
	],
	Layout: [
		{
			name: "Topography",
			path: "/layout/topography",
		},
		{
			name: "Box",
			path: "/layout/box",
		},
		{
			name: "Container",
			path: "/layout/container",
		},
		{
			name: "Grid",
			path: "/layout/grid",
		},
	],
	Components: [{ name: "Button", path: "/components/button" }],
};

const SideNav = () => {
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
