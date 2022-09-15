import { LeRenderDocPage } from "@/components";
import { Navigate, Route, Routes } from "react-router-dom";

import {
	BoxPage,
	ButtonPage,
	CSSPage,
	GridPage,
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
				element={<LeRenderDocPage doc={<OverviewPage />} />}
			/>
			<Route
				path="started/installation"
				element={<LeRenderDocPage doc={<InstallationPage />} />}
			/>
			<Route
				path="started/lecss"
				element={<LeRenderDocPage doc={<CSSPage />} />}
			/>
			<Route
				path="layout/topography"
				element={<LeRenderDocPage doc={<TopographyPage />} />}
			/>
			<Route
				path="layout/grid"
				element={<LeRenderDocPage doc={<GridPage />} />}
			/>
			<Route
				path="layout/box"
				element={<LeRenderDocPage doc={<BoxPage />} />}
			/>
			<Route
				path="components/button"
				element={<LeRenderDocPage doc={<ButtonPage />} />}
			/>
			<Route path="*" element={<LeRenderDocPage doc={<NotFoundPage />} />} />
		</Routes>
	);
};

export default AppRouter;
