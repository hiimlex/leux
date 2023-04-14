import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { Spinner } from "../Spinner";
import {
	TableBodyProps,
	TableHeaderProps,
	TableOrder,
	TableProps,
	TableSizes,
	TableVariants,
} from "./Table.model";
import "./Table.scss";

const TableHeader = ({
	children,
	columns,
	gridTemplateColumns,
	customHeaderClass,
	customHeaderStyles,
}: TableHeaderProps) => {
	const classNames: LeClassNames = {
		tableHeader: ({ customHeaderClass }: { customHeaderClass?: string }) =>
			`le-table--header ${customHeaderClass || ""}`,
		tableHeaderRow: () => "le-table--header-row",
		tableHeaderRowItem: ({ order, orderActive }: { order?: TableOrder; orderActive?: boolean }) =>
			`le-table--header-row-item ${order ? "le-table--header-row-item--" + order : ""} ${
				orderActive ? "le-table--header-row-item--" + order + "--active" : ""
			}`,
	};

	return (
		<thead
			data-testid="leuxTableHeader"
			className={classNames["tableHeader"]({ customHeaderClass })}
			style={{ ...customHeaderStyles }}
		>
			{children ? (
				children
			) : (
				<tr className={classNames["tableHeaderRow"]()} style={{ gridTemplateColumns }}>
					{columns &&
						columns.map(({ header, key, order, orderFn, orderActive }) => (
							<th
								key={key}
								className={classNames["tableHeaderRowItem"]({ order, orderActive })}
								onClick={() =>
									order && orderFn && orderFn({ order, key, header, orderFn, orderActive })
								}
							>
								{header}
							</th>
						))}
				</tr>
			)}
		</thead>
	);
};

const TableBody = ({
	children,
	rows,
	keys,
	gridTemplateColumns,
	emptyValue,
	customBodyClass,
	customBodyStyles,
}: TableBodyProps) => {
	const classNames: LeClassNames = {
		tableBody: ({ customBodyClass }: { customBodyClass?: string }) =>
			`le-table--body ${customBodyClass || ""}`,
		tableBodyRow: () => "le-table--body-row",
		tableBodyRowItem: () => "le-table--body-row-item",
	};

	return (
		<tbody
			data-testid="leuxTableBody"
			className={classNames["tableBody"]({ customBodyClass })}
			style={{ ...customBodyStyles }}
		>
			{children
				? children
				: rows &&
				  rows.map((row, rowIndex) => (
						<tr
							className={classNames["tableBodyRow"]()}
							key={rowIndex}
							style={{ gridTemplateColumns }}
						>
							{keys &&
								keys.map((key, keyIndex) => (
									<td className={classNames["tableBodyRowItem"]()} key={keyIndex}>
										{row[key] || emptyValue}
									</td>
								))}
						</tr>
				  ))}
		</tbody>
	);
};

const Table = ({
	columns,
	children,
	rows,
	customBodyClass,
	customBodyStyles,
	customClass,
	customHeaderClass,
	customHeaderStyles,
	customStyles,
	width = "100%",
	variant = "default",
	size = "medium",
	gridTemplateColumns,
	emptyValue = "---",
	state,
	height,
	customWrapperClass,
	customWrapperStyles,
}: TableProps) => {
	const keys = useMemo(() => columns && columns.map(({ key }) => key), [columns]);

	const classNames: LeClassNames = {
		table: ({
			size,
			variant,
			customClass,
		}: {
			size: TableSizes;
			variant: TableVariants;
			customClass?: string;
		}) => `le-table le-table--${size} le-table--${variant} ${customClass || ""}`,
		tableWrapper: ({
			disabled,
			customWrapperClass,
		}: {
			disabled?: boolean;
			customWrapperClass?: string;
		}) =>
			`le-table--wrapper ${disabled ? "le-table--wrapper-disabled" : ""} ${
				customWrapperClass || ""
			}`,
		spinnerWrapper: ({ size }: { size: TableSizes }) =>
			`le-table--spinner-wrapper le-table--spinner-wrapper-${size} `,
	};

	const canShowContent = useMemo(
		() => !state || (state && !state.loading && !state.empty),
		[state]
	);
	const canShowSpinner = useMemo(() => state && state.loading && !state.empty, [state]);
	const canShowEmpty = useMemo(() => state && state.empty, [state]);

	const TableLoaderJSX = state && state.loading && (
		<div className={classNames["spinnerWrapper"]({ size })}>
			<Spinner {...state.spinnerProps} role="tree" />
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
			<TableHeader
				columns={columns}
				gridTemplateColumns={gridTemplateColumns}
				customHeaderClass={customHeaderClass}
				customHeaderStyles={customHeaderStyles}
			/>
			{canShowEmpty && TableEmptyJSX}
			{canShowContent && (
				<TableBody
					rows={rows}
					keys={keys}
					gridTemplateColumns={gridTemplateColumns}
					customBodyClass={customBodyClass}
					customBodyStyles={customBodyStyles}
					emptyValue={emptyValue}
				/>
			)}
		</>
	);

	const TableJSX = (
		<table
			data-testid="leuxTable"
			style={{ width, height, ...customStyles }}
			className={classNames["table"]({ size, variant, customClass })}
		>
			{TableContentJSX}
		</table>
	);

	return (
		<div
			style={{ height, ...customWrapperStyles }}
			className={classNames["tableWrapper"]({
				disabled: state && state.disabled,
				customWrapperClass,
			})}
		>
			{TableJSX}
			{canShowSpinner && TableLoaderJSX}
		</div>
	);
};

export { Table, TableHeader, TableBody };
