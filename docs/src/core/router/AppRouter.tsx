import { LeRenderDocPage } from "@/components";
import { ReactComponent as OverviewMD } from "@/pages/overview.md";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<LeRenderDocPage markdown={<div />} />} />
			<Route
				path="/overview"
				element={<LeRenderDocPage markdown={<OverviewMD />} />}
			/>
		</Routes>
	);
};

export default AppRouter;
