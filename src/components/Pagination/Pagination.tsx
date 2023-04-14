import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { PaginationProps } from "./Pagination.model";
import { Button } from "../Button";
import "./Pagination.scss";

const Pagination = ({
	currentPage,
	itemsPerPage,
	onPageChange,
	totalItems,
	totalPages,
	justifyContent = "flex-end",
	showPaginationLabel = ({ currentPage, totalItems, itemsPerPage }) =>
		`Showing ${currentPage * itemsPerPage} of ${totalItems}`,
	showPaginationButtons = {
		next: true,
		previous: true,
	},
	customStyles,
	customClass,
	size = "medium",
}: PaginationProps) => {
	const classNames: LeClassNames = {
		pagination: ({ customClass, size }) =>
			`le-pagination le-pagination--${size} ${customClass || ""}`,
		paginationNext: () => "le-pagination--next",
		paginationPrev: () => "le-pagination--prev",
		paginationLabel: () => "le-pagination--label",
		paginationButton: () => `le-pagination--button`,
		paginationButtonGroup: () => `le-pagination--button-group`,
	};

	const paginationButtons = useMemo(
		() => showPaginationButtons && Array<number>(totalPages || 0).fill(0),
		[showPaginationButtons]
	);

	if (!showPaginationButtons && !showPaginationLabel) return null;

	return (
		<div
			className={classNames["pagination"]({ customClass, size })}
			style={{ justifyContent, ...customStyles }}
		>
			{showPaginationLabel && (
				<span className={classNames["paginationLabel"]()}>
					{showPaginationLabel({ currentPage, totalItems, itemsPerPage })}
				</span>
			)}

			{showPaginationButtons && (
				<div className={classNames["paginationButtonGroup"]()}>
					{showPaginationButtons.previous && (
						<Button
							state={{ disabled: currentPage - 1 === 0 }}
							theme="default"
							variant="outlined"
							size={size}
							onClick={() => onPageChange && onPageChange(currentPage - 1)}
							customClass={classNames["paginationPrev"]()}
						>
							{"<"}
						</Button>
					)}

					{showPaginationButtons &&
						showPaginationButtons.all &&
						paginationButtons &&
						paginationButtons.map((_, index) => {
							const pageNumber = index + 1;

							return (
								<Button
									key={index}
									customClass={classNames["paginationButton"]()}
									variant={currentPage === pageNumber ? "filled" : "outlined"}
									theme={currentPage === pageNumber ? "primary" : "default"}
									size={size}
									onClick={() => onPageChange && onPageChange(pageNumber)}
								>
									{pageNumber}
								</Button>
							);
						})}

					{showPaginationButtons.next && (
						<Button
							state={{ disabled: currentPage + 1 > totalPages }}
							theme="default"
							variant="outlined"
							size={size}
							onClick={() => onPageChange && onPageChange(currentPage + 1)}
							customClass={classNames["paginationNext"]()}
						>
							{">"}
						</Button>
					)}
				</div>
			)}
		</div>
	);
};

export { Pagination };
