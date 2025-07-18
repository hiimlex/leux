import { NavLink } from "react-router-dom";
import "./SideNav.scss";
import React, { useEffect } from "react";
import { RoutesPath } from "../../models";

export interface ILink {
	name: string;
	path: string;
}

export const LINKS: Record<string, ILink[]> = {
	"Getting Started": [
		{ name: "Overview", path: RoutesPath.Overview },
		{ name: "Installation", path: RoutesPath.Installation },
		{ name: "Theming", path: RoutesPath.Theming },
		{ name: "Global Config", path: RoutesPath.GlobalConfig },
	],
	Layout: [
		{
			name: "Box",
			path: RoutesPath.Box,
		},
		{
			name: "Grid",
			path: RoutesPath.Grid,
		},

		{
			name: "Typography",
			path: RoutesPath.Typography,
		},
	],
	Action: [
		{ name: "Button", path: RoutesPath.Button },
		{ name: "Dropdown", path: RoutesPath.Dropdown },
		{ name: "Pagination", path: RoutesPath.Pagination },
	],
	Form: [
		{ name: "Checkbox", path: RoutesPath.Checkbox },
		{ name: "Input", path: RoutesPath.Input },
		{ name: "Radio", path: RoutesPath.Radio },
		{ name: "Select", path: RoutesPath.Select },
		{ name: "TextArea", path: RoutesPath.TextArea },
	],
	Display: [
		{ name: "Avatar", path: RoutesPath.Avatar },
		{ name: "Badge", path: RoutesPath.Badge },
		{ name: "Modal", path: RoutesPath.Modal },
		{ name: "Table", path: RoutesPath.Table },
		{ name: "Toast", path: RoutesPath.Toast },
		{ name: "Tooltip", path: RoutesPath.Tooltip },
	],
	Loaders: [
		{ name: "Progress", path: RoutesPath.Progress },
		{ name: "Skeleton", path: RoutesPath.Skeleton },
		{ name: "Spinner", path: RoutesPath.Spinner },
	],
};

export const linksArr: ILink[] = Object.values(LINKS).flat();

const SideNav = () => {
	useEffect(() => {
		const isDev = window.origin?.includes("localhost");

		if (isDev && !LINKS["Getting Started"].some((link) => link.path === RoutesPath.Dev)) {
			LINKS["Getting Started"].push({ name: "Dev playground", path: RoutesPath.Dev });
		}
	}, []);

	return (
		<aside className="le-sidenav">
			<div className="fixed-content">
				<div className="overflow-content">
					{Object.keys(LINKS).map((category) => (
						<section key={category} className="le-sidenav--section">
							<div className="le-sidenav--header">
								<span className="le-text-body-2">{category}</span>
							</div>
							<div className="le-sidenav--links">
								{LINKS[category].map(({ name, path }) => (
									<NavLink key={path} to={path} className="le-text-caption">
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
