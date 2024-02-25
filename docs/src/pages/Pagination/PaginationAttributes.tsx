import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { attributes as paginationAttr } from "./pagination.md";
import { Pagination, PaginationProps } from "../../../../src";
import { useState } from "react";

const PaginationImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Pagination, PaginationProps } from "leux";`} />
);

const PaginationActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

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
	const [showCode, setShowCode] = useState<boolean>(false);
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
	const [showCode, setShowCode] = useState<boolean>(false);

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

const PaginationSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

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
			<LePreview direction="column">
				<Pagination
					{...paginationConfig}
					size="small"
					onPageChange={handleOnPageChange}
				></Pagination>
				<Pagination
					{...paginationConfig}
					size="medium"
					onPageChange={handleOnPageChange}
				></Pagination>
				<Pagination
					{...paginationConfig}
					size="large"
					onPageChange={handleOnPageChange}
				></Pagination>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		
		</>`}
				/>
			)}
		</>
	);
};

const PaginationApiTable = () => {
	const props: PropsMapping<PaginationProps> = {
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		currentPage: {
			type: "number",
		},
		itemsPerPage: {
			type: "number",
		},
		totalItems: {
			type: "number",
		},
		totalPages: {
			type: "number",
		},
		simplePagination: {
			type: "boolean",
		},
		showPaginationLabel: {
			type: "(props: {currentPage: number, itemsPerPage: number, totalItems: number}) => string",
			defaultValue: `({ currentPage, totalItems, itemsPerPage }) =>
			\`Showing \${currentPage * itemsPerPage} of \${totalItems}\`,`,
		},
		paginationButtons: {
			type: "{next: boolean, previous: boolean, limit: number}",
			defaultValue: `{
				next: true,
				previous: true,
			}`,
		},
		justifyContent: {
			type: "React.CSSProperties['justifyContent']",
			defaultValue: "flex-end",
		},
		onPageChange: {
			type: "(page: number) => void",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

paginationAttr["LeSourceButton"] = LeSourceButton;
paginationAttr["LeHighlighter"] = LeHighlighter;
paginationAttr["PaginationImportPreview"] = PaginationImportPreview;
paginationAttr["PaginationActionPreview"] = PaginationActionPreview;
paginationAttr["PaginationButtonsPreview"] = PaginationButtonsPreview;
paginationAttr["PaginationLabelPreview"] = PaginationLabelPreview;
paginationAttr["PaginationSizePreview"] = PaginationSizePreview;
paginationAttr["PaginationApiTable"] = PaginationApiTable;

export { paginationAttr };
