import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import {
	Box,
	Button,
	Table,
	TableSizes,
	TableSizesType,
	TableVariants,
	type TableProps,
	type TableFilter,
	Pagination,
	PaginationProps,
} from "@leux/ui";

import React, { useCallback, useEffect, useState } from "react";
import { attributes as tableAttr } from "./table.md";
import { TableHeaderRow } from "../../../../src/components/Table/TableHeader";
import axios from "axios";

const BaseTable = (props: TableProps) => (
	<Table.Root {...props}>
		<Table.Header>
			<TableHeaderRow>
				<Table.HeaderColumn>ID</Table.HeaderColumn>
				<Table.HeaderColumn>Name</Table.HeaderColumn>
			</TableHeaderRow>
		</Table.Header>
		<Table.Body>
			<Table.BodyRow>
				<Table.BodyCell>1</Table.BodyCell>
				<Table.BodyCell>John Doe</Table.BodyCell>
			</Table.BodyRow>
			<Table.BodyRow>
				<Table.BodyCell>1</Table.BodyCell>
				<Table.BodyCell>John Doe</Table.BodyCell>
			</Table.BodyRow>
		</Table.Body>
	</Table.Root>
);

const TableImportPreview = () => (
	<LeHighlighter
		code={`import { 
	Table
} from "@leux/ui";
 
<Table.Root /> // <table> 
<Table.Header /> // <thead>
<Table.HeaderRow /> // <tr> for a row in the table header
<Table.HeaderColumn /> // <th> for a column in the table header
<Table.Body /> // <tbody>
<Table.BodyRow /> // <tr> for a row in the table body
<Table.BodyCell /> // <td> for a cell in the table body
`}
		language="tsx"
	/>
);

const TableSizesPreview = () => {
	const [showCode, setShowCode] = useState(false);
	const [size, setSize] = useState<TableSizesType>(TableSizes.Medium);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="column" flexGap={12}>
					<Box flex flexDirection="row" flexGap={12}>
						<Button
							colorScheme={size === TableSizes.Small ? "primary" : "default"}
							onClick={() => setSize(TableSizes.Small)}
						>
							small
						</Button>
						<Button
							colorScheme={size === TableSizes.Medium ? "primary" : "default"}
							onClick={() => setSize(TableSizes.Medium)}
						>
							medium
						</Button>
						<Button
							colorScheme={size === TableSizes.Large ? "primary" : "default"}
							onClick={() => setSize(TableSizes.Large)}
						>
							large
						</Button>
					</Box>
					<BaseTable size={size} />
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`
import { Table } from "@leux/ui";

const Component = () => {
	return (
		<Table.Root size="${size}">
			<Table.Header>
				<TableHeaderRow>
					<Table.HeaderColumn>ID</Table.HeaderColumn>
					<Table.HeaderColumn>Name</Table.HeaderColumn>
				</TableHeaderRow>
			</Table.Header>
			<Table.Body>
				<Table.BodyRow>
					<Table.BodyCell>1</Table.BodyCell>
					<Table.BodyCell>John Doe</Table.BodyCell>
				</Table.BodyRow>
				<Table.BodyRow>
					<Table.BodyCell>2</Table.BodyCell>
					<Table.BodyCell>Jane Doe</Table.BodyCell>
				</Table.BodyRow>
			</Table.Body>
		</Table.Root>
	);
}
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableUsagePreview = () => {
	return (
		<LeHighlighter
			code={`
import { Table, TableHeaderColumnProps } from "@leux/ui";

const TableWithConfig = () => {
	const data: DataType[] = [
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "John Ary" },
	];
	const columns: TableHeaderColumnProps<DataType> = [
		{ header: "ID", columnKey: "id" },
		{ header: "Name", columnKey: "name" },
	]

	return (
		<Table.Root<DataType> data={data} columns={columns} keysOrder={["id", "name"]}>
	)
}
			`}
			language="tsx"
		/>
	);
};

const TableVariantsPreview = () => {
	const [showCode, setShowCode] = useState(false);
	const [variant, setVariant] = useState<TableVariants>("default");

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="column" flexGap={12}>
					<Box flex flexDirection="row" flexGap={12}>
						<Button
							colorScheme={variant === "default" ? "primary" : "default"}
							onClick={() => setVariant("default")}
						>
							default
						</Button>
						<Button
							colorScheme={variant === "bordered" ? "primary" : "default"}
							onClick={() => setVariant("bordered")}
						>
							bordered
						</Button>
					</Box>
					<BaseTable variant={variant} />
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`
import { Table } from "@leux/ui";

