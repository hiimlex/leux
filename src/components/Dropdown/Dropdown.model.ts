import { ReactNode, MouseEvent as ReactMouseEvent } from "react";

type DropdownVariant = "filled" | "outlined";
type DropdownSize = "small" | "medium" | "large";
type DropdownPosition = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
type DropdownTrigger = "click" | "hover";

interface DropdownProps {
	variant?: DropdownVariant;
	size?: DropdownSize;
	children?: React.ReactNode;
	anchor?: React.ReactNode;
	position?: DropdownPosition;
	trigger?: DropdownTrigger;
	clickOutside?: boolean;
	closeOnClick?: boolean;
	width?: React.CSSProperties["width"];
	customWrapperStyles?: React.CSSProperties;
	customWrapperClass?: string;
	customMenuStyles?: React.CSSProperties;
	customMenuClass?: string;
	menuProps?: React.HTMLAttributes<HTMLUListElement>;
}

interface DropdownItemProps {
	children?: ReactNode;
	noBreakWord?: boolean;
	onClick?: (event?: ReactMouseEvent<HTMLLIElement, MouseEvent>) => void;
	disabled?: boolean;
	itemProps?: React.HTMLAttributes<HTMLLIElement>;
	closeOnClick?: boolean;
	centered?: boolean;
	readonly setShow?: React.Dispatch<React.SetStateAction<boolean>>;
	readonly trigger?: DropdownTrigger;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { DropdownProps, DropdownItemProps, DropdownVariant, DropdownSize };
