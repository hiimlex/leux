import React, { useRef } from "react";
import { Option } from "../Option";
import { SelectProps } from "./Select.model";
import "./Select.scss";

const Select = ({
	customClass,
	customStyles,
	fieldKey,
	focusStyle = true,
	onChange,
	placeholder,
	size = "medium",
	state,
	type = "filled",
	width,
	children,
	defaultValue,
}: SelectProps) => {
	const selectRef = useRef<HTMLSelectElement>(null);

	return (
		<select
			id={fieldKey}
			ref={selectRef}
			name={fieldKey}
			onChange={onChange}
			style={{ width, ...customStyles }}
			className={
				"le-select" +
				(type ? ` le-select--${type}` : "") +
				(size ? ` le-select--${size}` : "") +
				(focusStyle ? ` le-select--focus` : "") +
				(customClass ? ` ${customClass}` : "") +
				(state && state.disabled ? " le-select--disabled" : "")
			}
			disabled={state && state.disabled}
			defaultValue={defaultValue || (placeholder && "")}
			data-testid="leuxSelect"
		>
			{placeholder && (
				<Option
					value=""
					state={{ disabled: true }}
					customStyles={{ display: "none" }}
				>
					{placeholder}
				</Option>
			)}
			{children}
		</select>
	);
};

export { Select };
