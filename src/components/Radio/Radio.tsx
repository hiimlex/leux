import React from "react";
import { RadioProps } from "./Radio.model";
import "./Radio.scss";

const Radio = ({
	fieldKey,
	size = "medium",
	onChange,
	label,
	defaultChecked,
	radioProps,
	state,
	value,
	customInputClass,
	customInputStyles,
	customLabelClass,
	customLabelStyles,
	customStyles,
	customClass,
	radioRef,
}: RadioProps) => {
	return (
		<div
			className={`le-radio le-radio--${size} ${customClass || ""} ${
				state && state.disabled ? "le-radio--disabled" : ""
			}`}
			style={{ ...customStyles }}
		>
			<input
				ref={radioRef}
				id={`${fieldKey}#${value}`}
				name={fieldKey}
				defaultChecked={defaultChecked}
				type="radio"
				onChange={onChange}
				className={`le-radio--input ${customInputClass || ""}`}
				style={{ ...customInputStyles }}
				data-testid="leuxRadio"
				value={value}
				disabled={state && state.disabled}
				{...radioProps}
			/>
			<label
				htmlFor={`${fieldKey}#${value}`}
				className={`le-radio--label ${customLabelClass || ""}`}
				style={{ ...customLabelStyles }}
			>
				{label}
			</label>
		</div>
	);
};

export { Radio };
