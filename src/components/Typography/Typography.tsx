import React, { useMemo } from "react";
import { useTheme } from "../../hooks";
import { leClassNames } from "../../types";
import { TypographyProps } from "./Typography.model";

const Typography: React.FC<TypographyProps> = ({
	variant = "body-1",
	children,
	customClass: _customClass,
	customStyles,
}) => {
	const { globalConfig } = useTheme();

	const defaultProps = useMemo(() => globalConfig?.typography, [globalConfig?.typography]);
	const customClass = useMemo(
		() => leClassNames([_customClass, defaultProps?.customClass]),
		[_customClass, defaultProps?.customClass]
	);
	const styles = useMemo(
		() => ({ ...defaultProps?.customStyles, ...customStyles }),
		[customStyles, defaultProps?.customStyles]
	);

	const typesArr: Record<string, React.ReactElement> = {
		h1: (
			<h1
				className={leClassNames(["le-text--h1", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h1>
		),
		h2: (
			<h2
				className={leClassNames(["le-text--h2", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h2>
		),
		h3: (
			<h3
				className={leClassNames(["le-text--h3", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h3>
		),
		h4: (
			<h4
				className={leClassNames(["le-text--h4", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h4>
		),
		h5: (
			<h5
				className={leClassNames(["le-text--h5", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h5>
		),
		h6: (
			<h6
				className={leClassNames(["le-text--h6", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"subtitle-1": (
			<h6
				className={leClassNames(["le-text--subtitle-1", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"subtitle-2": (
			<h6
				className={leClassNames(["le-text--subtitle-2", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"body-1": (
			<p
				className={leClassNames(["le-text--body-1", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</p>
		),
		"body-2": (
			<p
				className={leClassNames(["le-text--body-2", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</p>
		),
		button: (
			<strong
				className={leClassNames(["le-text--button", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</strong>
		),
		overline: (
			<span
				className={leClassNames(["le-text--overline", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</span>
		),
		caption: (
			<span
				className={leClassNames(["le-text--caption", customClass])}
				style={styles}
				data-testid="leuxTypography"
			>
				{children}
			</span>
		),
	};

	return typesArr[variant];
};

export { Typography };
