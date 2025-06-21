import { JSX } from "react";
import { SpinnerProps } from "../Spinner";
import { TableBodyProps } from "./TableBody";
import { TableHeaderProps } from "./TableHeader";
import { TableContextType } from "./TableContext";

type TableVariants = "bordered" | "default";
const TableSizes = { Small: "small", Medium: "medium", Large: "large" };

type TableSizesType = (typeof TableSizes)[keyof typeof TableSizes];

type TableState = {
	empty?: boolean;
	disabled?: boolean;
	loading?: boolean;
	spinnerProps?: SpinnerProps;
	emptyContent?: JSX.Element;
};

interface TableProps<RowType extends object = object>
	extends Omit<TableHeaderProps<RowType>, "children" | "columns">,
		Omit<TableBodyProps<RowType>, "children" | "keysOrder" | "rows">,
		TableContextType<RowType> {
	children?: React.ReactNode;
	variant?: TableVariants;
	size?: TableSizesType;
	customClass?: string;
	customStyles?: React.CSSProperties;
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	state?: TableState;
	customWrapperClass?: string;
	customWrapperStyles?: React.CSSProperties;
}

export { TableProps, TableSizes, TableState, TableVariants, TableSizesType };
