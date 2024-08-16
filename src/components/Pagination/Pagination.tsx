import React, { useMemo } from "react";
import { LeClassNames } from "../../types";
import { PaginationProps } from "./Pagination.model";
import { Button } from "../Button";
import "./Pagination.scss";

const Pagination: React.FC<PaginationProps>  = ({
	currentPage,
	itemsPerPage,
	onPageChange,
	totalItems,
	totalPages,
	justifyContent = "flex-end",
	showPaginationLabel = ({ currentPage, totalItems, itemsPerPage }) =>
		`Showing ${currentPage * itemsPerPage} of ${totalItems}`,
	paginationButtons = {
		next: true,
		previous: true,
	},
	customStyles,
	customClass,
	size = "medium",
	simplePagination = true,
}) => {
	const classNames: LeClassNames = {
		pagination: ({ customClass, size }) =>
			`le-pagination le-pagination--${size} ${customClass || ""}`,
		paginationNext: () => "le-pagination--button le-pagination--next",
		paginationPrev: () => "le-pagination--button le-pagination--prev",
		paginationLabel: () => "le-pagination--label",
		paginationButton: () => `le-pagination--button`,
		paginationButtonGroup: () => `le-pagination--button-group`,
	};

	const paginationButtonsArr = useMemo(
		() => paginationButtons && Array<number>(totalPages || 0).fill(0),
		[paginationButtons]
	);

	return (
		<div
			className={classNames["pagination"]({ customClass, size })}
			style={{ justifyContent, ...customStyles }}
			data-testid="leuxPagination"
		>
			{showPaginationLabel && (
				<span className={classNames["paginationLabel"]()}>
					{showPaginationLabel({ currentPage, totalItems, itemsPerPage })}
				</span>
			)}

			{paginationButtons && (
				<div className={classNames["paginationButtonGroup"]()}>
					{paginationButtons.previous && (
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

					{!simplePagination &&
						paginationButtons &&
						paginationButtonsArr.map((_, index) => {
							const pageNumber = index + 1;

							const ButtonTsx = (
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

							const { limit } = paginationButtons;

							if (!limit) {
								return ButtonTsx;
							}

							let rangeStart = 0 + currentPage;
							let rangeFinal = limit + currentPage - 1;
							const half = Math.floor(limit / 2);
							const end = totalPages;

							if (rangeStart + half <= limit) {
								rangeStart = 1 + half;
								rangeFinal = limit + half;
							}

							if (rangeFinal > end) {
								rangeFinal = end + half;
								rangeStart = end - limit + 1 + half;
							}

							if (pageNumber >= rangeStart - half && pageNumber <= rangeFinal - half) {
								return ButtonTsx;
							}
						})}

					{paginationButtons.next && (
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
