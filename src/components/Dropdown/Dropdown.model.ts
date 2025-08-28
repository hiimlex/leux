import { Placement, Strategy } from "@floating-ui/react-dom";
import { ReactNode, MouseEvent as ReactMouseEvent } from "react";

type DropdownVariant = "filled" | "outlined";
type DropdownSize = "small" | "medium" | "large";
type DropdownPosition = Placement;
type DropdownTrigger = "click";

interface DropdownProps {
	menuId?: string;
	variant?: DropdownVariant;
	size?: DropdownSize;
	children?: React.ReactNode;
	anchor?: React.ReactNode;
	placement?: DropdownPosition;
	trigger?: DropdownTrigger;
	clickOutside?: boolean;
	closeOnClick?: boolean;
	width?: React.CSSProperties["width"];
	customWrapperStyles?: React.CSSProperties;
	customWrapperClass?: string;
	customMenuStyles?: React.CSSProperties;
	customMenuClass?: string;
	menuProps?: React.HTMLAttributes<HTMLUListElement>;
	strategy?: Strategy;
	disabled?: boolean;

	offset?: number;
	behavior?: "flip" | "shift" | "autoPlacement" | "flip_shift" | "none";
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
