import React, { useMemo } from "react";
import { leClassNames, TestId } from "../../types";
import { ProgressProps } from "./Progress.model";
import "./Progress.scss";

const Progress: React.FC<ProgressProps> = ({
	progress,
	progressText,
	colorScheme = "primary",
	size = "medium",
	isActive = false,
	customColor,
	width,
	showIcon,
	icon,
}) => {
	const classNames = useMemo(
		() =>
			leClassNames([
				"le-progress",
				`le-progress--${size}`,
				`le-progress--${colorScheme}`,
				isActive && `le-progress--active`,
				customColor && `le-progress--custom`,
			]),
		[colorScheme, size, isActive, customColor]
	);

	const barStyles = useMemo(
		() =>
			({
				"--customColor": customColor,
				"--progress": `${progress}%`,
			} as React.CSSProperties),
		[customColor, progress]
	);

	return (
		<div className={classNames} data-testid={TestId.Progress} style={{ width }}>
			<div className="le-progress--bar">
				<div
					className="le-progress--value"
					style={barStyles}
					data-testid={TestId.ProgressBar}
				></div>
			</div>
			<span data-testid={TestId.ProgressInfo} className={"le-progress--info"}>
				{!showIcon && (progressText ? progressText : `${progress}%`)}
				{showIcon && icon}
			</span>
		</div>
	);
};

export { Progress };
