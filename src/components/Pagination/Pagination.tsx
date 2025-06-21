import React, { useMemo } from "react";
import { LeClassNames, LeClassNamesSimple } from "../../types";
import { PageSizeChanger } from "./PageSizeChanger";
import { PaginationProps } from "./Pagination.model";
import "./Pagination.scss";
import { defaultPaginationLabel } from "../../utils";

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	itemsPerPage,
	totalItems,
	totalPages,
	paginationButtons = {
		next: true,
		previous: true,
	},
	customStyles,
	customClass,
	size = "medium",
	simplePagination = true,
	justifyContent = "flex-end",
	onPageChange,
	onPageSizeChange,
	showPaginationLabel = defaultPaginationLabel,
	pageSizeChangerProps,
	showPageSizeChanger,
	customWrapperClass,
	customWrapperStyles,
	disableNext,
	disablePrevious,
}) => {
	const classNames: LeClassNamesSimple = useMemo(
		() => ({
			pagination: `le-pagination le-pagination--${size} ${customClass || ""}`,
			paginationNext: `le-pagination--button le-pagination--button-${size} le-pagination--next`,
			paginationPrev: `le-pagination--button le-pagination--button-${size} le-pagination--prev`,
			paginationLabel: "le-pagination--label",
			paginationButton: `le-pagination--button le-pagination--button-${size}`,
			paginationButtonGroup: `le-pagination--button-group`,
			paginationWrapper: `le-pagination--wrapper ${customWrapperClass || ""}`,
			horizontalHr: "le-pagination--hr",
		}),
		[size, customClass, customWrapperClass]
	);
	const buttonsClassNames: LeClassNames = {
		paginationNext: ({ disabled }) =>
			`le-pagination--button le-pagination--button-${size} le-pagination--next ${
				disabled ? "le-pagination--button-disabled" : ""
			}`,
		paginationPrev: ({ disabled }) =>
			`le-pagination--button le-pagination--button-${size} le-pagination--prev ${
				disabled ? "le-pagination--button-disabled" : ""
			}`,
		paginationButton: ({ active }) =>
			`le-pagination--button le-pagination--button-${size} ${
				active ? "le-pagination--button-active" : ""
			}`,
	};

	const paginationButtonsArr = useMemo(
		() => paginationButtons && Array<number>(totalPages || 0).fill(0),
		[paginationButtons, totalPages]
	);

	const paginationLabel = useMemo(
		() => showPaginationLabel({ currentPage, totalItems, itemsPerPage }),
		[showPaginationLabel, currentPage, totalItems, itemsPerPage]
	);

	return (
		<div className={classNames["paginationWrapper"]} style={customWrapperStyles}>
			{showPageSizeChanger && (
				<PageSizeChanger
					{...pageSizeChangerProps}
					itemsPerPage={itemsPerPage}
					onPageSizeChange={onPageSizeChange}
					size={size}
				/>
			)}

			<div
				className={classNames["pagination"]}
				style={{ justifyContent, ...customStyles }}
				data-testid="leuxPagination"
			>
				{!!showPaginationLabel && (
					<span
						className={classNames["paginationLabel"]}
						dangerouslySetInnerHTML={{
							__html: paginationLabel,
						}}
					></span>
				)}

				<div className={classNames["horizontalHr"]}></div>

				{paginationButtons && (
					<div className={classNames["paginationButtonGroup"]}>
						{paginationButtons.previous && (
							<button
								disabled={disablePrevious ? disablePrevious() : currentPage - 1 <= 0}
								onClick={() => onPageChange && onPageChange(currentPage - 1)}
								className={buttonsClassNames["paginationPrev"]({
									disabled: disablePrevious ? disablePrevious() : currentPage - 1 <= 0,
								})}
							>
								<svg
									width="8"
									height="12"
									viewBox="0 0 8 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" />
								</svg>
							</button>
						)}

						{!simplePagination &&
							paginationButtons &&
							paginationButtonsArr.map((_, index) => {
								const pageNumber = index + 1;

								const ButtonTsx = (
									<button
										key={index}
										onClick={() => onPageChange && onPageChange(pageNumber)}
										className={buttonsClassNames["paginationButton"]({
											active: currentPage === pageNumber,
										})}
									>
										{pageNumber}
									</button>
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
							<button
								disabled={disableNext ? disableNext() : currentPage + 1 > totalPages}
								onClick={() => onPageChange && onPageChange(currentPage + 1)}
								className={buttonsClassNames["paginationNext"]({
									disabled: disableNext ? disableNext() : currentPage + 1 > totalPages,
								})}
							>
								<svg
									width="8"
									height="12"
									viewBox="0 0 8 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" />
								</svg>
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export { defaultPaginationLabel, Pagination };
