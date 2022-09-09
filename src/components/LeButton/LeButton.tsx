import React, { MouseEvent } from "react";
import { LeButtonProps } from "./LeButton.model";
import "./LeButton.scss";

const LeButton = ({
	variant = "default",
	size = "medium",
	type = "filled",
	onClick,
	state,
	children,
}: LeButtonProps) => {
	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			className={
				`le-button le-button--${variant} le-button--${size} le-button--${type}` +
				(state && state.disabled ? " le-button--disabled" : "")
			}
			onClick={(event) => handleOnCLick(event)}
			disabled={state?.disabled}
		>
			{children || ""}
		</button>
	);
};

export default LeButton;
