import { LeRenderDocPage } from "@/components";
import { Navigate, Route, Routes } from "react-router-dom";

import {
	InstallationPage,
	LeButtonPage,
	LeCSSPage,
	LeTopographyPage,
	OverviewPage,
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
				element={<LeRenderDocPage doc={<LeCSSPage />} />}
			/>
			<Route
				path="layout/letopography"
				element={<LeRenderDocPage doc={<LeTopographyPage />} />}
			/>
			<Route
				path="started/lecss"
				element={<LeRenderDocPage doc={<LeCSSPage />} />}
			/>
			<Route
				path="components/lebutton"
				element={<LeRenderDocPage doc={<LeButtonPage />} />}
			/>
			<Route path="*" element={<Navigate to="started/overview" replace />} />
		</Routes>
	);
};

export default AppRouter;
