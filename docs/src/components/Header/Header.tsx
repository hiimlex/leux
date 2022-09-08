import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<header className="le-app-header">
			<div className="le-app-header--content">
				<div className="le-logo">
					<div className="le-logo--content">
						<h1 className="le-logo--title le-text--h1">LeUX</h1>
						<h1 className="le-logo--shadow le-text--h1">LeUX</h1>
					</div>
				</div>
				<div className="flex-1"></div>
				<nav className="le-nav">
					<span className="le-nav--item le-text--body-1">
						<Link to="overview" className="le-nav--link">
							Docs
						</Link>
					</span>
					<span className="le-nav--item le-text--body-1">
						<a className="le-nav--link">
							<FaGithub size="1.25rem"></FaGithub>
						</a>
					</span>
				</nav>
			</div>
		</header>
	);
};

export default Header;
