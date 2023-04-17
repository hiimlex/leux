import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { attributes as paginationAttr } from "./pagination.md";
import { Pagination, PaginationProps } from "../../../../src";
import { useState } from "react";

const PaginationImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Pagination, PaginationProps } from "leux";`} />
);

const PaginationConfigurationPreview = () => {
	const [paginationConfig, _setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
	});

	return (
		<>
			<LePreview>
				<Pagination {...paginationConfig}></Pagination>
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const [paginationConfig, _setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
	});

	return (
		<Pagination {...paginationConfig}></Pagination>
	)
};`}
			/>
		</>
	);
};

const PaginationActionPreview = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<>
			<LePreview>
				<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
	)
};`}
			/>
		</>
	);
};

const PaginationButtonsPreview = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		simplePagination: false,
		paginationButtons: {
			next: true,
			previous: true,
			limit: 5,
		},
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<>
			<LePreview direction="column">
				<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		simplePagination: false,
		paginationButtons: {
			next: true,
			previous: true,
			limit: 5,
		},
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<Pagination
			{...paginationConfig}
			showPaginationButtons={{
				next: true,
				previous: true,
				all: true,
			}}
			onPageChange={handleOnPageChange}
		/>
	);
};`}
			/>
		</>
	);
};

const PaginationLabelPreview = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		showPaginationLabel: ({ currentPage, itemsPerPage, totalItems }) =>
			`CurrentPage=${currentPage}, ItemsPerPage=${itemsPerPage}, TotalItems=${totalItems}`,
	});

	return (
		<>
			<LePreview>
				<Pagination {...paginationConfig} />
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		showPaginationLabel: ({ currentPage, itemsPerPage, totalItems }) =>
			\`CurrentPage=$\{currentPage}, ItemsPerPage=$\{itemsPerPage}, TotalItems=$\{totalItems}\`,
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<Pagination
			{...paginationConfig}
			showPaginationButtons={{
				next: true,
				previous: true,
				all: true,
			}}
			onPageChange={handleOnPageChange}
		/>
	);
};`}
			/>
		</>
	);
};

paginationAttr["LeSourceButton"] = LeSourceButton;
paginationAttr["LeHighlighter"] = LeHighlighter;
paginationAttr["PaginationImportPreview"] = PaginationImportPreview;
paginationAttr["PaginationConfigurationPreview"] = PaginationConfigurationPreview;
paginationAttr["PaginationActionPreview"] = PaginationActionPreview;
paginationAttr["PaginationButtonsPreview"] = PaginationButtonsPreview;
paginationAttr["PaginationLabelPreview"] = PaginationLabelPreview;

export { paginationAttr };
