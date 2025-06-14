import React, { useMemo } from "react";
import { BadgeProps } from "./Badge.model";
import "./Badge.scss";
import { useTheme } from "../../hooks";
import { leClassNames, TestId } from "../../types";

const Badge: React.FC<BadgeProps> = ({
	variant = "ghost",
	theme = "default",
	children,
	size = "medium",
	customStyles,
	customClass,
}) => {
	const { globalConfig } = useTheme();
	const defaultProps = useMemo(() => globalConfig?.badge, [globalConfig?.badge]);

	const classNames = useMemo(
		() =>
			leClassNames([
				"le-badge",
				`le-badge--${variant}`,
				`le-badge--${theme}`,
				`le-badge--${size}`,
				customClass,
				defaultProps?.customClass || "",
			]),
		[variant, theme, size, customClass, defaultProps?.customClass]
	);

	const styles = useMemo(() => {
		return {
			...defaultProps?.customStyles,
			...customStyles,
		};
	}, [defaultProps?.customStyles, customStyles]);

	return (
		<span className={classNames} style={styles} data-testid={TestId.Badge}>
			{children}
		</span>
	);
};

export { Badge };
