import { NavLink } from "react-router-dom";
import "./SideNav.scss";

export interface ILink {
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
		{ name: "Button", path: "/components/button" },
		{ name: "Dropdown", path: "/components/dropdown" },
		{ name: "Pagination", path: "/components/pagination" },
	],
	Form: [
		{ name: "Checkbox", path: "/components/checkbox" },
		{ name: "Input", path: "/components/input" },
		{ name: "Radio", path: "/components/radio" },
		{ name: "Select", path: "/components/select" },
		{ name: "TextArea", path: "/components/textarea" },
	],
	Display: [
		{ name: "Avatar", path: "/components/avatar" },
		{ name: "Badge", path: "/components/badge" },
		{ name: "Modal", path: "/components/modal" },
		{ name: "Table", path: "/components/table" },
		{ name: "Toast", path: "/components/toast" },
		{ name: "Tooltip", path: "/components/tooltip" },
	],
	Loaders: [
		{ name: "Skeleton", path: "/components/skeleton" },
		{ name: "Spinner", path: "/components/spinner" },
	],
};

export const linksArr: ILink[] = Object.values(LINKS).flat();

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
