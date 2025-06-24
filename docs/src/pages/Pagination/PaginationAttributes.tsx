import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { attributes as paginationAttr } from "./pagination.md";
import { PageSizeChangerProps, Pagination, PaginationProps } from "@leux/ui";
import { useState } from "react";
import React from "react";

const PaginationImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Pagination, PaginationProps } from "@leux/ui";`} />
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
		setPaginationConfig((curr) => ({ ...curr, currentPage: page }));
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
		setPaginationConfig(curr =>({ ...curr, currentPage: page }));
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

const PaginationSizeChangerPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [paginationConfig, setPaginationConfig] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		totalItems: 100,
		totalPages: 10,
		simplePagination: false,
		showPageSizeChanger: true,
		paginationButtons: {
			next: true,
			previous: true,
			limit: 5,
		},
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig({ ...paginationConfig, currentPage: page });
	};

	const handleOnPageSizeChange = (itemsPerPage: number) => {
		const totalPages = Math.ceil(paginationConfig.totalItems / itemsPerPage);
		setPaginationConfig((curr) => ({ ...curr, itemsPerPage, totalPages, currentPage: 1 }));
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Pagination
					{...paginationConfig}
					onPageChange={handleOnPageChange}
					onPageSizeChange={handleOnPageSizeChange}
				/>
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
		showPageSizeChange: true,
	});

	const handleOnPageChange = (page: number) => {
		setPaginationConfig((curr) => ({ ...curr, currentPage: page }));
	};

	const handleOnPageSizeChange = (itemsPerPage: number) => {
		const totalPages = Math.ceil(paginationConfig.totalItems / itemsPerPage);
		setPaginationConfig((curr) => ({ ...curr, itemsPerPage, totalPages, currentPage: 1 }));
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
			onPageSizeChange={handleOnPageSizeChange}
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
			defaultValue: `"0-10 of 100"`,
		},
		paginationButtons: {
			type: "{next: boolean, previous: boolean, limit: number}",
		},
		justifyContent: {
			type: "React.CSSProperties['justifyContent']",
			defaultValue: "flex-end",
		},
		onPageChange: {
			type: "(page: number) => void",
		},
		showPageSizeChanger: {
			type: "boolean",
		},
		pageSizeChangerProps: {
			type: "PageSizeChangerProps",
		},
		onPageSizeChange: {
			type: "(itemsPerPage: number) => void",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customWrapperClass: {
			type: "string",
		},
		customWrapperStyles: {
			type: "React.CSSProperties",
		},
		disableNext: {
			type: "boolean | () => boolean",
			defaultValue: "false",
		},
		disablePrevious: {
			type: "boolean | () => boolean",
			defaultValue: "false",
		},
	};

	return <LeApiTable props={props} />;
};

const PageSizeChangerApiTable = () => {
	const props: PropsMapping<PageSizeChangerProps> = {
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		itemsPerPage: {
			type: "number",
		},
		onPageSizeChange: {
			type: "(itemsPerPage: number) => void",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		menuProps: {
			type: "DropdownProps",
		},
		options: {
			type: "interface PageSizeChangerOptions {value: number;label: string | number;}",
		},
		pageSizeChangerLabel: {
			type: "(itemsPerPage: number) => string",
			defaultValue: `"10 per page"`,
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
paginationAttr["PaginationSizeChangerPreview"] = PaginationSizeChangerPreview;
paginationAttr["PaginationApiTable"] = PaginationApiTable;
paginationAttr["PageSizeChangerApiTable"] = PageSizeChangerApiTable;

export { paginationAttr };