const Component = () => {
	return (
		<Table.Root variant="${variant}">
			<Table.Header>
				<TableHeaderRow>
					<Table.HeaderColumn>ID</Table.HeaderColumn>
					<Table.HeaderColumn>Name</Table.HeaderColumn>
				</TableHeaderRow>
			</Table.Header>
			<Table.Body>
				<Table.BodyRow>
					<Table.BodyCell>1</Table.BodyCell>
					<Table.BodyCell>John Doe</Table.BodyCell>
				</Table.BodyRow>
				<Table.BodyRow>
					<Table.BodyCell>2</Table.BodyCell>
					<Table.BodyCell>Jane Doe</Table.BodyCell>
				</Table.BodyRow>
			</Table.Body>
		</Table.Root>
	);
}
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableSortingPreview = () => {
	const [showCode, setShowCode] = useState(false);

	type DataType = {
		id: number;
		title: string;
	};

	const [data, setData] = useState<DataType[]>([]);
	const [pagination, setPagination] = useState<PaginationProps>({
		currentPage: 1,
		totalPages: 10,
		itemsPerPage: 5,
		totalItems: 50,
	});

	const getTodos = useCallback(
		async (filter?: TableFilter) => {
			try {
				const itemsPerPage = pagination.itemsPerPage;
				const offset = (pagination.currentPage - 1) * itemsPerPage;

				let url = `https://jsonplaceholder.typicode.com/todos?_start=${offset}&_limit=${itemsPerPage}`;
				if (filter && filter.sort) {
					url = `${url}&_sort=${filter.header}&_order=${filter.sort}`;
				}
				const response = await axios.get<DataType[]>(url);
				const { data } = response;

				if (data && data.length) {
					setData(data);
				}
			} catch (error) {
				console.error(error);
			}
		},
		[pagination.currentPage, pagination.itemsPerPage]
	);

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<LePreview showCode={showCode} setShowCode={setShowCode}>
			<Table.Root variant="bordered">
				<Table.Header>
					<Table.HeaderRow>
						<Table.HeaderColumn sortable columnKey={"id"}>
							ID
						</Table.HeaderColumn>
						<Table.HeaderColumn sortable columnKey={"title"}>
							Title
						</Table.HeaderColumn>
					</Table.HeaderRow>
				</Table.Header>
				<Table.Body>
					{data.map((item) => (
						<Table.BodyRow key={item.id}>
							<Table.BodyCell>{item.id}</Table.BodyCell>
							<Table.BodyCell>{item.title}</Table.BodyCell>
						</Table.BodyRow>
					))}
				</Table.Body>
			</Table.Root>
			<Pagination
				{...pagination}
				showPageSizeChanger
				onPageSizeChange={(size) => {
					const totalPages = Math.ceil(pagination.totalItems / size);
					setPagination({ ...pagination, itemsPerPage: size, currentPage: 1, totalPages });
				}}
				onPageChange={(page) => {
					setPagination({ ...pagination, currentPage: page });
				}}
			/>
		</LePreview>
	);
};

const TableApiTable = () => {
	const props: PropsMapping<TableProps> = {
		variant: {
			type: "TableVariants | 'bordered' | 'default'",
		},
		size: {
			type: "TableSizes | 'small' | 'medium' | 'large'",
		},

		width: {
			type: "React.CSSProperties['width']",
		},
		height: {
			type: "React.CSSProperties['height']",
		},
		state: {
			type: "TableState | { empty?: boolean; loading?: boolean; disabled?: boolean; spinnerProps?: SpinnerProps; emptyContent?: JSX.Element }",
		},
		children: {
			type: "React.ReactNode",
		},
		columns: {
			type: "TableColumn[] | { header: string; key: string; orderActive?: boolean; order?: TableOrder; orderFn?: (column: TableColumn) => void }[]",
		},
		rows: {
			type: "TableRows[] | { [key: string]: string | number | boolean | undefined }[]",
		},
		keysOrder: {
			type: "string[] | (keyof TableRows)[]",
		},
		rowProps: {
			type: "TableRowProps",
		},
		emptyValue: {
			type: "string",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customBodyClass: {
			type: "string",
		},
		customBodyStyles: {
			type: "React.CSSProperties",
		},
		customHeaderClass: {
			type: "string",
		},
		customHeaderStyles: {
			type: "React.CSSProperties",
		},
		customWrapperClass: {
			type: "string",
		},
		customWrapperStyles: {
			type: "React.CSSProperties",
		},
		sortFn: {
			type: "(column: TableSortFn) => void",
		},
		scrollable: {
			type: "boolean",
		},
		scrollHeight: {
			type: "React.CSSProperties['maxHeight']",
		},
		scrollWidth: {
			type: "React.CSSProperties['maxWidth']",
		},
		scrollWhen: {
			type: "() => boolean",
		},
	};

	return <LeApiTable props={props} />;
};

tableAttr["LeSourceButton"] = LeSourceButton;
tableAttr["LeHighlighter"] = LeHighlighter;
tableAttr["TableImportPreview"] = TableImportPreview;
tableAttr["TableSizesPreview"] = TableSizesPreview;
tableAttr["TableVariantsPreview"] = TableVariantsPreview;
tableAttr["TableUsagePreview"] = TableUsagePreview;
tableAttr["TableSortingPreview"] = TableSortingPreview;
tableAttr["TableApiTable"] = TableApiTable;

export { tableAttr };
