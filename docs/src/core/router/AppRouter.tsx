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
			<Route path="/leux" element={<Navigate to="started/overview" replace />} />
			<Route
				path="/leux/started/overview"
				element={<LeRenderDocPage doc={<OverviewPage />} title="Overview" />}
			/>
			<Route
				path="/leux/started/installation"
				element={
					<LeRenderDocPage doc={<InstallationPage />} title="Installation" />
				}
			/>
			<Route
				path="/leux/started/lecss"
				element={<LeRenderDocPage doc={<CSSPage />} title="LeCSS" />}
			/>
			<Route
				path="/leux/layout/topography"
				element={
					<LeRenderDocPage doc={<TopographyPage />} title="Topography" />
				}
			/>
			<Route
				path="/leux/layout/grid"
				element={<LeRenderDocPage doc={<GridPage />} title="Grid" />}
			/>
			<Route
				path="/leux/layout/box"
				element={<LeRenderDocPage doc={<BoxPage />} title="Box" />}
			/>
			<Route
				path="/leux/components/button"
				element={<LeRenderDocPage doc={<ButtonPage />} title="Button" />}
			/>
			<Route
				path="/leux/components/badge"
				element={<LeRenderDocPage doc={<BadgePage />} title="Badge" />}
			/>
			<Route
				path="/leux/components/input"
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
