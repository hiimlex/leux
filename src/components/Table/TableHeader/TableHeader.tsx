import React, { useMemo, useState } from "react";
import { LeClassNames } from "../../../types";
import { TableColumn, TableFilter, TableHeaderProps, TableSort } from "../Table.model";

import "./TableHeader.scss";

const TableHeader = ({
	children,
	columns,
	gridTemplateColumns,
	customHeaderClass,
	customHeaderStyles,
	variant,
	size,
	sortFn,
}: TableHeaderProps) => {
	const [filters, setFilters] = useState<TableFilter[]>([]);
	const classNames: LeClassNames = useMemo(
		() => ({
			tableHeader: () =>
				`le-table--header ${variant ? `le-table--header-${variant}` : ""} ${
					size ? `le-table--header-${size}` : ""
				} ${customHeaderClass ?? ""}`,
			tableHeaderRow: () => "le-table--header-row",
			tableHeaderRowItem: ({ sort, sortable }) =>
				`le-table--header-row-item ${sort ? `le-table--header-row-item--${sort}` : ""} ${
					sortable ? `le-table--header-row-item--sortable` : ""
				} ${sortable && sort ? `le-table--header-row-item--${sort}--active` : ""}`,
		}),
		[customHeaderClass, variant, size]
	);

	const getFilter = (columnKey: string): TableFilter | undefined => {
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

	const handleColumnClick = (column: TableColumn): void => {
		if (column.sortable) {
			handleSort(column);
		}
	};

	const handleSort = (column: TableColumn): void => {
		if (!sortFn) {
			return;
		}

		const tableFilter = getFilter(column.key);

		if (!tableFilter || tableFilter === null) {
			addFilter({ header: column.key, sort: "asc" });
			sortFn({ header: column.key, sort: "asc" });

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

		updateFilter({ header: column.key, sort: newSortValue });
		sortFn({ header: column.key, sort: newSortValue });
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
				<tr className={classNames["tableHeaderRow"]()} style={{ gridTemplateColumns }}>
					{columns &&
						columns.map((column) => {
							const tableFilter = getFilter(column.key);

							return (
								<th
									key={column.key}
									className={classNames["tableHeaderRowItem"]({
										sort: tableFilter?.sort,
										sortable: column.sortable,
									})}
									onClick={() => handleColumnClick(column)}
								>
									{column.header}
								</th>
							);
						})}
				</tr>
			)}
		</thead>
	);
};

export { TableHeader };
