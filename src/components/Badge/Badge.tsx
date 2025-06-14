import React, { useMemo } from "react";
import { withGlobalConfig } from "../../hooks";
import { leClassNames, TestId } from "../../types";
import { BadgeProps } from "./Badge.model";
import "./Badge.scss";

const BadgeComponent: React.FC<BadgeProps> = ({
	variant = "ghost",
	theme = "default",
	children,
	size = "medium",
	customStyles,
	customClass,
}) => {
	const classNames = useMemo(
		() =>
			leClassNames([
				"le-badge",
				`le-badge--${variant}`,
				`le-badge--${theme}`,
				`le-badge--${size}`,
				customClass,
			]),
		[variant, theme, size, customClass]
	);

	const styles = useMemo(() => {
		return {
			...customStyles,
		};
	}, [customStyles]);

	return (
		<span className={classNames} style={styles} data-testid={TestId.Badge}>
			{children}
		</span>
	);
};

const Badge = withGlobalConfig(BadgeComponent, "badge");

export { Badge };
