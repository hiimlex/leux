import React, {
	MouseEvent as ReactMouseEvent,
	cloneElement,
	useEffect,
	useState,
	Children,
} from "react";
import { LeClassNames } from "../../types";
import { DropdownItemProps, DropdownProps } from "./Dropdown.model";
import "./Dropdown.scss";
import { Button } from "../Button";

const Dropdown = ({
	anchor,
	menuProps,
	variant = "filled",
	size = "medium",
	children,
	position = "bl",
	clickOutside = true,
	closeOnClick = true,
	trigger = "click",
	width,
	customWrapperStyles,
	customWrapperClass,
}: DropdownProps) => {
	const [show, setShow] = useState(false);

	const randomId = Math.random().toString(36).substr(2, 9);

	const classNames: LeClassNames = {
		leDropdownMenu: () =>
			`le-dropdown le-dropdown--${variant} le-dropdown--${size} ${
				customWrapperClass ? customWrapperClass : ""
			} le-dropdown--${position} le-dropdown--${trigger}`,
		leDropdownMenuWrapper: () =>
			`le-dropdown--menu-wrapper le-dropdown--menu-wrapper-${position} le-dropdown--menu-wrapper-${trigger}`,
		leDropdownWrapper: () => `le-dropdown--wrapper le-dropdown--wrapper-${trigger}`,
		leDropdownAnchor: () => "le-dropdown--anchor",
	};

	const handleToogle = () => setShow(!show);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (show && clickOutside && trigger === "click") {
				const target = e.target as HTMLElement;

				const hasAncestor = target.closest(".le-dropdown--wrapper");

				if (hasAncestor && hasAncestor.id === randomId) return;

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
			clickOutside = false;
		}
	}, [trigger]);

	const childrenArr = Children.toArray(children);

	return (
		<div
			id={randomId}
			className={classNames["leDropdownWrapper"]()}
			style={{ ...customWrapperStyles }}
		>
			<div className={classNames["leDropdownAnchor"]()} onClick={handleClickTrigger}>
				{anchor ? anchor : <Button>Toggle</Button>}
			</div>
			{show && (
				<div className={classNames["leDropdownMenuWrapper"]()} style={{ width }}>
					<ul className={classNames["leDropdownMenu"]()} {...menuProps}>
						{Children.map(childrenArr, (child) => {
							return cloneElement(child as React.ReactElement, { setShow, closeOnClick, trigger });
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

const DropdownItem = ({
	children,
	noBreakWord = true,
	onClick,
	setShow,
	customClass,
	customStyles,
	closeOnClick = true,
	trigger,
	centered = true,
}: DropdownItemProps) => {
	const classNames: LeClassNames = {
		leDropdownItem: () =>
			`le-dropdown--item ${noBreakWord ? "le-dropdown--item-no-break" : ""}${customClass || ""}${
				centered ? " le-dropdown--item-centered" : ""
			}`,
	};

	const handleOnClick = (event?: ReactMouseEvent<HTMLLIElement, MouseEvent>) => {
		onClick && onClick(event);

		if (closeOnClick && trigger === "click" && setShow) {
			setShow(false);
		}
	};

	return (
		<li onClick={handleOnClick} className={classNames["leDropdownItem"]()} style={customStyles}>
			{children}
		</li>
	);
};

const DropdownSeparator = () => <li className="le-dropdown--separator"></li>;

export { Dropdown, DropdownItem, DropdownSeparator };
