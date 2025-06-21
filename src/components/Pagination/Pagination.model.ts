import { DropdownProps } from "../Dropdown/Dropdown.model";

type PaginationSizes = "small" | "medium" | "large";

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
	onPageSizeChange?: (itemsPerPage: number) => void;
	showPaginationLabel?: PaginationLabel;

	disableNext?: () => boolean | boolean;
	disablePrevious?: () => boolean | boolean;

	showPageSizeChanger?: boolean;
	pageSizeChangerProps?: Omit<PageSizeChangerProps, "onPageSizeChange" | "itemsPerPage" | "size">;

	customWrapperClass?: string;
	customWrapperStyles?: React.CSSProperties;
}

interface PageSizeChangerOptions {
	value: number;
	label: string | number;
}

type PageSizeChangerLabel = (itemsPerPage: number) => string;

interface PageSizeChangerProps {
	itemsPerPage: number;
	onPageSizeChange?: (itemsPerPage: number) => void;
	options?: PageSizeChangerOptions[];
	pageSizeChangerLabel?: PageSizeChangerLabel;

	size?: PaginationSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;

	menuProps?: DropdownProps;
}

export {
	PaginationProps,
	PaginationSizes,
	PaginationLabel,
	PaginationButtons,
	PageSizeChangerProps,
	PageSizeChangerOptions,
	PageSizeChangerLabel,
};
