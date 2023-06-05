import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { SkeletonProps } from "./Skeleton.model";

import "./Skeleton.scss";

const Skeleton = ({
	children,
	size = "medium",
	width = "100%",
	rows = 2,
	customClass = "",
	customStyles,
	active = false,
	show = true,
	variant = "paragraph",
}: SkeletonProps) => {
	const classNames: LeClassNames = {
		leSkeleton: () =>
			`le-skeleton le-skeleton--${size} le-skeleton--${variant}${
				active ? " le-skeleton--active" : ""
			}${customClass ? ` ${customClass}` : ""}`,
		leSkeletonRow: () =>
			`le-skeleton--row le-skeleton--row-${variant} le-skeleton--row-${variant}-${size}${
				active ? " le-skeleton--row-active" : ""
			}`,
	};

	const rowsArr = useMemo(() => [...Array(rows).keys()], [rows]);

	if (!show) {
		return <>{children}</>;
	}

	const SkeletonRowJSX = () => (
		<div data-testid="leuxSkeletonRow" className={classNames["leSkeletonRow"]()} />
	);

	return (
		<div
			className={classNames["leSkeleton"]()}
			style={{ ...customStyles, width }}
			data-testid="leuxSkeleton"
		>
			{variant === "paragraph" && rowsArr.map((_, index) => <SkeletonRowJSX key={index} />)}
			{variant === "round" && <SkeletonRowJSX />}
			{variant === "rect" && <SkeletonRowJSX />}
		</div>
	);
};

export { Skeleton };
