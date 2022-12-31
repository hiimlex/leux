import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { Button } from "../Button";
import {
	TableHeaderProps,
	TableOrder,
	TableBodyProps,
	TablePaginationProps,
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

const TablePagination = ({
	currentPage,
	itemsPerPage,
	onPageChange,
	totalItems,
	totalPages,
	justifyContent = "flex-end",
	showPaginationLabel,
	showPaginationButtons,
	customPaginationClass,
	customPaginationStyles,
	paginationSize = "medium",
}: TablePaginationProps) => {
	const classNames: LeClassNames = {
		tablePagination: ({ customPaginationClass, paginationSize }) =>
			`le-table--pagination le-table--pagination-${paginationSize} ${customPaginationClass || ""} `,
		tablePaginationNext: () => "le-table--pagination-next",
		tablePaginationPrev: () => "le-table--pagination-prev",
		tablePaginationLabel: () => "le-table--pagination-label",
		tablePaginationButton: () => `le-table--pagination-button`,
		tablePaginationButtonGroup: () => `le-table--pagination-button-group`,
	};

	const paginationButtons = useMemo(
		() => showPaginationButtons && Array<number>(showPaginationButtons.quantity || 0).fill(0),
		[showPaginationButtons]
	);

	if (!showPaginationButtons && !showPaginationLabel) return null;

	return (
		<div
			className={classNames["tablePagination"]({ customPaginationClass, paginationSize })}
			style={{ justifyContent, ...customPaginationStyles }}
		>
			{showPaginationLabel && (
				<span className={classNames["tablePaginationLabel"]()}>
					{showPaginationLabel({ currentPage, totalItems, itemsPerPage })}
				</span>
			)}

			{showPaginationButtons && (
				<div className={classNames["tablePaginationButtonGroup"]()}>
					{showPaginationButtons.previous && (
						<Button
							state={{ disabled: currentPage - 1 === 0 }}
							theme="default"
							variant="outlined"
							size={paginationSize}
							onClick={() => onPageChange(currentPage - 1)}
							customClass={classNames["tablePaginationButton"]()}
						>
							{"<"}
						</Button>
					)}

					{paginationButtons &&
						paginationButtons.map((_, index) => {
							const pageNumber = index + 1;

							return (
								<Button
									key={index}
									customClass={classNames["tablePaginationButton"]()}
									variant={currentPage === pageNumber ? "filled" : "outlined"}
									theme={currentPage === pageNumber ? "primary" : "default"}
									size={paginationSize}
									onClick={() => onPageChange(pageNumber)}
								>
									{pageNumber}
								</Button>
							);
						})}

					{showPaginationButtons.next && (
						<Button
							state={{ disabled: currentPage + 1 > totalPages }}
							theme="default"
							variant="outlined"
							size={paginationSize}
							onClick={() => onPageChange(currentPage + 1)}
							customClass={classNames["tablePaginationButton"]()}
						>
							{">"}
						</Button>
					)}
				</div>
			)}
		</div>
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
	pagination,
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
		tableWithPagination: () => `le-table--with-pagination`,
	};

	const TableContent = children ? (
		children
	) : (
		<>
			<TableHeader
				columns={columns}
				gridTemplateColumns={gridTemplateColumns}
				customHeaderClass={customHeaderClass}
				customHeaderStyles={customHeaderStyles}
			/>
			<TableBody
				rows={rows}
				keys={keys}
				gridTemplateColumns={gridTemplateColumns}
				customBodyClass={customBodyClass}
				customBodyStyles={customBodyStyles}
				emptyValue={emptyValue}
			/>
		</>
	);

	if (pagination) {
		pagination.paginationSize = size;

		return (
			<div className={classNames["tableWithPagination"]()}>
				<table
					data-testid="leuxTable"
					style={{ width, ...customStyles }}
					className={classNames["table"]({ size, variant, customClass })}
				>
					{TableContent}
				</table>
				{pagination && <TablePagination {...pagination} />}
			</div>
		);
	}

	return (
		<table
			data-testid="leuxTable"
			style={{ width, ...customStyles }}
			className={classNames["table"]({ size, variant, customClass })}
		>
			{TableContent}
		</table>
	);
};

export { Table, TableHeader, TableBody };
