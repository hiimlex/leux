import React, {
	Children,
	MouseEvent as ReactMouseEvent,
	cloneElement,
	useEffect,
	useMemo,
	useState,
} from "react";
import { withGlobalConfig } from "../../hooks";
import { LeClassNamesSimple } from "../../types";
import { Button } from "../Button";
import { DropdownItemProps, DropdownProps } from "./Dropdown.model";
import "./Dropdown.scss";

const DropdownComponent: React.FC<DropdownProps> = ({
	menuId,
	anchor,
	menuProps,
	variant = "filled",
	size = "medium",
	children,
	position = "bottomLeft",
	clickOutside = true,
	closeOnClick = true,
	trigger = "click",
	width,
	customWrapperStyles,
	customWrapperClass,
	customMenuClass,
	customMenuStyles,
}) => {
	const [show, setShow] = useState(false);

	const randomId = Math.random().toString(36).substr(2, 9);
	const id = useMemo(() => (menuId ? menuId : randomId), [menuId]);

	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			leDropdownMenu: `le-dropdown le-dropdown--${variant} le-dropdown--${size} le-dropdown--${position} le-dropdown--${trigger} ${
				customMenuClass ? customMenuClass : ""
			}`,
			leDropdownMenuWrapper: `le-dropdown--menu-wrapper le-dropdown--menu-wrapper-${position} le-dropdown--menu-wrapper-${trigger} ${
				customWrapperClass ? customWrapperClass : ""
			}`,
			leDropdownWrapper: `le-dropdown--wrapper le-dropdown--wrapper-${trigger}`,
			leDropdownAnchor: "le-dropdown--anchor",
		}),
		[customWrapperClass, position, size, trigger, variant, position, trigger]
	);

	const handleToogle = () => setShow(!show);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (show && clickOutside && trigger === "click") {
				const target = e.target as HTMLElement;

				const hasAncestor = target.closest(".le-dropdown--wrapper");

				if (hasAncestor && hasAncestor.id === id) return;

				setShow(false);
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);
	}, [show, clickOutside]);

	const handleClickTrigger = () => {
		if (trigger === "click") {
			handleToogle();
		}
	};

	useEffect(() => {
		if (trigger === "hover") {
			setShow(true);
		}
	}, [trigger]);

	const childrenArr = Children.toArray(children) as React.ReactElement<DropdownItemProps>[];

	return (
		<div
			id={id}
			className={classNames["leDropdownWrapper"]}
			style={{ ...customWrapperStyles }}
			data-testid="leuxDropdownWrapper"
		>
			<div
				className={classNames["leDropdownAnchor"]}
				onClick={handleClickTrigger}
				data-testid="leuxDropdownAnchor"
			>
				{anchor || <Button>Toggle</Button>}
			</div>
			{show && (
				<div
					className={classNames["leDropdownMenuWrapper"]}
					style={{ width }}
					data-testid="leuxDropdownMenuWrapper"
				>
					<ul
						className={classNames["leDropdownMenu"]}
						{...menuProps}
						data-testid="leuxDropdownMenu"
						style={customMenuStyles}
					>
						{Children.map(childrenArr, (child) => {
							return cloneElement<DropdownItemProps>(child, { setShow, closeOnClick, trigger });
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

const DropdownItem: React.FC<DropdownItemProps> = ({
	children,
	noBreakWord = true,
	onClick,
	setShow,
	customClass,
	customStyles,
	closeOnClick = true,
	trigger,
	centered = true,
	disabled,
}: DropdownItemProps) => {
	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			leDropdownItem: `le-dropdown--item ${noBreakWord ? "le-dropdown--item-no-break" : ""}${
				centered ? " le-dropdown--item-centered" : ""
			}${disabled ? " le-dropdown--item-disabled" : ""} ${customClass || ""} `,
		}),
		[noBreakWord, centered, disabled, customClass]
	);

	const handleOnClick = (event?: ReactMouseEvent<HTMLLIElement, MouseEvent>) => {
		if (disabled) return;

		onClick && onClick(event);

		if (closeOnClick && trigger === "click" && setShow) {
			setShow(false);
		}
	};

	return (
		<li
			onClick={handleOnClick}
			className={classNames["leDropdownItem"]}
			style={customStyles}
			data-testid="leuxDropdownItem"
		>
			{children}
		</li>
	);
};

const DropdownSeparator: React.FC = () => (
	<li className="le-dropdown--separator" data-testid="leuxDropdownSeparator"></li>
);

const Dropdown = withGlobalConfig(DropdownComponent, "dropdown");

export { Dropdown, DropdownItem, DropdownSeparator };
