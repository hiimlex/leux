import React, { MouseEvent } from "react";
import { ButtonProps } from "./Button.model";
import "./Button.scss";

const Button = ({
	theme = "default",
	size = "medium",
	variant = "filled",
	type = "button",
	onClick,
	state,
	children,
	customClass,
	customStyles,
}: ButtonProps) => {
	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			className={
				`le-button le-button--${variant} le-button--${size} le-button--${theme}` +
				(state && state.disabled ? " le-button--disabled" : "") +
				(customClass ? ` ${customClass}` : "")
			}
			type={type}
			data-testid="leuxButton"
			onClick={(event) => handleOnCLick(event)}
			disabled={state && state.disabled}
			style={customStyles}
		>
			{children}
		</button>
	);
};

export { Button };
