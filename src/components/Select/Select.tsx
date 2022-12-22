import React, { useEffect, useMemo, useRef, useState } from "react";
import { SelectOption, SelectProps } from "./Select.model";
import "./Select.scss";

const mappedOptions = (options: SelectOption[], defaultValue?: string[]): SelectOption[] => {
	return options.map((el) => {
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
	});
};

const Select = ({
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
	clickOptionHide = true,
	clickOutsideHide = true,
	valueSeparator = ", ",
	optionCustomStyles,
	optionCustomClass,
	selectCustomClass,
	selectCustomStyles,
	dropdownCustomClass,
	dropdownCustomStyles,
}: SelectProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLDivElement>(null);

	const [optionsArr] = useState<SelectOption[]>(mappedOptions(options, defaultValue));
	const [selectedValue, setSelectedValue] = useState<string[]>(defaultValue || []);
	const [isFocused, setIsFocused] = useState(false);

	const getLabel = useMemo((): string => {
		return optionsArr
			.map((el) => {
				if (selectedValue && selectedValue.includes(el.value)) {
					return el.label;
				}
			})
			.filter((el) => el)
			.join(valueSeparator);
	}, [selectedValue]);

	const [label, setLabel] = useState<string>(getLabel);

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

		const selectedValues = optionsArr.filter((option) => option.state && option.state.selected).map((el) => el.value);

		const selectedLabels = optionsArr
			.filter((option) => option.state && option.state.selected)
			.map((el) => el.label)
			.filter((el) => el)
			.join(valueSeparator);

		setSelectedValue(selectedValues);
		setLabel(selectedLabels);

		if (onChange) {
			onChange(selectedValues);
		}

		if (clickOptionHide) {
			handleFocus();
		}
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node) &&
			inputRef.current &&
			!inputRef.current.contains(event.target as Node) &&
			arrowRef.current &&
			!arrowRef.current.contains(event.target as Node)
		) {
			setIsFocused(false);
		}
	};

	const handleInputClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		if (!state.disabled) {
			handleFocus();
		}
	};

	useEffect(() => {
		if (clickOutsideHide) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		if (!clickOutsideHide) {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, clickOutsideHide]);

	useEffect(() => {
		if (isFocused) {
			setIsFocused(false);
		}
	}, [state.disabled]);

	return (
		<div
			className={
				"le-select" +
				(variant ? ` le-select--${variant}` : "") +
				(size ? ` le-select--${size}` : "") +
				(focusStyle && isFocused ? ` le-select--focus` : "") +
				(state && state.disabled ? " le-select--disabled" : "")
			}
		>
			<input
				id={fieldKey}
				ref={inputRef}
				name={fieldKey}
				style={{ width, ...selectCustomStyles }}
				className={"le-select--input" + (selectCustomClass ? ` ${selectCustomClass}` : "")}
				disabled={state && state.disabled}
				placeholder={placeholder}
				data-testid="leuxSelect"
				multiple={multiple}
				readOnly
				value={label}
				onClick={handleInputClick}
			/>
			<div ref={arrowRef} className="le-select--actions" onClick={handleInputClick}>
				<div className={"le-select--actions--arrow" + (isFocused ? " focused" : "")}></div>
			</div>
			{isFocused && !state.disabled && (
				<div
					ref={dropdownRef}
					className={"le-select--dropdown" + (dropdownCustomClass ? ` ${dropdownCustomClass}` : "")}
					style={dropdownCustomStyles}
				>
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
										(option.state && option.state.selected ? " le-option--selected" : "") +
										(option.state && option.state.disabled ? " le-option--disabled" : "") +
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
