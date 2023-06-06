import React, { useState } from "react";
import { TooltipProps } from "./Tooltip.model";
import "./Tooltip.scss";
import { LeClassNames } from "../../types";

const Tooltip = ({
	children,
	title,
	direction = "top",
	customClass,
	customStyles,
	theme = "default",
}: TooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const classNames: LeClassNames = {
		leTooltipProvider: () => "le-tooltip--provider",
		leTooltip: () =>
			`le-tooltip le-tooltip--${direction} le-tooltip--${theme}${
				customClass ? ` ${customClass}` : ""
			}`,
	};

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div
			className={classNames["leTooltipProvider"]()}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			data-testid="leuxTooltipProvider"
		>
			{showTooltip && (
				<span className={classNames["leTooltip"]()} data-testid="leuxTooltip" style={customStyles}>
					{title}
				</span>
			)}
			{children}
		</div>
	);
};

export { Tooltip };
