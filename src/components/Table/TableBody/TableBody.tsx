import React, { CSSProperties, JSX, useMemo } from "react";
import { LeClassNamesSimple } from "../../../types";
import { useTableContext } from "../TableContext";
import {
	RowTypeRecord,
	TableBodyProps,
	TableBodyRowItemProps,
	TableBodyRowProps,
	TableRowItemValueType,
} from "./TableBody.model";
import "./TableBody.scss";
import { cn } from "../../../utils";

const TableBody = <RowType extends object = object>({
	customBodyClass,
	customBodyStyles,
	scrollHeight,
	scrollWhen,
	scrollable,
	size = "medium",
	rowProps,
	...props
}: TableBodyProps<RowType>) => {
	const ctx = useTableContext();
	// Accessing context values or props
	const variant = useMemo(() => ctx?.variant || props.variant || "default", []);

	const rows = useMemo(
		() => (ctx?.rows || props.rows || []) as RowTypeRecord<RowType>[],
		[ctx?.rows]
	);
	const keysOrder = useMemo(
		() => ctx?.keysOrder || props.keysOrder || [],
		[ctx?.keysOrder, props.keysOrder]
	);

	const useChildren = useMemo(() => !!props.children, [props.children]);
	const isScrollable = useMemo(() => !!scrollable && scrollable, [scrollable]);
	const canScroll = useMemo(() => scrollWhen && scrollWhen(), [scrollWhen]);

	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			tableBody: `le-table-body le-table-body--${size} ${
				customBodyClass || ""
			} le-table-body--${variant} le-table-body--${
				isScrollable || canScroll ? "scrollable" : "no-scrollable"
			} ${scrollHeight ? "le-table-body--scrollable-tb" : ""}`,
		}),
		[customBodyClass]
	);

	const scrollStyles = useMemo(
		() => ({
			"--le-table-body-scrollHeight": scrollHeight,
		}),
		[scrollHeight]
	);

	const ItemJSX =
		rows &&
		rows.length > 0 &&
		rows.map((item, index) => (
			<TableBodyRow
				key={index}
				item={item}
				keysOrder={keysOrder}
				styles={rowProps?.styles}
				className={rowProps?.className}
				clickable={rowProps?.clickable}
				onClick={rowProps?.onClick}
			/>
		));

	return (
		<tbody
			data-testid="leuxTableBody"
			className={classNames["tableBody"]}
			style={{ ...customBodyStyles, ...scrollStyles }}
		>
			{useChildren ? props.children : ItemJSX}
		</tbody>
	);
};

const TableBodyRow = <RowType extends object>(props: TableBodyRowProps<RowType>): JSX.Element => {
	const useChildren = useMemo(() => !!props.children, []);

	const item = useMemo(
		() => props.item as Record<keyof RowType, TableRowItemValueType>,
		[props.item]
	);

	const RowItemsJSX =
		item &&
		props.keysOrder &&
		props.keysOrder.map((key, keyIndex) => <TableBodyRowItem key={keyIndex} value={item[key]} />);

	const ms: CSSProperties = useMemo(
		() => ({
			cursor: props?.clickable ? "pointer" : "default",
			...props?.styles,
		}),
		[props?.clickable, props?.styles]
	);

	return (
		<tr
			className={cn("le-table-body--row", props.className)}
			style={ms}
			onClick={() => props?.onClick?.(item)}
		>
			{useChildren ? props.children : RowItemsJSX}
		</tr>
	);
};

const TableBodyRowItem = ({ value, children }: TableBodyRowItemProps): JSX.Element => {
	return <td className="le-table-body--row-item">{children ? children : value}</td>;
};

export { TableBody, TableBodyRow, TableBodyRowItem };
