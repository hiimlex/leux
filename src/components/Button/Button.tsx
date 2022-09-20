import React, { MouseEvent } from "react";
import { ButtonProps } from "./Button.model";
import "./Button.scss";

const Button = ({
	variant = "default",
	size = "medium",
	type = "filled",
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
				`le-button le-button--${variant} le-button--${size} le-button--${type}` +
				(state && state.disabled ? " le-button--disabled" : "") +
				(customClass ? ` ${customClass}` : "")
			}
			data-testid="leuxButton"
			onClick={(event) => handleOnCLick(event)}
			disabled={state?.disabled}
			style={customStyles}
		>
			{children}
		</button>
	);
};

export { Button };
