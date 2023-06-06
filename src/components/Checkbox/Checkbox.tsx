import React from "react";
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
	checkBoxProps,
	checkboxRef,
}: CheckboxProps) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<div
			className={`le-checkbox le-checkbox--${size} ${
				state && state.disabled ? "le-checkbox--disabled" : ""
			} ${customClass ? customClass : ""}`}
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
				{...checkBoxProps}
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
