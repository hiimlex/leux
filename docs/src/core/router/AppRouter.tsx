import { LeRenderDocPage } from "@/components";
import { Navigate, Route, Routes } from "react-router-dom";

import {
	BadgePage,
	BoxPage,
	ButtonPage,
	CSSPage,
	GridPage,
	InputPage,
	InstallationPage,
	NotFoundPage,
	OverviewPage,
	TopographyPage,
} from "@/pages";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="started/overview" replace />} />
			<Route
				path="started/overview"
				element={<LeRenderDocPage doc={<OverviewPage />} title="Overview" />}
			/>
			<Route
				path="started/installation"
				element={
					<LeRenderDocPage doc={<InstallationPage />} title="Installation" />
				}
			/>
			<Route
				path="started/lecss"
				element={<LeRenderDocPage doc={<CSSPage />} title="LeCSS" />}
			/>
			<Route
				path="layout/topography"
				element={
					<LeRenderDocPage doc={<TopographyPage />} title="Topography" />
				}
			/>
			<Route
				path="layout/grid"
				element={<LeRenderDocPage doc={<GridPage />} title="Grid" />}
			/>
			<Route
				path="layout/box"
				element={<LeRenderDocPage doc={<BoxPage />} title="Box" />}
			/>
			<Route
				path="components/button"
				element={<LeRenderDocPage doc={<ButtonPage />} title="Button" />}
			/>
			<Route
				path="components/badge"
				element={<LeRenderDocPage doc={<BadgePage />} title="Badge" />}
			/>
			<Route
				path="components/input"
				element={<LeRenderDocPage doc={<InputPage />} title="Input" />}
			/>
			<Route
				path="*"
				element={<LeRenderDocPage doc={<NotFoundPage />} title="Not Found" />}
			/>
		</Routes>
	);
};

export default AppRouter;
