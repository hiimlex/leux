import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { Spinner } from "../Spinner";
import { TableProps } from "./Table.model";

import "./Table.scss";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

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
	scrollHeight,
	scrollWhen,
	scrollWidth,
	scrollable,
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
