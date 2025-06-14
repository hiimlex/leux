import React, { useMemo, useState } from "react";
import { useTheme, withGlobalConfig } from "../../hooks";
import { LeClassNames, LeSafeAny, TestId } from "../../types";
import { TooltipProps } from "./Tooltip.model";
import "./Tooltip.scss";

const TooltipComponent: React.FC<TooltipProps> = ({
	children,
	title,
	direction = "top",
	customClass,
	customStyles,
	colorScheme = "default",
}) => {
	const { theme } = useTheme();
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	const arrowColor = useMemo(() => {
		return theme?.[colorScheme as LeSafeAny];
	}, [theme]);
	const arrowBorder = useMemo(
		() =>
			theme
				? [
						direction === "top" ? arrowColor : "transparent",
						direction === "right" ? arrowColor : "transparent",
						direction === "bottom" ? arrowColor : "transparent",
						direction === "left" ? arrowColor : "transparent",
				  ].join(" ")
				: undefined,
		[direction, arrowColor]
	);

	const classNames: LeClassNames = {
		leTooltipProvider: () => "le-tooltip--provider",
		leTooltip: () =>
			`le-tooltip le-tooltip--${colorScheme} le-tooltip--${direction} ${
				customClass ? ` ${customClass}` : ""
			}`,
		leTooltipArrow: () => `le-tooltip--arrow le-tooltip--arrow-${direction}`,
	};

	return (
		<div
			className={classNames["leTooltipProvider"]()}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			data-testid={TestId.TooltipProvider}
		>
			{showTooltip && (
				<span
					className={classNames["leTooltip"]()}
					data-testid={TestId.Tooltip}
					style={customStyles}
				>
					{title}
					{showTooltip && (
						<div
							className={classNames["leTooltipArrow"]()}
							style={{ borderColor: arrowBorder }}
						></div>
					)}
				</span>
			)}
			{children}
		</div>
	);
};

const Tooltip = withGlobalConfig(TooltipComponent, "tooltip");

export { Tooltip };
