import React from "react";
import { BadgeProps } from "./Badge.model";
import "./Badge.scss";

const Badge = ({
	variant = "ghost",
	theme = "default",
	children,
	size = "medium",
	customStyles,
	customClass,
}: BadgeProps) => {
	return (
		<span
			className={
				"le-badge" +
				(variant ? ` le-badge--${variant}` : "") +
				(theme ? ` le-badge--${theme}` : "") +
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
