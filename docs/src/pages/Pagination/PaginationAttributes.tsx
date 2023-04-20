import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { attributes as paginationAttr } from "./pagination.md";
import { Pagination, PaginationProps } from "../../../../src";
import { useState } from "react";

const PaginationImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Pagination, PaginationProps } from "leux";`} />
);

const PaginationConfigurationPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const [paginationConfig, _setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
	});

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Pagination {...paginationConfig}></Pagination>
			</LePreview>
			{showCode && (
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
			)}
		</>
	);
};

const PaginationActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
			</LePreview>
			{showCode && (
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
			)}
		</>
	);
};

const PaginationButtonsPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
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
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
			</LePreview>
			{showCode && (
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
			)}
		</>
	);
};

const PaginationLabelPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		showPaginationLabel: ({ currentPage, itemsPerPage, totalItems }) =>
			`CurrentPage=${currentPage}, ItemsPerPage=${itemsPerPage}, TotalItems=${totalItems}`,
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Pagination {...paginationConfig} onPageChange={handleOnPageChange} />
			</LePreview>
			{showCode && (
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
			)}
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
