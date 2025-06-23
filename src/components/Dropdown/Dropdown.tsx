import { autoPlacement, autoUpdate, offset, useFloating } from "@floating-ui/react-dom";
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
	placement = "bottom",
	clickOutside = true,
	closeOnClick = true,
	trigger = "click",
	width,
	customWrapperStyles,
	customWrapperClass,
	customMenuClass,
	customMenuStyles,
	strategy = "fixed",
	offset: offsetValue = 12,
	disabled = false,
}) => {
	const [show, setShow] = useState(false);

	const randomId = Math.random().toString(36).substr(2, 9);
	const id = useMemo(() => (menuId ? menuId : randomId), [menuId]);

	const { refs, floatingStyles } = useFloating<HTMLDivElement>({
		strategy: strategy,
		placement: placement,
		middleware: [offset(() => offsetValue, [offsetValue]), autoPlacement()],
		whileElementsMounted: autoUpdate,
	});

	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			leDropdownMenu: `le-dropdown le-dropdown--${variant} le-dropdown--${size} le-dropdown--${trigger} ${
				customMenuClass ? customMenuClass : ""
			}`,
			leDropdownMenuWrapper: `le-dropdown--menu-wrapper le-dropdown--menu-wrapper-${trigger} ${
				customWrapperClass ? customWrapperClass : ""
			}`,
			leDropdownWrapper: `le-dropdown--wrapper le-dropdown--wrapper-${trigger}`,
			leDropdownAnchor: "le-dropdown--anchor",
		}),
		[customWrapperClass, size, trigger, variant, trigger]
	);

	const handleToggle = () => setShow(!show);

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

	const childrenArr = Children.toArray(children) as React.ReactElement<DropdownItemProps>[];

	const disablePointerEvents: React.CSSProperties = useMemo(
		() => (disabled ? { pointerEvents: "none" } : {}),
		[disabled]
	);

	return (
		<div
			id={id}
			className={classNames["leDropdownWrapper"]}
			style={{ ...customWrapperStyles, ...disablePointerEvents }}
			data-testid="leuxDropdownWrapper"
		>
			<div
				className={classNames["leDropdownAnchor"]}
				onClick={handleToggle}
				data-testid="leuxDropdownAnchor"
				ref={refs.setReference}
			>
				{anchor || <Button>Toggle</Button>}
			</div>
			{show && (
				<div
					className={classNames["leDropdownMenuWrapper"]}
					style={{ width, ...floatingStyles }}
					data-testid="leuxDropdownMenuWrapper"
					ref={refs.setFloating}
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

const Root = withGlobalConfig(DropdownComponent, "dropdown");

const Dropdown = {
	Root,
	Item: DropdownItem,
	Separator: DropdownSeparator,
};

export { Dropdown };
