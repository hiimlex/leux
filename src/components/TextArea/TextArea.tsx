import React, { useEffect, useMemo, useState } from "react";
import { LeClassNamesSimple } from "../../types";
import { getTextAreaRowHeight } from "../../utils";
import { TextAreaProps } from "./TextArea.model";
import "./TextArea.scss";

const TextArea: React.FC<TextAreaProps> = ({
	fieldKey,
	variant = "filled",
	width,
	size = "medium",
	resize = false,
	rows = 3,
	minRows = 2,
	state,
	customClass,
	customStyles,
	placeholder,
	onChange,
	defaultValue,
	textAreaProps,
	textAreaRef,
}) => {
	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			textArea: `le-textarea ${
				customClass ? ` ${customClass}` : ""
			} le-textarea--${variant} le-textarea--${size} ${
				state && state.disabled ? "le-textarea--disabled" : ""
			}`,
		}),
		[customClass, state, size, variant]
	);

	const [minHeight, setMinHeight] = useState<React.CSSProperties["minHeight"]>(0);
	const [maxHeight, setMaxHeight] = useState<React.CSSProperties["maxHeight"]>(0);

	const handleRowsHeight = () => {
		const newMinHeight = getTextAreaRowHeight(minRows, size);
		const newMaxHeight = getTextAreaRowHeight(rows, size);

		setMinHeight(newMinHeight);
		setMaxHeight(newMaxHeight);
	};

	useEffect(() => {
		handleRowsHeight();
	}, [size, minRows, rows]);

	return (
		<textarea
			ref={textAreaRef}
			id={fieldKey}
			name={fieldKey}
			defaultValue={defaultValue}
			onChange={onChange}
			placeholder={placeholder}
			className={classNames["textArea"]}
			data-testid="leuxTextArea"
			style={{
				width,
				maxHeight,
				minHeight,
				height: maxHeight,
				resize: resize ? "block" : "none",
				...customStyles,
			}}
			disabled={state && state.disabled}
			{...textAreaProps}
		></textarea>
	);
};

export { TextArea };
