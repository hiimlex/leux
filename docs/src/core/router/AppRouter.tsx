import { LeRenderDocPage } from "@/components";
import { Navigate, Route, Routes } from "react-router-dom";

import {
	ButtonPage,
	CSSPage,
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
				path="started/css"
				element={<LeRenderDocPage doc={<CSSPage />} />}
			/>
			<Route
				path="layout/topography"
				element={<LeRenderDocPage doc={<TopographyPage />} />}
			/>
			<Route
				path="components/button"
				element={<LeRenderDocPage doc={<ButtonPage />} />}
			/>
			<Route path="*" element={<LeRenderDocPage doc={<NotFoundPage />} />} />
			<Route path="**" element={<LeRenderDocPage doc={<NotFoundPage />} />} />
		</Routes>
	);
};

export default AppRouter;
