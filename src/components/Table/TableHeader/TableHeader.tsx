import React, { JSX, useMemo, useState } from "react";
import { LeClassNames } from "../../../types";
import {
	TableFilter,
	TableHeaderColumnProps,
	TableHeaderProps,
	TableHeaderRowProps,
	TableSort,
} from "./TableHeader.model";

import { useTableContext } from "../TableContext";
import "./TableHeader.scss";

const TableHeader = <DataType extends object = object>({
	children,
	columns,
	customHeaderClass,
	customHeaderStyles,
	...props
}: TableHeaderProps<DataType>) => {
	const ctx = useTableContext();

	const size = useMemo(() => ctx.size || props.size, [ctx.size, props.size]);
	const variant = useMemo(() => ctx.variant || props.variant, [ctx.variant, props.variant]);
	const sortFn = useMemo(() => ctx.sortFn || props.sortFn, [ctx.sortFn, props.sortFn]);

	const [filters, setFilters] = useState<TableFilter[]>([]);
	const classNames: LeClassNames = useMemo(
		() => ({
			tableHeader: () =>
				`le-table--header ${variant ? `le-table--header-${variant}` : ""} ${
					size ? `le-table--header-${size}` : ""
				} ${customHeaderClass ?? ""}`,
			tableHeaderRow: () => "le-table--header-row",
		}),
		[customHeaderClass, variant, size]
	);

	const getFilter = (columnKey?: string): TableFilter | undefined => {
		if (!columnKey) {
			return undefined;
		}

		return filters.find((filter) => filter.header === columnKey);
	};

	const addFilter = (newFilter: TableFilter): void => {
		setFilters((curr) => [...curr, newFilter]);
	};

	const updateFilter = (updateFilter: TableFilter): void => {
		setFilters((curr) =>
			curr.map((filter) => (filter.header === updateFilter.header ? updateFilter : filter))
		);
	};

	const handleColumnClick = (column: TableHeaderColumnProps<DataType>): void => {
		if (column.sortable) {
			handleSort(column);
		}
	};

	const handleSort = (column: TableHeaderColumnProps<DataType>): void => {
		if (!sortFn) {
			return;
		}

		if (!column.columnKey) {
			return;
		}

		const tableFilter = getFilter(column.columnKey.toString());

		if (!tableFilter || tableFilter === null) {
			addFilter({ header: column.columnKey.toString(), sort: "asc" });
			sortFn({ header: column.columnKey.toString(), sort: "asc" });

			return;
		}

		if (!tableFilter.sort) {
			tableFilter.sort = "none";
		}

		const sortValues: Record<TableSort, TableSort> = {
			none: "asc",
			asc: "desc",
			desc: "none",
		};

		const newSortValue: TableSort = sortValues[tableFilter.sort];

		updateFilter({ header: column.columnKey.toString(), sort: newSortValue });
		sortFn({ header: column.columnKey.toString(), sort: newSortValue });
	};

	return (
		<thead
			data-testid="leuxTableHeader"
			className={classNames["tableHeader"]()}
			style={{ ...customHeaderStyles }}
		>
			{children ? (
				children
			) : (
				<TableHeaderRow>
					{columns &&
						columns.map((column) => {
							const tableFilter = getFilter(column?.columnKey?.toString());

							return (
								<TableHeaderColumn
									key={column?.columnKey?.toString()}
									{...column}
									filter={tableFilter}
									onClick={handleColumnClick}
								/>
							);
						})}
				</TableHeaderRow>
			)}
		</thead>
	);
};

const TableHeaderRow = (props: TableHeaderRowProps) => {
	const isChildren = useMemo(() => "children" in props, [props]);

	const ColumnsJSX =
		props.columns && props.columns.map((column) => <TableHeaderColumn {...column} />);

	return <tr className="le-table--header-row">{isChildren ? props.children : ColumnsJSX}</tr>;
};

const TableHeaderColumn = <ColumnType extends object = object>({
	onClick,
	...column
}: TableHeaderColumnProps<ColumnType>): JSX.Element => {
	const { filter } = column;

	const useChildren = useMemo(() => "children" in column, [column]);

	return (
		<th
			className={`le-table--header-row-item ${
				filter?.sort ? `le-table--header-row-item--${filter.sort}` : ""
			} ${column.sortable ? `le-table--header-row-item--sortable` : ""} ${
				column.sortable && filter?.sort ? `le-table--header-row-item--${filter.sort}--active` : ""
			}`}
			onClick={() => onClick?.(column)}
		>
			{useChildren ? column.children : column.header}
		</th>
	);
};

export { TableHeader, TableHeaderColumn, TableHeaderRow };
