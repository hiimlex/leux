import { PaginationLabel } from "../components";

const defaultPaginationLabel: PaginationLabel = ({ currentPage, totalItems, itemsPerPage }) => {
	const initialIndexOgPage = currentPage - 1 >= 0 ? (currentPage - 1) * itemsPerPage + 1 : 1;
	let finalIndexOfPage = currentPage * itemsPerPage;

	if (finalIndexOfPage > totalItems) {
		finalIndexOfPage = totalItems;
	}

	return `<strong>${initialIndexOgPage} - ${finalIndexOfPage}</strong> of <strong>${totalItems}<strong/>`;
};

export { defaultPaginationLabel };
