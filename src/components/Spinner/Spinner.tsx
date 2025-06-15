import React, { useCallback, useEffect, useRef } from "react";
import { LeClassNames } from "../../types";
import { SpinnerProps } from "./Spinner.model";
import "./Spinner.scss";
import { withGlobalConfig } from "../../hooks";

const SpinnerComponent: React.FC<SpinnerProps> = ({
	size = "medium",
	theme = "primary",
	variant = "circle",
	customSpeed,
	customClass,
	customSize,
	customStyles,
	customColor,
}) => {
	const spinnerRef = useRef<HTMLDivElement>(null);

	const classNames: LeClassNames = {
		leuxSpinner: ({ size, theme, variant, customSpeed, customSize, customColor, customClass }) =>
			`le-spinner le-spinner--${size} le-spinner--${theme} le-spinner--${variant}${
				customSize ? " le-spinner--custom-size" : ""
			}${customSpeed ? " le-spinner--custom-speed" : ""}${
				customColor ? " le-spinner--custom-color" : ""
			}${customClass || ""}`,
	};

	const setCustomSize = useCallback(() => {
		if (spinnerRef.current) {
			if (customSize) {
				spinnerRef.current.style.setProperty("--spinner-size", customSize + "");
			} else {
				spinnerRef.current.style.removeProperty("--spinner-size");
			}
		}
	}, []);

	useEffect(() => {
		setCustomSize();
	}, [customSize]);

	const setCustomSpeed = useCallback(() => {
		if (spinnerRef.current) {
			if (customSpeed) {
				spinnerRef.current.style.setProperty("--spinner-speed", customSpeed + "");
			} else {
				spinnerRef.current.style.removeProperty("--spinner-speed");
			}
		}
	}, []);

	useEffect(() => {
		if (customSpeed) {
			setCustomSpeed();
		}
	}, [customSpeed]);

	const setCustomColor = useCallback(() => {
		if (spinnerRef.current) {
			if (customColor) {
				spinnerRef.current.style.setProperty("--spinner-color", customColor + "");
			} else {
				spinnerRef.current.style.removeProperty("--spinner-color");
			}
		}
	}, [customColor]);

	useEffect(() => {
		if (customColor) {
			setCustomColor();
		}
	}, [customColor]);

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

const Spinner = withGlobalConfig(SpinnerComponent, "spinner");

export { Spinner };
