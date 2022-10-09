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

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		if (onChange) {
			onChange(value, event);
		}
	};

	return (
		<input
			id={fieldKey}
			ref={inputRef}
			name={fieldKey}
			type={type}
			placeholder={placeholder}
			onChange={handleOnChange}
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
