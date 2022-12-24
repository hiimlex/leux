import { LeRenderDocPage } from "@/components";
import {
	AvatarPage,
	BadgePage,
	BoxPage,
	ButtonPage,
	CheckboxPage,
	CSSPage,
	GridPage,
	InputPage,
	InstallationPage,
	NotFoundPage,
	OverviewPage,
	SelectPage,
	TooltipPage,
	TopographyPage,
} from "@/pages";
import { Navigate } from "react-router-dom";

type LeRoute = {
	path: string;
	element: JSX.Element;
};

export const routes: LeRoute[] = [
	{
		path: "/",
		element: <Navigate to="started/overview" replace />,
	},
	{
		path: "/started/overview",
		element: <LeRenderDocPage doc={<OverviewPage />} title="Overview" />,
	},
	{
		path: "/started/installation",
		element: <LeRenderDocPage doc={<InstallationPage />} title="Installation" />,
	},
	{
		path: "/started/lecss",
		element: <LeRenderDocPage doc={<CSSPage />} title="LeCSS" />,
	},
	{
		path: "/layout/topography",
		element: <LeRenderDocPage doc={<TopographyPage />} title="Topography" />,
	},
	{
		path: "/layout/grid",
		element: <LeRenderDocPage doc={<GridPage />} title="Grid" />,
	},
	{
		path: "/layout/box",
		element: <LeRenderDocPage doc={<BoxPage />} title="Box" />,
	},
	{
		path: "/components/button",
		element: <LeRenderDocPage doc={<ButtonPage />} title="Button" />,
	},
	{
		path: "/components/badge",
		element: <LeRenderDocPage doc={<BadgePage />} title="Badge" />,
	},
	{
		path: "/components/input",
		element: <LeRenderDocPage doc={<InputPage />} title="Input" />,
	},
	{
		path: "/components/select",
		element: <LeRenderDocPage doc={<SelectPage />} title="Select" />,
	},
	{
		path: "/components/avatar",
		element: <LeRenderDocPage doc={<AvatarPage />} title="Avatar" />,
	},
	{
		path: "/components/checkbox",
		element: <LeRenderDocPage doc={<CheckboxPage />} title="Checkbox" />,
	},
	{
		path: "/components/tooltip",
		element: <LeRenderDocPage doc={<TooltipPage />} title="Tooltip" />,
	},
	{
		path: "*",
		element: <LeRenderDocPage doc={<NotFoundPage />} title="Not Found" />,
	},
];
