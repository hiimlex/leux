import { Link } from "react-scroll";
import "./AnchorLink.scss";
import React from "react";

interface AnchorLinkProps {
	to: any;
	children: any;
}

const AnchorLink = ({ to, children }: AnchorLinkProps) => {
	return <Link to={to} children={"#" + children} offset={-65} className="le-anchor"></Link>;
};

export default AnchorLink;
