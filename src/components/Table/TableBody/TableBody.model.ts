import { TableSizesType, TableVariants } from "../Table.model";

type TableRowItemValueType = string | number | boolean | undefined;
type RowTypeRecord<DataType extends object> = Record<keyof DataType, TableRowItemValueType>;

type TableBodyRowMinimal<DataType extends object = object> = {
	children?: React.ReactNode;
	item?: RowTypeRecord<DataType>;
	keysOrder?: (keyof DataType)[];
	customRowClass?: string;
	customRowStyles?: React.CSSProperties;
};

type TableBodyRowWithChildren = TableBodyRowMinimal<object> & {
	children: React.ReactNode;
};

type TableBodyRowWithItems<DataType extends object = object> = TableBodyRowMinimal<DataType> & {
	item: RowTypeRecord<DataType>;
	keysOrder: (keyof DataType)[];
};

/**
 * TableRowProps is a type that defines the properties for the TableRow component.
 * It can accept either children or items, along with various optional properties.
 */
type TableBodyRowProps<DataType extends object = object> =
	| TableBodyRowWithChildren
	| TableBodyRowWithItems<DataType>;

type TableBodyRowItemWithChildren = {
	children: React.ReactNode;
	value?: string | number | boolean | undefined;
};

type TableBodyRowItemWithValue = {
	value: string | number | boolean | undefined;
	children?: React.ReactNode;
};

type TableBodyRowItemProps = TableBodyRowItemWithChildren | TableBodyRowItemWithValue;

// Table body types section

type TableBodyMinimalProps<DataType extends object = object> = {
	children?: React.ReactNode;
	rows?: RowTypeRecord<DataType>[];
	keysOrder?: (keyof DataType)[];
	customBodyClass?: string;
	customBodyStyles?: React.CSSProperties;
	scrollable?: boolean;
	scrollWhen?: () => boolean;
	scrollHeight?: React.CSSProperties["maxHeight"];
	scrollWidth?: React.CSSProperties["maxWidth"];
	emptyValue?: string;
	variant?: TableVariants;
	size?: TableSizesType;
	rowProps?: TableBodyRowMinimal<object>;
};

type TableBodyWithRows<DataType extends object = object> = TableBodyMinimalProps<DataType> & {
	rows: RowTypeRecord<DataType>[];
};

type TableBodyWithChildren = TableBodyMinimalProps<object> & {
	children: React.ReactNode;
};

/**
 * TableBodyProps is a type that defines the properties for the TableBody component.
 * It can accept either children or rows and keys, along with various optional properties.
 */
type TableBodyProps<DataType extends object = object> =
	| TableBodyWithChildren
	| TableBodyWithRows<DataType>;

export {
	RowTypeRecord,
	TableBodyProps,
	TableBodyRowItemProps,
	TableBodyRowProps,
	TableRowItemValueType,
};
