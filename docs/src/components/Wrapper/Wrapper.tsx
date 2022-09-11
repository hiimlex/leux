import { LeSideNav } from "..";
import "./Wrapper.scss";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<>
			<div className="le-md--container">
				<div className="le-md--content">
					<LeSideNav></LeSideNav>
					<main className="le-docs">{children}</main>
				</div>
			</div>
		</>
	);
};

export default Wrapper;
