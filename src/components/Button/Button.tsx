import React, { MouseEvent } from "react";
import { LeSizes } from "src/types";
import { ButtonState, ButtonTypes, ButtonVariants } from "./Button.model";
import "./Button.scss";

interface ButtonProps {
	variant?: ButtonVariants;
	type?: ButtonTypes;
	size?: LeSizes;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
	state?: ButtonState;
	children?: React.ReactNode;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

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

export { Button, ButtonProps };
