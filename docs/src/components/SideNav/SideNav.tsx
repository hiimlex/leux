import { NavLink } from "react-router-dom";
import "./SideNav.scss";

interface ILink {
	name: string;
	path: string;
}

export const LINKS: Record<string, ILink[]> = {
	"Getting Started": [
		{ name: "Overview", path: "/started/overview" },
		{ name: "Installation", path: "/started/installation" },
		{ name: "LeCSS", path: "/started/lecss" },
	],
	Layout: [
		{
			name: "Box",
			path: "/layout/box",
		},
		{
			name: "Grid",
			path: "/layout/grid",
		},
		{
			name: "Topography",
			path: "/layout/topography",
		},
	],
	Action: [
		{ name: "Alert", path: "/components/alert" },
		{ name: "Button", path: "/components/button" },
		{ name: "Dropdown", path: "/components/dropdown" },
		{ name: "Skeleton", path: "/components/skeleton" },
		{ name: "Spinner", path: "/components/spinner" },
		{ name: "Toast", path: "/components/popover" },
	],
	Form: [
		{ name: "Checkbox", path: "/components/checkbox" },
		{ name: "Input", path: "/components/input" },
		{ name: "Radio", path: "/components/radio" },
		{ name: "Select", path: "/components/select" },
		{ name: "Switch", path: "/components/switch" },
		{ name: "TextArea", path: "/components/textarea" },
	],
	"Data Display": [
		{ name: "Avatar", path: "/components/avatar" },
		{ name: "Badge", path: "/components/badge" },
		{ name: "Breadcrumb", path: "/components/breadcrumb" },
		{ name: "Modal", path: "/components/modal" },
		{ name: "Table", path: "/components/table" },
		{ name: "Tooltip", path: "/components/tooltip" },
	],
};

const SideNav = () => {
	return (
		<aside className="le-sidenav">
			<div className="fixed-content">
				<div className="overflow-content">
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
				</div>
			</div>
		</aside>
	);
};

export default SideNav;
