import React from "react";
import { BadgeProps } from "./Badge.model";
import "./Badge.scss";

const Badge = ({
	type = "ghost",
	variant = "default",
	children,
	size = "medium",
	customStyles,
	customClass,
}: BadgeProps) => {
	return (
		<span
			className={
				"le-badge" +
				(type ? ` le-badge--${type}` : "") +
				(variant ? ` le-badge--${variant}` : "") +
				(size ? ` le-badge--${size}` : "") +
				(customClass ? ` ${customClass}` : "")
			}
			style={customStyles}
			data-testid="leuxBadge"
		>
			{children}
		</span>
	);
};

export { Badge };
