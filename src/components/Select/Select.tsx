import React, { useEffect, useRef, useState } from "react";
import { SelectOption, SelectProps, SelectState } from "./Select.model";
import "./Select.scss";

const Select = ({
	customClass,
	customStyles,
	fieldKey,
	focusStyle = true,
	onChange,
	placeholder,
	size = "medium",
	state = {},
	variant = "filled",
	width,
	defaultValue,
	multiple = false,
	options = [],
	clickHide = true,
	clickOutsideHide = true,
	optionCustomClass,
	optionCustomStyles,
}: SelectProps) => {
	const [optionsArr, setOptionArr] = useState<SelectOption[]>(
		options.map((el) => {
			if (el.state) {
				if (!Object.prototype.hasOwnProperty.call(el.state, "selected")) {
					el.state = { ...el.state, selected: false };
				}

				if (defaultValue && defaultValue.includes(el.value)) {
					el.state = { ...el.state, selected: true };
				}
			} else {
				el.state = {
					selected: false,
				};
			}

			return el;
		})
	);

	const initialLabel = optionsArr
		.map((el) => {
			if (defaultValue && defaultValue.includes(el.value)) {
				return el.label;
			}
		})
		.filter((el) => el)
		.join(", ");

	const [label, setLabel] = useState<string>(initialLabel);
	const [_selectedValue, setSelectedValue] = useState<string[]>(
		defaultValue || []
	);

	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleFocus = () => {
		setIsFocused((curr) => !curr);
	};

	const handleOnChange = (value: string) => {
		if (!multiple) {
			optionsArr.forEach((option) => {
				if (option.state && !option.state.disabled) {
					if (option.value === value) {
						option.state.selected = !option.state.selected;
					} else {
						option.state.selected = false;
					}
				}
			});
		} else {
			optionsArr.forEach((option) => {
				if (option.state && !option.state.disabled) {
					if (option.value === value) {
						option.state.selected = !option.state.selected;
					}
				}
			});
		}

		const selectedValues = optionsArr
			.filter((option) => option.state && option.state.selected)
			.map((el) => el.value);

		const selectedLabels = optionsArr
			.filter((option) => option.state && option.state.selected)
			.map((el) => el.label)
			.filter((el) => el);

		setSelectedValue(selectedValues);
		setLabel(
			selectedLabels.length > 1 ? selectedLabels.join(", ") : selectedLabels[0]
		);

		if (onChange) {
			onChange(selectedValues);
		}

		if (clickHide) {
			handleFocus();
		}
	};

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				inputRef.current &&
				!inputRef.current.contains(event.target as Node) &&
				clickOutsideHide
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
				(variant ? ` le-select--${variant}` : "") +
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
					{optionsArr.length
						? optionsArr.map((option) => (
								<div
									key={option.value}
									onClick={() => {
										if (option.state && !option.state.disabled) {
											handleOnChange(option.value);
										}
									}}
									className={
										"le-option" +
										(option.state && option.state.selected
											? " le-option--selected"
											: "") +
										(option.state && option.state.disabled
											? " le-option--disabled"
											: "") +
										(optionCustomClass ? ` ${optionCustomClass}` : "")
									}
									style={optionCustomStyles}
								>
									{option.label}
								</div>
						  ))
						: null}
				</div>
			)}
		</div>
	);
};

export { Select };
