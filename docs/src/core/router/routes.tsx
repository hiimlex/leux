import { LeRenderDocPage } from "@/components";
import {
	AvatarPage,
	BadgePage,
	BoxPage,
	ButtonPage,
	CheckboxPage,
	CSSPage,
	DropdownPage,
	GridPage,
	InputPage,
	InstallationPage,
	ModalPage,
	NotFoundPage,
	OverviewPage,
	PaginationPage,
	RadioPage,
	SelectPage,
	SkeletonPage,
	SpinnerPage,
	TablePage,
	TextAreaPage,
	ToastPage,
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
		path: "/components/table",
		element: <LeRenderDocPage doc={<TablePage />} title="Table" />,
	},
	{
		path: "/components/textarea",
		element: <LeRenderDocPage doc={<TextAreaPage />} title="TextArea" />,
	},
	{
		path: "/components/radio",
		element: <LeRenderDocPage doc={<RadioPage />} title="Radio" />,
	},
	{
		path: "/components/pagination",
		element: <LeRenderDocPage doc={<PaginationPage />} title="Pagination" />,
	},
	{
		path: "/components/modal",
		element: <LeRenderDocPage doc={<ModalPage />} title="Modal" />,
	},
	{
		path: "/components/dropdown",
		element: <LeRenderDocPage doc={<DropdownPage />} title="Dropdown" />,
	},
	{
		path: "/components/spinner",
		element: <LeRenderDocPage doc={<SpinnerPage />} title="Spinner" />,
	},
	{
		path: "/components/skeleton",
		element: <LeRenderDocPage doc={<SkeletonPage />} title="Dropdown" />,
	},
	{
		path: "/components/toast",
		element: <LeRenderDocPage doc={<ToastPage />} title="Toast" />,
	},
	{
		path: "*",
		element: <LeRenderDocPage doc={<NotFoundPage />} title="Not Found" />,
	},
];
