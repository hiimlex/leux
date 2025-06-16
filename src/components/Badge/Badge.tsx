import React, { useMemo } from "react";
import { withGlobalConfig } from "../../hooks";
import { leClassNames, TestId } from "../../types";
import { BadgeProps } from "./Badge.model";
import "./Badge.scss";

const BadgeComponent: React.FC<BadgeProps> = ({
	variant = "ghost",
	colorScheme = "default",
	children,
	size = "medium",
	customStyles,
	customClass,
	clickable,
	onClick,
}) => {
	const classNames = useMemo(
		() =>
			leClassNames([
				"le-badge",
				`le-badge--${variant}`,
				`le-badge--${colorScheme}`,
				`le-badge--${size}`,
				customClass,
				clickable && `le-badge--clickable`,
			]),
		[variant, colorScheme, size, customClass, clickable]
	);

	const styles = useMemo(() => {
		return {
			...customStyles,
		};
	}, [customStyles]);

	return (
		<div onClick={onClick} className={classNames} style={styles} data-testid={TestId.Badge}>
			{children}
		</div>
	);
};

const Badge = withGlobalConfig(BadgeComponent, "badge");

export { Badge };
