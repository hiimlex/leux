import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { Spinner } from "../Spinner";
import { TableBodyProps, TableProps } from "./Table.model";

import "./Table.scss";
import { TableHeader } from "./TableHeader";

const TableBody: React.FC<TableBodyProps> = ({
	children,
	rows,
	keys,
	gridTemplateColumns,
	emptyValue,
	customBodyClass,
	customBodyStyles,
}) => {
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

const Table: React.FC<TableProps> = ({
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
	sortFn,
}: TableProps) => {
	const keys = useMemo(() => columns && columns.map(({ key }) => key), [columns]);

	const classNames: LeClassNames = useMemo(
		() => ({
			table: () => `le-table le-table--${size} le-table--${variant} ${customClass || ""}`,
			tableWrapper: ({ disabled }) =>
				`le-table--wrapper ${disabled ? "le-table--wrapper-disabled" : ""} ${
					customWrapperClass || ""
				}`,
			spinnerWrapper: () => `le-table--spinner-wrapper le-table--spinner-wrapper-${size} `,
		}),
		[size, variant, customClass, customWrapperClass]
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
			<TableHeader
				columns={columns}
				gridTemplateColumns={gridTemplateColumns}
				customHeaderClass={customHeaderClass}
				customHeaderStyles={customHeaderStyles}
				variant={variant}
				size={size}
				sortFn={sortFn}
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
			className={classNames["table"]()}
		>
			{TableContentJSX}
		</table>
	);

	return (
		<div
			style={{ height, ...customWrapperStyles }}
			className={classNames["tableWrapper"]({
				disabled: state && state.disabled,
			})}
		>
			{TableJSX}
			{canShowSpinner && TableLoaderJSX}
		</div>
	);
};

export { Table, TableBody, TableHeader };
