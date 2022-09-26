import React, { useRef } from "react";
import { InputProps } from "./Input.model";

import "./Input.scss";

const Input = ({
	fieldKey,
	type = "text",
	variant = "filled",
	placeholder,
	focusStyle = true,
	onChange,
	size = "medium",
	width = "auto",
	customClass,
	customStyles,
	state,
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<input
			id={fieldKey}
			ref={inputRef}
			name={fieldKey}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			style={{ width, ...customStyles }}
			className={
				"le-input" +
				(variant ? ` le-input--${variant}` : "") +
				(size ? ` le-input--${size}` : "") +
				(focusStyle ? " le-input--focus" : "") +
				(customClass ? ` ${customClass}` : "") +
				(state && state.disabled ? " le-input--disabled" : "")
			}
			disabled={state && state.disabled}
			data-testid="leuxInput"
		/>
	);
};

export { Input };
