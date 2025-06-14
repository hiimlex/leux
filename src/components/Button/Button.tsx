import React, { MouseEvent, useMemo } from "react";
import { useTheme } from "../../hooks";
import { leClassNames } from "../../types";
import { ButtonProps } from "./Button.model";
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
	colorScheme = "default",
	size = "medium",
	variant = "filled",
	type = "button",
	onClick,
	state,
	children,
	customClass,
	customStyles,
	buttonProps,
}) => {
	const { currentTheme, globalConfig } = useTheme();
	const defaultProps = useMemo(() => globalConfig?.button || {}, [globalConfig?.button]);

	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	const classNames = useMemo(
		() =>
			leClassNames([
				"le-button",
				`le-button--${variant}`,
				`le-button--${size}`,
				`le-button--${colorScheme}`,
				customClass,
				`le-button--${currentTheme}`,
				state?.disabled && "le-button--disabled",
				defaultProps?.customClass,
			]),
		[
			variant,
			size,
			colorScheme,
			customClass,
			currentTheme,
			state?.disabled,
			defaultProps?.customClass,
		]
	);

	return (
		<button
			className={classNames}
			type={type}
			data-testid="leuxButton"
			onClick={(event) => handleOnCLick(event)}
			disabled={state && state.disabled}
			style={customStyles}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export { Button };
