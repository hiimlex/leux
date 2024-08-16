import React, { MouseEvent } from "react";
import { ButtonProps } from "./Button.model";
import "./Button.scss";
import { useTheme } from "../../hooks";
import { LeClassNames } from "../../types";

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
	const { currentTheme } = useTheme();

	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	const classNames: LeClassNames = {
		button: () =>
			`le-button le-button--${variant} le-button--${size} le-button--${colorScheme} + ${
				state && state.disabled ? " le-button--disabled" : ""
			} ${customClass ? customClass : ""} le-button--${currentTheme}`,
	};

	return (
		<button
			className={classNames["button"]()}
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
