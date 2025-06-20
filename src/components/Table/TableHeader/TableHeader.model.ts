import { TableSizesType, TableVariants } from "../Table.model";

type TableHeaderColumnMinimalProps<DataType extends object = object> = {
	header?: string;
	children?: React.ReactNode;
	columnKey?: keyof DataType;
	sortable?: boolean;
	onClick?: (column: TableHeaderColumnProps<DataType>) => void;
	filter?: TableFilter;
	textAlign?: "left" | "center" | "right";
};

type TableHeaderColumnProps<DataType extends object = object> =
	| (TableHeaderColumnMinimalProps<DataType> & {
			children: React.ReactNode;
			header?: string;
	  })
	| (TableHeaderColumnMinimalProps<DataType> & {
			header: string;
			children?: React.ReactNode;
	  });

type TableSort = "asc" | "desc" | "none";

interface TableFilter {
	header: string;
	sort?: TableSort;
}
type TableSortFn = (tableFilter: TableFilter) => void;

type TableHeaderRowMinimalProps<DataType extends object = object> = {
	children?: React.ReactNode;
	columns?: TableHeaderColumnProps<DataType>[];
};

type TableHeaderRowProps<DataType extends object = object> =
	| ({
			children?: React.ReactNode;
	  } & TableHeaderRowMinimalProps)
	| ({
			columns: TableHeaderColumnProps<DataType>[];
	  } & TableHeaderRowMinimalProps<DataType>);

type TableHeaderMinimalProps<DataType extends object = object> = {
	children?: React.ReactNode;
	columns?: TableHeaderColumnProps<DataType>[];
	customHeaderClass?: string;
	customHeaderStyles?: React.CSSProperties;
	gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
	variant?: TableVariants;
	size?: TableSizesType;
	sortFn?: TableSortFn;
};

type TableHeaderWithChildren = {
	children: React.ReactNode;
} & TableHeaderMinimalProps;

type TableHeaderWithColumns<DataType extends object = object> = {
	columns: TableHeaderColumnProps<DataType>[];
} & TableHeaderMinimalProps<DataType>;

/**
 * TableHeaderProps is a type that defines the properties for the TableHeader component.
 * It can accept either children or columns, along with various optional properties.
 */
type TableHeaderProps<DataType extends object = object> =
	| TableHeaderWithChildren
	| TableHeaderWithColumns<DataType>;

export {
	TableFilter,
	TableHeaderColumnProps,
	TableHeaderProps,
	TableHeaderRowProps,
	TableSort,
	TableSortFn,
};
