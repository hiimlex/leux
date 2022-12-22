import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
	return (
		<Routes>
			{routes &&
				routes.map(({ path, element }, index) => (
					<Route key={index} path={path} element={element} />
				))}
		</Routes>
	);
};

export default AppRouter;
