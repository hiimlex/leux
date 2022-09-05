import React, { MouseEvent } from "react";
import { LeSizes } from "src/types";
import "./LeButton.scss";

export type LeButtonVariants =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "default";

export type LeButtonTypes = "filled";

export interface LeButtonState {
	disabled?: boolean;
}

export interface LeButtonProps {
	label: string;
	variant?: LeButtonVariants;
	type?: LeButtonTypes;
	size?: LeSizes;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
	state?: LeButtonState;
}

const LeButton = ({
	label,
	variant = "default",
	size = "medium",
	type = "filled",
	onClick,
	state,
}: LeButtonProps) => {
	const handleOnCLick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			onClick={(event) => handleOnCLick(event)}
			disabled={state?.disabled}
		>
			{label}
		</button>
	);
};

export default LeButton;