import React, { JSX, useMemo } from "react";
import { LeClassNames } from "../../types";
import { Spinner } from "../Spinner";
import { TableProps } from "./Table.model";

import { withGlobalConfig } from "../../hooks";
import "./Table.scss";
import { TableBody, TableBodyRow, TableBodyRowItem } from "./TableBody";
import { TableContext } from "./TableContext";
import { TableHeader, TableHeaderColumn, TableHeaderRow } from "./TableHeader";

const TableComponent = <DataType extends object = object>({
	children,
	keysOrder,
	customBodyClass,
	customBodyStyles,
	customClass,
	customStyles,
	width = "100%",
	variant = "default",
	size = "medium",
	emptyValue = "---",
	state,
	height,
	customWrapperClass,
	customWrapperStyles,
	scrollHeight,
	scrollWhen,
	scrollWidth,
	scrollable,
	...props
}: TableProps<DataType>): JSX.Element => {
	const classNames: LeClassNames = useMemo(
		() => ({
			table: () => `le-table le-table--${size} le-table--${variant} ${customClass || ""}`,
			tableWrapper: () =>
				`le-table--wrapper le-table--wrapper-${variant} ${
					state?.disabled ? "le-table--wrapper-disabled" : ""
				} ${customWrapperClass || ""}`,
			spinnerWrapper: () => `le-table--spinner-wrapper le-table--spinner-wrapper-${size} `,
		}),
		[size, variant, customClass, customWrapperClass, state]
	);

	const canShowContent = useMemo(
		() => !state || (state && !state.loading && !state.empty),
		[state]
	);
	const canShowSpinner = useMemo(() => state && state.loading && !state.empty, [state]);
	const canShowEmpty = useMemo(() => state && state.empty, [state]);

	const TableLoaderJSX = state && state.loading && (
		<div className={classNames["spinnerWrapper"]()}>
			<Spinner {...state.spinnerProps} />
		</div>
	);

	const TableEmptyJSX = state && (
		<tbody className="le-table--empty">
			<tr>
				<td>{state.emptyContent ? state.emptyContent : "No Data"}</td>
			</tr>
		</tbody>
	);

	const TableContentJSX = children ? (
		children
	) : (
		<>
			<TableHeader<DataType>
				columns={props.columns || []}
				customHeaderClass={props.customHeaderClass}
				customHeaderStyles={props.customHeaderStyles}
				variant={variant}
				size={size}
				sortFn={props.sortFn}
			/>
			{canShowEmpty && TableEmptyJSX}
			{canShowContent && (
				<TableBody<DataType>
					rows={props.rows || []}
					customBodyClass={customBodyClass}
					customBodyStyles={customBodyStyles}
					emptyValue={emptyValue}
					scrollHeight={scrollHeight}
					scrollWhen={scrollWhen}
					scrollWidth={scrollWidth}
					scrollable={scrollable}
					variant={variant}
					size={size}
				/>
			)}
		</>
	);

	const TableJSX = (
		<table
			data-testid="leuxTable"
			style={{ width, ...customStyles }}
			className={classNames["table"]()}
		>
			{TableContentJSX}
		</table>
	);

	return (
		<TableContext.Provider
			value={{
				keysOrder,
				rows: props.rows,
				variant,
				size,
				columns: props.columns,
			}}
		>
			<div style={{ height, ...customWrapperStyles }} className={classNames["tableWrapper"]()}>
				{TableJSX}
				{canShowSpinner && TableLoaderJSX}
			</div>
		</TableContext.Provider>
	);
};

const Root = <DataType extends object>(props: TableProps<DataType>) => {
	const Global = withGlobalConfig<"table", TableProps<DataType>>(TableComponent, "table");

	return <Global {...props} />;
};

const Table = {
	Root,
	Body: TableBody,
	Header: TableHeader,
	HeaderRow: TableHeaderRow,
	HeaderColumn: TableHeaderColumn,
	BodyRow: TableBodyRow,
	BodyCell: TableBodyRowItem,
};

export { Table };
