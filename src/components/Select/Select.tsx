import React, { PropsWithChildren, useState } from "react";
import { SelectProps } from "./Select.model";
import "./Select.scss";
import { LeClassNames } from "../../types";

const Select = ({
	customClass,
	customStyles,
	fieldKey,
	onChange,
	placeholder,
	size = "medium",
	variant = "filled",
	width,
	children,
	options = [],
	selectRef,
	state,
	selectProps,
}: PropsWithChildren<SelectProps>) => {
	const [value, setValue] = useState<string | number | readonly string[] | undefined>("");

	const classNames: LeClassNames = {
		leSelect: () =>
			`le-select ${customClass || ""} le-select--${size} le-select--${variant}${
				placeholder && value === "" ? " le-select--placeholder-color" : ""
			}${state && state.disabled ? " le-select--disabled" : ""}`,
		leSelectOption: (prop) =>
			`le-select--option ${prop && prop["disabled"] ? "le-select--option-disabled" : ""}`,
		leSelectPlaceholder: () => `le-select--option `,
		leSelectWrapper: () => `le-select--wrapper`,
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
		onChange && onChange(event);
	};

	return (
		<select
			ref={selectRef}
			id={fieldKey}
			name={fieldKey}
			className={classNames["leSelect"]()}
			style={{ ...customStyles, width }}
			onChange={onChangeHandler}
			data-testid="leuxSelect"
			value={value}
			disabled={state && state.disabled}
			{...selectProps}
		>
			{placeholder && (
				<option
					className={classNames["leSelectPlaceholder"]()}
					value=""
					data-testid="leuxSelectPlaceholder"
				>
					{placeholder}
				</option>
			)}
			{options && options.length > 0
				? options.map((option, optionIndex) => (
						<option
							key={optionIndex}
							value={option.value}
							className={classNames["leSelectOption"]({ disabled: option.disabled })}
							disabled={option.disabled}
							data-testid="leuxSelectOption"
						>
							{option.label}
						</option>
				  ))
				: children}
		</select>
	);
};

export { Select };
