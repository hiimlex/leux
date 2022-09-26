import React from "react";
import { OptionProps } from "./Option.model";
import "./Option.scss";

const Option = ({
	children,
	value,
	customClass,
	customStyles,
	state,
}: OptionProps) => {
	return (
		<option
			data-testid="leuxOption"
			className={"le-option" + (customClass ? ` ${customClass}` : "")}
			style={customStyles}
			value={value}
			disabled={state && state.disabled}
		>
			{children}
		</option>
	);
};

export { Option };
