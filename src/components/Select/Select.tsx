import React, { PropsWithChildren, useState } from "react";
import { SelectProps } from "./Select.model";
import "./Select.scss";

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
	defaultValue,
	selectRef,
	showPlaceholderAsOption = false,
	state,
	selectProps,
}: PropsWithChildren<SelectProps>) => {
	const [value, setValue] = useState<string | number | readonly string[] | undefined>(
		defaultValue || ""
	);

	const classNames: Record<
		string,
		(prop?: Record<string, string | boolean | number | undefined> | undefined) => string
	> = {
		leSelect: () =>
			`le-select ${customClass || ""} le-select--${size} le-select--${variant} ${
				placeholder && value === "" ? "le-select--placeholder-color" : ""
			} ${state && state.disabled ? "le-select--disabled" : ""}}`,
		leOption: (prop) =>
			`le-select--option ${prop && prop["disabled"] ? "le-select--option-disabled" : ""}`,
		lePlaceholder: () =>
			`le-select--option ${!showPlaceholderAsOption ? "le-select--hide-placeholder" : ""}`,
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
				<option className={classNames["lePlaceholder"]()} value="">
					{placeholder}
				</option>
			)}
			{options && options.length > 0
				? options.map((option, optionIndex) => (
						<option
							key={optionIndex}
							value={option.value}
							className={classNames["leOption"]({ disabled: option.disabled })}
							disabled={option.disabled}
							selected={option.selected}
						>
							{option.label}
						</option>
				  ))
				: children}
		</select>
	);
};

export { Select };
