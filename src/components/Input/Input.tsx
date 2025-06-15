import React from "react";
import { InputProps } from "./Input.model";

import "./Input.scss";
import { LeClassNames } from "../../types";
import { withGlobalConfig } from "../../hooks";

const InputComponent: React.FC<InputProps> = ({
	fieldKey,
	type = "text",
	variant = "filled",
	placeholder,
	onChange,
	size = "medium",
	width,
	customClass,
	customStyles,
	state,
	inputProps,
	inputRef,
}) => {
	const classNames: LeClassNames = {
		leInput: () =>
			`le-input le-input--${variant} le-input--${size}${customClass ? ` ${customClass}` : ""}${
				state && state.disabled ? " le-input--disabled" : ""
			}`,
	};

	return (
		<input
			ref={inputRef}
			id={fieldKey}
			name={fieldKey}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			style={{ width, ...customStyles }}
			className={classNames["leInput"]()}
			disabled={state && state.disabled}
			data-testid="leuxInput"
			{...inputProps}
		/>
	);
};

const Input = withGlobalConfig(InputComponent, "input");

export { Input };
