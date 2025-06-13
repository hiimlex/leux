type PaginationSizes = "small" | "medium" | "large";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LeSafeAny = any;
type LeClassNames = Record<string, (props?: LeSafeAny) => string>;

type PaginationLabel = (props: {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
}) => string;

type PaginationButtons = {
	previous?: boolean;
	next?: boolean;
	limit?: number;
};

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	simplePagination?: boolean;
	paginationButtons?: PaginationButtons;
	size?: PaginationSizes;
	justifyContent?: React.CSSProperties["justifyContent"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	onPageChange?: (page: number) => void;
	showPaginationLabel?: PaginationLabel;
}

export { PaginationProps, PaginationSizes, PaginationLabel, PaginationButtons, LeClassNames };
