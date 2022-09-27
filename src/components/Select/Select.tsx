import React, { useEffect, useRef, useState } from "react";
import { SelectOption, SelectProps, SelectState } from "./Select.model";
import "./Select.scss";

const handleLabel = (values?: string[]): string => {
	if (values && values.length) {
		if (values.length > 1) {
			return values.join(", ");
		}

		return values[0];
	}

	return "";
};

const Select = ({
	customClass,
	customStyles,
	fieldKey,
	focusStyle = true,
	onChange,
	placeholder,
	size = "medium",
	state = {},
	type = "filled",
	width,
	defaultValue,
	multiple,
	options,
}: SelectProps) => {
	const [optionsArr, setOptionArr] = useState<SelectOption[]>(options);

	const [label, setLabel] = useState<string>(handleLabel(defaultValue));
	const [selectedValue, setSelectedValue] = useState<string[]>(
		defaultValue || []
	);

	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleFocus = () => {
		setIsFocused((curr) => !curr);
	};

	const handleOnChange = (value: string) => {
		if (onChange) {
			if (!multiple) {
				optionsArr.forEach((option) => {
					if (!option.state.disabled) {
						if (option.value === value) {
							option.state.selected = !option.state.selected;
						} else {
							option.state.selected = false;
						}
					}
				});
			} else {
				optionsArr.forEach((option) => {
					if (!option.state.disabled) {
						if (option.value === value) {
							option.state.selected = !option.state.selected;
						}
					}
				});
			}

			const selectedValues = optionsArr
				.filter((option) => option.state.selected)
				.map((el) => el.value);

			const selectedLabels = optionsArr
				.filter((option) => option.state.selected)
				.map((el) => el.label);

			setSelectedValue(selectedValues);
			setLabel(handleLabel(selectedLabels));
			onChange(selectedValues);
		}
	};

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				inputRef.current &&
				!inputRef.current.contains(event.target as Node)
			) {
				setIsFocused(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		<div
			className={
				"le-select" +
				(type ? ` le-select--${type}` : "") +
				(size ? ` le-select--${size}` : "") +
				(focusStyle && isFocused ? ` le-select--focus` : "") +
				(customClass ? ` ${customClass}` : "") +
				(state && state.disabled ? " le-select--disabled" : "")
			}
		>
			<input
				id={fieldKey}
				ref={inputRef}
				name={fieldKey}
				style={{ width, ...customStyles }}
				className="le-select--input"
				disabled={state && state.disabled}
				placeholder={placeholder}
				data-testid="leuxSelect"
				multiple={multiple}
				readOnly
				value={label}
				onClick={handleFocus}
			/>
			{isFocused && (
				<div ref={dropdownRef} className="le-select--dropdown">
					{optionsArr.length &&
						optionsArr.map((option) => (
							<div
								key={option.value}
								onClick={() => {
									if (!option.state.disabled) {
										handleOnChange(option.value);
									}
								}}
								className={
									"le-option" +
									(option.state.selected ? " le-option--selected" : "") +
									(option.state.disabled ? " le-option--disabled" : "")
								}
							>
								{option.label}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export { Select };
