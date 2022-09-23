import React from "react";
import { SelectProps } from "./Select.model";
import "./Select.scss";

const Select = ({
	options,
	customClass,
	customStyles,
	fieldKey,
	focusStyle,
	onChange,
	placeholder,
	size,
	state,
	type,
	width,
	optionCustomClass,
	optionCustomStyles,
}: SelectProps) => {
	return (
		<select
			id={fieldKey}
			name={fieldKey}
			onChange={onChange}
			placeholder={placeholder}
			style={{ width, ...customStyles }}
			className={
				"le-select" +
				(type ? ` le-select--${type}` : "") +
				(size ? ` le-select--${size}` : "") +
				(focusStyle ? ` ${focusStyle}` : "") +
				(customClass ? ` ${customClass}` : "") +
				(state && state.disabled ? " le-select--disabled" : "")
			}
			disabled={state && state.disabled}
			data-testid="leuxSelect"
		>
			{options &&
				options.map(({ value, label }) => (
					<option
						key={value}
						value={value}
						className={
							"le-select--option" +
							(optionCustomClass ? ` ${optionCustomClass}` : "")
						}
						style={optionCustomStyles}
					>
						{label}
					</option>
				))}
		</select>
	);
};

export { Select };
