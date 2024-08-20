import React, { useMemo } from "react";
import { LeClassNamesSimple } from "../../../types";
import { TableBodyProps } from "../Table.model";
import "./TableBody.scss";

const TableBody: React.FC<TableBodyProps> = ({
	children,
	rows,
	keys,
	gridTemplateColumns,
	emptyValue,
	customBodyClass,
	customBodyStyles,
	scrollHeight,
	scrollWhen,
	scrollable,
	variant = "default",
	size = "medium",
}) => {
	const isScrollable = useMemo(() => !!scrollable && scrollable, [scrollable]);
	const canScroll = useMemo(() => scrollWhen && scrollWhen(), [scrollWhen]);

	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			tableBody: `le-table-body le-table-body--${size} ${
				customBodyClass || ""
			} le-table-body--${variant} le-table-body--${
				isScrollable || canScroll ? "scrollable" : "no-scrollable"
			} ${scrollHeight ? "le-table-body--scrollable-tb" : ""}`,
			tableBodyRow: "le-table-body--row",
			tableBodyRowItem: "le-table-body--row-item",
		}),
		[customBodyClass]
	);

	const scrollStyles = useMemo(
		() => ({
			"--le-table-body-scrollHeight": scrollHeight,
		}),
		[scrollHeight]
	);

	return (
		<tbody
			data-testid="leuxTableBody"
			className={classNames["tableBody"]}
			style={{ ...customBodyStyles, ...scrollStyles }}
		>
			{children
				? children
				: rows &&
				  rows.map((row, rowIndex) => (
						<tr
							className={classNames["tableBodyRow"]}
							key={rowIndex}
							style={{ gridTemplateColumns }}
						>
							{keys &&
								keys.map((key, keyIndex) => (
									<td className={classNames["tableBodyRowItem"]} key={keyIndex}>
										{row[key] || emptyValue}
									</td>
								))}
						</tr>
				  ))}
		</tbody>
	);
};

export { TableBody };
