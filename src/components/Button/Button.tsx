import React, { MouseEvent, useMemo } from "react";
import { useTheme, withGlobalConfig } from "../../hooks";
import { leClassNames, TestId } from "../../types";
import { ButtonProps } from "./Button.model";
import "./Button.scss";

const ButtonComponent: React.FC<ButtonProps> = ({
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
			]),
		[variant, size, colorScheme, customClass, currentTheme, state?.disabled]
	);

	return (
		<button
			className={classNames}
			type={type}
			data-testid={TestId.Button}
			onClick={(event) => handleOnCLick(event)}
			disabled={state && state.disabled}
			style={customStyles}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

const Button = withGlobalConfig(ButtonComponent, "button");

export { Button };
