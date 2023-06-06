import React, { useCallback, useEffect, useState } from "react";
import { TextAreaProps, TextAreaSizes } from "./TextArea.model";
import "./TextArea.scss";

const sizeRowArr: Record<TextAreaSizes, { rowHeight: number }> = {
	small: { rowHeight: 1.5 },
	medium: { rowHeight: 1.75 },
	large: { rowHeight: 2 },
};

const TextArea = ({
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
}: TextAreaProps) => {
	const [minHeight, setMinHeight] = useState<React.CSSProperties["minHeight"]>(0);
	const [maxHeight, setMaxHeight] = useState<React.CSSProperties["maxHeight"]>(0);

	const getRowHeight = (
		rows: number
	): React.CSSProperties["minHeight"] | React.CSSProperties["maxHeight"] => {
		let value: React.CSSProperties["maxWidth"];

		const metricFontSize = "rem";

		if (size && sizeRowArr[size]) {
			const { rowHeight } = sizeRowArr[size];

			if (rows) {
				value = rows * rowHeight + metricFontSize;
			}
		}

		return value;
	};

	const handleRowsHeight = useCallback(() => {
		const minHeight = getRowHeight(minRows);
		const maxHeight = getRowHeight(rows);

		setMinHeight(minHeight);
		setMaxHeight(maxHeight);
	}, []);

	useEffect(() => {
		handleRowsHeight();
	}, [size, rows]);

	return (
		<textarea
			ref={textAreaRef}
			id={fieldKey}
			name={fieldKey}
			defaultValue={defaultValue}
			onChange={onChange}
			placeholder={placeholder}
			className={`le-textarea ${
				customClass ? ` ${customClass}` : ""
			} le-textarea--${variant} le-textarea--${size} ${
				state && state.disabled ? "le-textarea--disabled" : ""
			}`}
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
