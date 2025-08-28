import React, { useMemo } from "react";
import { LeClassNamesSimple } from "../../../types";
import { Dropdown } from "../../Dropdown";
import {
	PageSizeChangerLabel,
	PageSizeChangerOptions,
	PageSizeChangerProps,
} from "../Pagination.model";
import "./PageSizeChanger.scss";

const defaultOptions: PageSizeChangerOptions[] = [
	{
		label: "5",
		value: 5,
	},
	{
		label: "10",
		value: 10,
	},
	{
		label: "20",
		value: 20,
	},
	{
		label: "50",
		value: 50,
	},
	{
		label: "100",
		value: 100,
	},
];

const defaultPageSizeChangerLabel: PageSizeChangerLabel = (itemsPerPage) =>
	`<strong>${itemsPerPage}</strong> per page`;

const PageSizeChanger: React.FC<PageSizeChangerProps> = ({
	itemsPerPage,
	onPageSizeChange,
	options = defaultOptions,
	pageSizeChangerLabel = defaultPageSizeChangerLabel,
	size,
	customClass,
	customStyles,
}) => {
	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			PageSizeChanger: `le-psc le-psc--${size} ${customClass || ""}`,
		}),
		[size, customClass]
	);
	const PageSizeChangerJSX = (
		<button
			className={classNames["PageSizeChanger"]}
			dangerouslySetInnerHTML={{
				__html: pageSizeChangerLabel(itemsPerPage),
			}}
			style={customStyles}
			data-testid="leuxPageSizeChanger"
		>
			{}
		</button>
	);

	return (
		<Dropdown.Root
			behavior="none"
			variant="outlined"
			placement="top"
			strategy="absolute"
			anchor={PageSizeChangerJSX}
		>
			{options.map((option, index) => (
				<Dropdown.Item
					key={index}
					onClick={() => onPageSizeChange && onPageSizeChange(option.value)}
				>
					{option.label}
				</Dropdown.Item>
			))}
		</Dropdown.Root>
	);
};

export { PageSizeChanger, defaultPageSizeChangerLabel };
