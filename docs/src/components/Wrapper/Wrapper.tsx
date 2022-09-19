import { LeSideNav } from "..";
import { Topography } from "../../../../src";
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
					<main className="le-docs">
						{children}
						<footer className="le-footer">
							<Topography type="body-1">
								Designed and developed by <b>@hiimlex</b>.
							</Topography>
						</footer>
					</main>
				</div>
			</div>
		</>
	);
};

export default Wrapper;
