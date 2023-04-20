import React, { useState } from "react";
import { TooltipProps } from "./Tooltip.model";
import "./Tooltip.scss";

const Tooltip = ({
	children,
	title,
	direction = "top",
	customClass,
	customStyles,
	theme = "default",
}: TooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div
			className="le-tooltip--provider"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			data-testid="leuxTooltipProvider"
		>
			{showTooltip && (
				<span
					className={
						"le-tooltip" +
						(customClass ? ` ${customClass}` : "") +
						(direction ? ` le-tooltip--${direction}` : "") +
						(theme ? ` le-tooltip--${theme}` : "")
					}
					data-testid="leuxTooltip"
					style={customStyles}
				>
					{title}
				</span>
			)}
			{children}
		</div>
	);
};

export { Tooltip };
