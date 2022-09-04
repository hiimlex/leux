import React, { MouseEvent } from "react";
import { LeSizes } from "../../types";
import "./LeButton.scss";

export type LeButtonVariants = "default" | "primary";
export type LeButtonTypes = "filled";

export interface LeButtonProps {
	label: string;
	variant: LeButtonVariants;
	type: LeButtonTypes;
	size: LeSizes;
	disabled?: boolean | (() => boolean);
	onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const LeButton = ({
	label,
	variant = "default",
	size = "medium",
	disabled,
	type = "filled",
	onClick,
}: LeButtonProps) => {
	const getClassNames = (): string => {
		const classNames = ["le__button"];

		if (variant) {
			classNames.push(`le__button--${variant}`);
		}

		if (size) {
			classNames.push(`le__button--${size}`);
		}

		if (type) {
			classNames.push(`le__button--${type}`);
		}

		return classNames.join(" ");
	};

	const getDisabled = (): boolean => {
		if (!disabled) {
			return false;
		}

		if (typeof disabled === "function") {
			return disabled();
		} else {
			return disabled;
		}
	};

	return (
		<button
			className={getClassNames()}
			onClick={(event) => onClick(event)}
			disabled={getDisabled()}
		>
			{label}
		</button>
	);
};

export default LeButton;
