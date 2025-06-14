import React from "react";
import { RadioProps } from "./Radio.model";
import "./Radio.scss";
import { withGlobalConfig } from "../../contexts";
import { leClassNames } from "../../types";

const RadioComponent: React.FC<RadioProps> = ({
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
}) => {
	return (
		<div
			className={leClassNames([
				"le-radio",
				`le-radio--${size}`,
				customClass,
				state?.disabled && "le-radio--disabled",
			])}
			style={{ ...customStyles }}
		>
			<input
				ref={radioRef}
				id={`${fieldKey}#${value}`}
				name={fieldKey}
				defaultChecked={defaultChecked}
				type="radio"
				onChange={onChange}
				className={leClassNames(["le-radio--input", customInputClass])}
				style={{ ...customInputStyles }}
				data-testid="leuxRadio"
				value={value}
				disabled={state && state.disabled}
				{...radioProps}
			/>
			<label
				htmlFor={`${fieldKey}#${value}`}
				className={leClassNames(["le-radio--label", customLabelClass])}
				style={{ ...customLabelStyles }}
			>
				{label}
			</label>
		</div>
	);
};

const Radio = withGlobalConfig(RadioComponent, "radio");

export { Radio };
