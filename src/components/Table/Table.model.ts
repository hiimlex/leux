import { JSX } from "react";
import { SpinnerProps } from "../Spinner";

type TableSort = "asc" | "desc" | "none";
interface TableColumn {
	header: string;
	key: string;
	sortable?: boolean;
}

interface TableFilter {
	header: string;
	sort?: TableSort;
}

interface TableRow {
	[key: string]: string | number | boolean | undefined;
}
type TableVariants = "bordered" | "default";
type TableSizes = "small" | "medium" | "large";
type TableSortFn = (tableFilter: TableFilter) => void;

interface TableHeaderProps {
	children?: React.ReactNode;
	columns?: TableColumn[];
	gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
	customHeaderClass?: string;
	customHeaderStyles?: React.CSSProperties;
	variant?: TableVariants;
	size?: TableSizes;
	sortFn?: TableSortFn;
}

interface TableBodyProps {
	children?: React.ReactNode;
	rows?: TableRow[];
	keys?: string[];
	gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
	customBodyClass?: string;
	customBodyStyles?: React.CSSProperties;
	scrollable?: boolean;
	scrollWhen?: () => boolean;
	scrollHeight?: React.CSSProperties["maxHeight"];
	scrollWidth?: React.CSSProperties["maxWidth"];
	emptyValue?: string;
	variant?: TableVariants;
	size?: TableSizes;
}

type TableState = {
	empty?: boolean;
	disabled?: boolean;
	loading?: boolean;
	spinnerProps?: SpinnerProps;
	emptyContent?: JSX.Element;
};

interface TableProps extends TableHeaderProps, Omit<TableBodyProps, "keys"> {
	variant?: TableVariants;
	size?: TableSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	state?: TableState;
	customWrapperClass?: string;
	customWrapperStyles?: React.CSSProperties;
}

export {
	TableProps,
	TableHeaderProps,
	TableBodyProps,
	TableColumn,
	TableRow,
	TableSizes,
	TableVariants,
	TableSort,
	TableState,
	TableFilter,
	TableSortFn,
};
