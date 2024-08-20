import { TextAreaSizes } from "..";

export const TEXTAREA_ROW_SIZES: Record<TextAreaSizes, { rowHeight: number }> = {
	small: { rowHeight: 1.5 },
	medium: { rowHeight: 1.75 },
	large: { rowHeight: 2 },
};

export function getTextAreaRowHeight(
	r: number,
	s: TextAreaSizes
): React.CSSProperties["minHeight"] | React.CSSProperties["maxHeight"] {
	let value: React.CSSProperties["minHeight"];

	const metricFontSize = "rem";

	if (s && TEXTAREA_ROW_SIZES[s]) {
		const { rowHeight } = TEXTAREA_ROW_SIZES[s];

		if (r) {
			value = r * rowHeight;
			value = value + metricFontSize;
		}
	}

	return value;
}
