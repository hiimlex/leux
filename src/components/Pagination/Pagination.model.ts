type PaginationSizes = "small" | "medium" | "large";

type PaginationLabel = (props: {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
}) => string;

type PaginationButtons = {
	previous?: boolean;
	next?: boolean;
	all?: boolean;
};

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange?: (page: number) => void;
	justifyContent?: React.CSSProperties["justifyContent"];
	showPaginationLabel?: PaginationLabel;
	showPaginationButtons?: PaginationButtons;
	size?: PaginationSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { PaginationProps, PaginationSizes, PaginationLabel, PaginationButtons };
