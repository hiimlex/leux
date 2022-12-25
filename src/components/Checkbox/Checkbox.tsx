import React, { useRef } from "react";
import { CheckboxProps } from "./Checkbox.model";
import "./Checkbox.scss";

const Checkbox = ({
	fieldKey,
	label,
	size = "medium",
	defaultChecked = false,
	onChange,
	state,
	width = "auto",
	customClass,
	customStyles,
	customInputStyles,
	customInputClass,
	customLabelClass,
	customLabelStyles,
}: CheckboxProps) => {
	const checkboxRef = useRef(null);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<div
			className={
				"le-checkbox" +
				(customClass ? ` ${customClass}` : "") +
				(size ? ` le-checkbox--${size}` : "")
			}
			style={{ ...customStyles, width }}
			data-testid="leuxCheckbox"
		>
			<input
				ref={checkboxRef}
				id={fieldKey}
				name={fieldKey}
				type="checkbox"
				defaultChecked={defaultChecked}
				className={"le-checkbox--input" + (customInputClass ? ` ${customInputClass}` : "")}
				onChange={handleOnChange}
				disabled={state && state.disabled}
				data-testid="leuxCheckboxInput"
				style={customInputStyles}
			/>
			<label
				htmlFor={fieldKey}
				className={"le-checkbox--label" + (customLabelClass ? ` ${customLabelClass}` : "")}
				data-testid="leuxCheckboxLabel"
				style={customLabelStyles}
			>
				{label}
			</label>
		</div>
	);
};

export { Checkbox };
