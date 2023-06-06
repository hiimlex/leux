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
	position = "bottomLeft",
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
		}
	}, [trigger]);

	const childrenArr = Children.toArray(children);

	return (
		<div
			id={randomId}
			className={classNames["leDropdownWrapper"]()}
			style={{ ...customWrapperStyles }}
			data-testid="leuxDropdownWrapper"
		>
			<div
				className={classNames["leDropdownAnchor"]()}
				onClick={handleClickTrigger}
				data-testid="leuxDropdownAnchor"
			>
				{anchor ? anchor : <Button>Toggle</Button>}
			</div>
			{show && (
				<div
					className={classNames["leDropdownMenuWrapper"]()}
					style={{ width }}
					data-testid="leuxDropdownMenuWrapper"
				>
					<ul
						className={classNames["leDropdownMenu"]()}
						{...menuProps}
						data-testid="leuxDropdownMenu"
					>
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
	disabled,
}: DropdownItemProps) => {
	const classNames: LeClassNames = {
		leDropdownItem: () =>
			`le-dropdown--item ${noBreakWord ? "le-dropdown--item-no-break" : ""}${customClass || ""}${
				centered ? " le-dropdown--item-centered" : ""
			}${disabled ? " le-dropdown--item-disabled" : ""}`,
	};

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
			className={classNames["leDropdownItem"]()}
			style={customStyles}
			data-testid="leuxDropdownItem"
		>
			{children}
		</li>
	);
};

const DropdownSeparator = () => (
	<li className="le-dropdown--separator" data-testid="leuxDropdownSeparator"></li>
);

export { Dropdown, DropdownItem, DropdownSeparator };
