import React from "react";
import { InputProps } from "./Input.model";

import "./Input.scss";

const Input = ({
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
}: InputProps) => {
	return (
		<input
			ref={inputRef}
			id={fieldKey}
			name={fieldKey}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			style={{ width, ...customStyles }}
			className={
				"le-input" +
				(variant ? ` le-input--${variant}` : "") +
				(size ? ` le-input--${size}` : "") +
				(customClass ? ` ${customClass}` : "") +
				(state && state.disabled ? " le-input--disabled" : "")
			}
			disabled={state && state.disabled}
			data-testid="leuxInput"
			{...inputProps}
		/>
	);
};

export { Input };
