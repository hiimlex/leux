import { LeRenderDocPage } from "@/components";
import {
	AvatarPage,
	BadgePage,
	BoxPage,
	ButtonPage,
	CheckboxPage,
	DevPage,
	DropdownPage,
	GlobalConfigPage,
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
	ThemingPage,
	ToastPage,
	TooltipPage,
	TypographyPage,
} from "@/pages";
import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { RoutesPath } from "../../models";
import Dev from "@/pages/Dev";

type LeRoute = {
	path: string;
	element: JSX.Element;
};

export const routes: LeRoute[] = [
	{
		path: RoutesPath.Home,
		element: <Navigate to="started/overview" replace />,
	},
	{
		path: RoutesPath.Overview,
		element: <LeRenderDocPage doc={<OverviewPage />} title="Overview" />,
	},
	{
		path: RoutesPath.Installation,
		element: <LeRenderDocPage doc={<InstallationPage />} title="Installation" />,
	},
	{
		path: RoutesPath.Theming,
		element: <LeRenderDocPage doc={<ThemingPage />} title="Theming" />,
	},
	{
		path: RoutesPath.GlobalConfig,
		element: <LeRenderDocPage doc={<GlobalConfigPage />} title="Global Config" />,
	},
	{
		path: RoutesPath.Typography,
		element: <LeRenderDocPage doc={<TypographyPage />} title="Typography" />,
	},
	{
		path: RoutesPath.Grid,
		element: <LeRenderDocPage doc={<GridPage />} title="Grid" />,
	},
	{
		path: RoutesPath.Box,
		element: <LeRenderDocPage doc={<BoxPage />} title="Box" />,
	},
	{
		path: RoutesPath.Button,
		element: <LeRenderDocPage doc={<ButtonPage />} title="Button" />,
	},
	{
		path: RoutesPath.Badge,
		element: <LeRenderDocPage doc={<BadgePage />} title="Badge" />,
	},
	{
		path: RoutesPath.Input,
		element: <LeRenderDocPage doc={<InputPage />} title="Input" />,
	},
	{
		path: RoutesPath.Select,
		element: <LeRenderDocPage doc={<SelectPage />} title="Select" />,
	},
	{
		path: RoutesPath.Avatar,
		element: <LeRenderDocPage doc={<AvatarPage />} title="Avatar" />,
	},
	{
		path: RoutesPath.Checkbox,
		element: <LeRenderDocPage doc={<CheckboxPage />} title="Checkbox" />,
	},
	{
		path: RoutesPath.Tooltip,
		element: <LeRenderDocPage doc={<TooltipPage />} title="Tooltip" />,
	},
	{
		path: RoutesPath.Table,
		element: <LeRenderDocPage doc={<TablePage />} title="Table" />,
	},
	{
		path: RoutesPath.TextArea,
		element: <LeRenderDocPage doc={<TextAreaPage />} title="TextArea" />,
	},
	{
		path: RoutesPath.Radio,
		element: <LeRenderDocPage doc={<RadioPage />} title="Radio" />,
	},
	{
		path: RoutesPath.Pagination,
		element: <LeRenderDocPage doc={<PaginationPage />} title="Pagination" />,
	},
	{
		path: RoutesPath.Modal,
		element: <LeRenderDocPage doc={<ModalPage />} title="Modal" />,
	},
	{
		path: RoutesPath.Dropdown,
		element: <LeRenderDocPage doc={<DropdownPage />} title="Dropdown" />,
	},
	{
		path: RoutesPath.Spinner,
		element: <LeRenderDocPage doc={<SpinnerPage />} title="Spinner" />,
	},
	{
		path: RoutesPath.Skeleton,
		element: <LeRenderDocPage doc={<SkeletonPage />} title="Dropdown" />,
	},
	{
		path: RoutesPath.Toast,
		element: <LeRenderDocPage doc={<ToastPage />} title="Toast" />,
	},
	{
		path: RoutesPath.Dev,
		element: <DevPage />,
	},

	{
		path: RoutesPath.NotFound,
		element: <LeRenderDocPage doc={<NotFoundPage />} title="Not Found" />,
	},
];
