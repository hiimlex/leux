import { ButtonSizes } from "../Button";
import { SpinnerProps } from "../Spinner";

type TableOrder = "asc" | "desc";
type TableColumn = {
	header: string;
	key: string;
	orderActive?: boolean;
	order?: TableOrder;
	orderFn?: (order: TableColumn) => void;
};
type TableRow = {
	[key: string]: string | number | boolean | undefined;
};
type TableVariants = "bordered" | "default";
type TableSizes = "small" | "medium" | "large";
type TablePaginationSizes = "small" | "medium" | "large";

interface TableHeaderProps {
	children?: React.ReactNode;
	columns?: TableColumn[];
	gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
	customHeaderClass?: string;
	customHeaderStyles?: React.CSSProperties;
}

interface TableBodyProps {
	children?: React.ReactNode;
	rows?: TableRow[];
	keys?: string[];
	gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
	customBodyClass?: string;
	customBodyStyles?: React.CSSProperties;
	emptyValue?: string;
}

interface TablePaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
	justifyContent?: React.CSSProperties["justifyContent"];
	showPaginationLabel?: (props: {
		currentPage: number;
		totalItems: number;
		itemsPerPage: number;
	}) => string;
	showPaginationButtons?: {
		previous?: boolean;
		next?: boolean;
		quantity?: number;
	};
	paginationSize?: TablePaginationSizes;
	customPaginationClass?: string;
	customPaginationStyles?: React.CSSProperties;
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
	pagination?: TablePaginationProps;
	state?: TableState;
}

export {
	TableProps,
	TableHeaderProps,
	TableBodyProps,
	TableColumn,
	TableRow,
	TableSizes,
	TableVariants,
	TableOrder,
	TablePaginationProps,
	TablePaginationSizes,
	TableState,
};
