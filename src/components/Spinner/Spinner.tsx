import React, { useCallback, useEffect, useRef } from "react";
import { LeClassNames } from "../../types";
import { SpinnerProps } from "./Spinner.model";
import "./Spinner.scss";

const Spinner = ({
	size = "medium",
	theme = "primary",
	variant = "circle",
	customSpeed,
	customClass,
	customSize,
	customStyles,
	customColor,
}: SpinnerProps) => {
	const spinnerRef = useRef<HTMLDivElement>(null);

	const classNames: LeClassNames = {
		leuxSpinner: ({ size, theme, variant, customSpeed, customSize, customColor, customClass }) =>
			`le-spinner le-spinner--${size} le-spinner--${theme} le-spinner--${variant} ${
				customSize ? "le-spinner--custom-size" : ""
			} ${customSpeed ? "le-spinner--custom-speed" : ""} ${
				customColor ? "le-spinner--custom-color" : ""
			} ${customClass || ""}`,
	};

	const handleSpinnerStyles = useCallback(() => {
		if (spinnerRef.current) {
			const spinner = spinnerRef.current;

			if (customSpeed) {
				spinner.style.setProperty("--custom-speed", customSpeed);
			}

			if (customSize) {
				spinner.style.setProperty("--custom-size", customSize.toString());
			}

			if (customColor) {
				spinner.style.setProperty("--custom-color", customColor);
			}
		}
	}, [customSpeed, customSize, customColor]);

	useEffect(() => {
		handleSpinnerStyles();
	}, []);

	return (
		<div
			ref={spinnerRef}
			data-testid="leuxSpinner"
			className={classNames["leuxSpinner"]({
				size,
				theme,
				variant,
				customSpeed,
				customSize,
				customClass,
				customColor,
			})}
			style={customStyles}
		></div>
	);
};

export { Spinner };
