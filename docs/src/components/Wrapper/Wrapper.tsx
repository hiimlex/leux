import { LeSideAnchorNav, LeSideNav } from "..";
import { useBreakpoint } from "@leux/ui";
import "./Wrapper.scss";
import React from "react";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
	const { breakpoint } = useBreakpoint();

	return (
		<>
			<div className="le-md--container">
				<div className={"le-md--content" + ` le-md--content--${breakpoint}`}>
					<LeSideNav></LeSideNav>
					<main className={"le-docs" + ` le-docs--${breakpoint}`}>{children}</main>
					<LeSideAnchorNav />
				</div>
			</div>
		</>
	);
};

export default Wrapper;
