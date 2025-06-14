import React, { PropsWithChildren, useState } from "react";
import { withGlobalConfig } from "../../hooks";
import { LeClassNames } from "../../types";
import { SelectProps } from "./Select.model";
import "./Select.scss";

const SelectComponent: React.FC<PropsWithChildren<SelectProps>> = ({
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
}) => {
	const [value, setValue] = useState<string | number | readonly string[] | undefined>("");

	const classNames: LeClassNames = {
		leSelect: () =>
			`le-select le-select--${size} le-select--${variant}${
				placeholder && value === "" ? " le-select--placeholder-color" : ""
			}${state?.disabled ? " le-select--disabled" : ""} ${customClass ?? ""}`,
		leSelectOption: (prop) =>
			`le-select--option ${prop["disabled"] ? "le-select--option-disabled" : ""}`,
		leSelectPlaceholder: () => `le-select--option `,
		leSelectWrapper: () => `le-select--wrapper`,
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);

		if (onChange) {
			onChange(event);
		}
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
			disabled={state?.disabled}
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
				? options.map((option) => (
						<option
							key={option.value}
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

const Select = withGlobalConfig(SelectComponent, "select");

export { Select };
