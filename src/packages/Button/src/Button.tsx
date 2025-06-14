import classNames from "classnames";
import React, { MouseEvent, useMemo } from "react";
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
	currentTheme,
}) => {
	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	const classes = useMemo(
		() =>
			classNames([
				"le-button",
				`le-button--${variant}`,
				`le-button--${size}`,
				`le-button--${colorScheme}`,
				customClass,
				`le-button--${currentTheme}`,
				state?.disabled && "le-button--disabled",
			]),
		[variant, size, colorScheme, customClass, currentTheme, state?.disabled]
	);

	return (
		<button
			className={classes}
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
