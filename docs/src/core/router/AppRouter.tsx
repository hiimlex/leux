import { Route, Routes } from "react-router-dom";
import { Overview } from "@/pages/";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Overview />} />
		</Routes>
	);
};

export default AppRouter;
