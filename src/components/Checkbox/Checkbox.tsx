import React from "react";
import { withGlobalConfig } from "../../hooks";
import { TestId } from "../../types";
import { CheckboxProps } from "./Checkbox.model";
import "./Checkbox.scss";

const CheckboxComponent: React.FC<CheckboxProps> = ({
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
	checked,
}) => {
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
			data-testid={TestId.Checkbox}
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
				data-testid={TestId.CheckboxInput}
				style={customInputStyles}
				checked={checked}
				{...checkBoxProps}
			/>
			<label
				htmlFor={fieldKey}
				className={"le-checkbox--label" + (customLabelClass ? ` ${customLabelClass}` : "")}
				data-testid={TestId.CheckboxLabel}
				style={customLabelStyles}
			>
				{label}
			</label>
		</div>
	);
};

const Checkbox = withGlobalConfig(CheckboxComponent, "checkbox");

export { Checkbox };
