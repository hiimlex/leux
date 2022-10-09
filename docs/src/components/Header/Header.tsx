import { FaGithub } from "react-icons/fa";
import { Topography, useBreakpoint } from "../../../../src";
import "./Header.scss";

import { version } from "../../../../package.json";

const Header = () => {
	const { breakpoint } = useBreakpoint();

	return (
		<header className="le-app-header">
			<div className={"le-app-header--content" + ` le-app-header--content--${breakpoint}`}>
				<div className="le-logo">
					<div className="le-logo--content">
						<h1 className="le-logo--title le-text--h1">LeUX</h1>
						<h1 className="le-logo--shadow le-text--h1">LeUX</h1>
					</div>
				</div>
				<div className="flex-1"></div>
				<nav className="le-nav">
					<span className="le-nav--item">
						<a className="le-nav--link" target="_blank" href="https://linktr.ee/yuninho">
							<Topography type="body-1">Find author</Topography>
						</a>
					</span>
					<span className="le-nav--item">
						<a className="le-nav--link" target="_blank" href="https://www.npmjs.com/package/leux">
							<Topography type="body-1">v{version}</Topography>
						</a>
					</span>
					<span className="le-nav--item le-text--body-1">
						<a className="le-nav--link" href="https://github.com/hiimlex/leux" target="_blank">
							<FaGithub size="1.25rem"></FaGithub>
						</a>
					</span>
				</nav>
			</div>
		</header>
	);
};

export default Header;
