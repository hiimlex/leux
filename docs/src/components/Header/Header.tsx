import React from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Typography, useBreakpoint, useTheme } from "../../../../src";
import "./Header.scss";

import { version } from "../../../../package.json";
import LeSearch from "../Search";

const Header: React.FC = () => {
	const { breakpoint } = useBreakpoint();
	const { swap, currentTheme } = useTheme();

	const changeTheme = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";

		swap(newTheme);
	};

	return (
		<header className="le-app-header">
			<div className={"le-app-header--content" + ` le-app-header--content--${breakpoint}`}>
				<div className="le-logo">
					<div className="le-logo--minimal">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 10.999V11.001C0.000295288 11.3267 0.147746 11.6523 0.44235 11.848L4.91896 14.8207L14.5035 8.456C15.4191 7.848 16.5809 7.848 17.4965 8.456L27.081 14.8207L31.5576 11.848C31.8519 11.6525 31.9994 11.3274 32 11.0019V10.998C31.9994 10.6726 31.8519 10.3474 31.5576 10.152L16.4988 0.152001C16.1936 -0.050667 15.8063 -0.050667 15.5012 0.152001L0.44235 10.152C0.147744 10.3476 0.000295288 10.6732 0 10.999ZM32 20.998C31.9994 20.6726 31.8519 20.3474 31.5576 20.152L27.081 17.1792L17.4965 23.544C16.5809 24.152 15.4191 24.152 14.5035 23.544L4.91897 17.1792L0.442354 20.152C0.147747 20.3476 0.000295288 20.6732 0 20.999V21.001C0.000295288 21.3267 0.14775 21.6523 0.442354 21.848L15.5012 31.848C15.6538 31.9493 15.8269 32 16 32C16.1731 32 16.3462 31.9493 16.4988 31.848L31.5576 21.848C31.852 21.6525 31.9994 21.3274 32 21.0019L32 20.998ZM16.4988 21.848L25.3052 16L16.4988 10.152C16.1936 9.94935 15.8064 9.94935 15.5012 10.152L6.69478 16L15.5012 21.848C15.8064 22.0506 16.1936 22.0506 16.4988 21.848Z"
								fill="#5D69D9"
							/>
						</svg>
						<h3 className="le-color-primary">leux</h3>
					</div>
				</div>
				<LeSearch />
				<nav className="le-nav">
					<span role="button" className="le-nav--item" onClick={changeTheme}>
						<Typography variant="h6" customClass="le-color-primary">
							{currentTheme === "light" && <FaMoon className="le-nav--link " />}
							{currentTheme === "dark" && <FaSun className="le-nav--link" />}
						</Typography>
					</span>
					<span className="le-nav--item">
						<a className="le-nav--link" target="_blank" href="https://linktr.ee/yuninho">
							<Typography variant="body-1">Find author</Typography>
						</a>
					</span>
					<span className="le-nav--item">
						<a
							className="le-nav--link"
							target="_blank"
							href="https://www.npmjs.com/package/@leux/ui"
						>
							<Typography variant="body-1">v{version}</Typography>
						</a>
					</span>
					<span className="le-nav--item le-text-body-1">
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
