import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
	Box,
	Button,
	Pagination,
	PaginationProps,
	Table,
	TableBody,
	TableHeader,
} from "../../../../src";
import {
	TableFilter,
	TableProps,
	TableSizes,
	TableSortFn,
	TableState,
	TableVariants,
} from "../../../../src/components/Table/Table.model";
import { attributes as tableAttr } from "./table.md";

const TableImportPreview = () => (
	<LeHighlighter
		code={`import { 
	Table,
	TableProps,
	TableBody,
	TableBodyProps
	TableHeader,
	TableHeaderProps,
	TablePagination,
	TablePaginationProps,
} from "leux";`}
		language="tsx"
	/>
);

const TableConfigurationPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [tableConfig, _] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Table {...tableConfig} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [tableConfig, _] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});
	
	return (
		<Table {...tableConfig} />
	)
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableChildrenPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Table>
					<TableHeader>
						<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
							<th>Name</th>
							<th>Age</th>
							<th>Address</th>
							<th>Birthday</th>
						</tr>
					</TableHeader>
					<TableBody>
						<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
							<td>John</td>
							<td>20</td>
							<td>New York</td>
							<td>01/01/2002</td>
						</tr>
						<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
							<td>Peter</td>
							<td>25</td>
							<td>London</td>
							<td>01/01/1992</td>
						</tr>
						<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
							<td>Math</td>
							<td>30</td>
							<td>Paris</td>
							<td>01/01/1982</td>
						</tr>
					</TableBody>
				</Table>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Table>
		<TableHeader>
			<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
				<th>Name</th>
				<th>Age</th>
				<th>Address</th>
				<th>Birthday</th>
			</tr>
		</TableHeader>
		<TableBody>
			<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
				<td>John</td>
				<td>20</td>
				<td>New York</td>
				<td>01/01/2002</td>
			</tr>
			<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
				<td>Peter</td>
				<td>25</td>
				<td>London</td>
				<td>01/01/1992</td>
			</tr>
			<tr style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
				<td>Math</td>
				<td>30</td>
				<td>Paris</td>
				<td>01/01/1982</td>
			</tr>
		</TableBody>
	</Table>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});

	const changeVariant = (variant: TableVariants) => {
		setTableConfig((curr) => ({ ...curr, variant }));
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
					<Button
						theme={tableConfig.variant === "default" ? "primary" : "default"}
						onClick={() => changeVariant("default")}
						customStyles={{ marginRight: 12 }}
					>
						Default
					</Button>
					<Button
						theme={tableConfig.variant === "bordered" ? "primary" : "default"}
						onClick={() => changeVariant("bordered")}
					>
						Bordered
					</Button>
				</div>
				<Table {...tableConfig} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});

	const changeVariant = (variant: TableVariants) => {
		setTableConfig((curr) => ({ ...curr, variant }));
	};

	return (
		<>
			<Button
				theme={tableConfig.variant === "default" ? "primary" : "default"}
				onClick={() => changeVariant("default")}
				customStyles={{ marginRight: 12 }}
			>
				Default
			</Button>
			<Button
				theme={tableConfig.variant === "bordered" ? "primary" : "default"}
				onClick={() => changeVariant("bordered")}
			>
				Bordered
			</Button>
			<Table {...tableConfig} />
		</>
	);
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});

	const changeSize = (size: TableSizes) => {
		setTableConfig((curr) => ({ ...curr, size }));
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
					<Button
						theme={tableConfig.size === "small" ? "primary" : "default"}
						onClick={() => changeSize("small")}
						customStyles={{ marginRight: 12 }}
						size="small"
					>
						Small
					</Button>
					<Button
						theme={tableConfig.size === "medium" ? "primary" : "default"}
						onClick={() => changeSize("medium")}
						customStyles={{ marginRight: 12 }}
						size="medium"
					>
						Medium
					</Button>
					<Button
						theme={tableConfig.size === "large" ? "primary" : "default"}
						onClick={() => changeSize("large")}
						size="large"
					>
						Large
					</Button>
				</div>
				<Table {...tableConfig} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});
	
	const changeSize = (size: TableSizes) => {
		setTableConfig((curr) => ({ ...curr, size }));
	};

	return (
		<>
			<Button
				theme={tableConfig.size === "small" ? "primary" : "default"}
				onClick={() => changeSize("small")}
				customStyles={{ marginRight: 12 }}
			>
				Small
			</Button>
			<Button
				theme={tableConfig.size === "medium" ? "primary" : "default"}
				onClick={() => changeSize("medium")}
				customStyles={{ marginRight: 12 }}
			>
				Medium
			</Button>
			<Button
				theme={tableConfig.size === "large" ? "primary" : "default"}
				onClick={() => changeSize("large")}
			>
				Large
			</Button>
			<Table {...tableConfig} />
		</>
	);
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableFiltersPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const sortFn: TableSortFn = (tableFilter) => {
		getTodos(tableFilter);
	};

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{
				header: "#ID",
				key: "id",
				sortable: true,
			},
			{ header: "User ID", key: "userId", sortable: true },
			{ header: "Title", key: "title", sortable: true },
			{ header: "Completed", key: "completedString" },
		],
		rows: [],
		gridTemplateColumns: "repeat(2, 1fr) 2fr 1fr",
		variant: "default",
		size: "medium",
		sortFn,
	});

	const getTodos = useCallback(async (filter?: TableFilter) => {
		try {
			let url = `https://jsonplaceholder.typicode.com/todos?_limit=10`;
			if (filter && filter.sort) {
				url = `${url}&_sort=${filter.header}&_order=${filter.sort}`;
			}
			const response = await axios.get<
				{
					userId: number;
					id: number;
					title: string;
					completed: boolean;
				}[]
			>(url);
			const { data } = response;
			if (data && data.length) {
				const newData = data.map((item) => ({
					...item,
					completedString: item.completed ? "Yes" : "No",
				}));
				setTableConfig((curr) => ({ ...curr, rows: newData }));
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Table {...tableConfig} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`import axios from "axios";

const Component = () => {
	const sortFn: TableSortFn = (tableFilter) => {
		getTodos(tableFilter);
	};

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{
				header: "#ID",
				key: "id",
				order: "desc",
				orderFn,
			},
			{ header: "User ID", key: "userId", order: "desc", orderFn },
			{ header: "Title", key: "title", order: "desc", orderFn },
			{ header: "Completed", key: "completedString" },
		],
		rows: [],
		gridTemplateColumns: "repeat(2, 1fr) 2fr 1fr",
		variant: "default",
		size: "medium",
		sortFn,
	});

	const getTodos = useCallback(async (filter?: TableFilter) => {
		try {
			let url = \`https://jsonplaceholder.typicode.com/todos?_limit=10\`;
			let { columns } = tableConfig;

			if (filter && filter.sort) {
				url = \`$\{url}&_sort=$\{filter.header}&_order=$\{filter.order}\`;
			}

			const response = await axios.get<
				{
					userId: number;
					id: number;
					title: string;
					completed: boolean;
				}[]
			>(url);

			const { data } = response;

			if (data && data.length) {
				const newData = data.map((item) => ({
					...item,
					completedString: item.completed ? "Yes" : "No",
				}));

				setTableConfig((curr) => ({ ...curr, rows: newData, columns }));
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		getTodos();
	}, []);

	return <Table {...tableConfig} />
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TablePaginationPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "#ID", key: "id" },
			{ header: "User ID", key: "userId" },
			{ header: "Title", key: "title" },
			{ header: "Completed", key: "completedString" },
		],
		rows: [],
		gridTemplateColumns: "repeat(2, 1fr) 2fr 1fr",
		variant: "default",
		size: "medium",
		customBodyStyles: {
			maxHeight: "420px",
			overflowY: "auto",
		},
	});

	const [pagination, setPagination] = useState<PaginationProps>({
		currentPage: 1,
		itemsPerPage: 10,
		onPageChange: (page) => {
			setTableConfig((curr) => ({ ...curr, state: { ...curr.state, loading: true } }));
			getTodos(page);
		},
		totalItems: 0,
		totalPages: 0,
		paginationButtons: {
			next: true,
			previous: true,
		},
		justifyContent: "space-between",
		showPaginationLabel: ({ currentPage, itemsPerPage, totalItems }) =>
			`Showing ${currentPage * itemsPerPage - itemsPerPage + 1}-${
				currentPage * itemsPerPage
			} of ${totalItems} todos`,
	});

	const getTodos = useCallback(async (page?: number) => {
		try {
			if (pagination) {
				if (page) {
					setPagination((curr) => ({ ...curr, currentPage: page }));
				}

				const { itemsPerPage } = pagination;

				const response = await axios.get<
					{
						userId: number;
						id: number;
						title: string;
						completed: boolean;
					}[]
				>(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${itemsPerPage}`);

				const { data, headers } = response;

				if (headers) {
					const totalItems = Number(headers["x-total-count"] || 0);

					if (totalItems) {
						setPagination((curr) => ({
							...curr,
							totalItems,
							totalPages: Math.ceil(totalItems / itemsPerPage),
						}));
					}
				}

				if (data && data.length) {
					const newData = data.map((item) => ({
						...item,
						completedString: item.completed ? "Yes" : "No",
					}));

					setTableConfig((curr) => ({
						...curr,
						rows: newData,
						state: { ...curr.state, loading: false },
					}));
				}
			}
		} catch (error) {
			console.error(error);

			setTableConfig((curr) => ({
				...curr,
				state: { ...curr.state, loading: true },
			}));
		}
	}, []);

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="column" width="100%">
					<Table {...tableConfig} />
					<Pagination {...pagination} />
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`import axios from "axios";
				
const Component = () => {
	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{ header: "#ID", key: "id" },
			{ header: "User ID", key: "userId" },
			{ header: "Title", key: "title" },
			{ header: "Completed", key: "completedString" },
		],
		rows: [],
		gridTemplateColumns: "repeat(2, 1fr) 2fr 1fr",
		variant: "default",
		size: "medium",
		pagination: {
			currentPage: 1,
			itemsPerPage: 10,
			onPageChange: (page) => {
				getTodos(page);
			},
			totalItems: 0,
			totalPages: 0,
			showPaginationButtons: {
				next: true,
				previous: true,
			},
			justifyContent: "space-between",
			showPaginationLabel: ({ currentPage, itemsPerPage, totalItems }) =>
				\`Showing $\{currentPage * itemsPerPage - itemsPerPage + 1}-$\{
					currentPage * itemsPerPage
				} of $\{totalItems} todos\`,
		},
		customBodyStyles: {
			maxHeight: "420px",
			overflow: "hidden",
			overflowY: "auto",
		},
	});

	const getTodos = useCallback(async (page?: number) => {
		try {
			let { pagination } = tableConfig;

			if (pagination) {
				if (page) {
					pagination.currentPage = page;
				}

				const { currentPage, itemsPerPage } = pagination;

				const response = await axios.get<
					{
						userId: number;
						id: number;
						title: string;
						completed: boolean;
					}[]
				>(\`https://jsonplaceholder.typicode.com/todos?_page=$\{currentPage}&_limit=$\{itemsPerPage}\`);

				const { data, headers } = response;

				if (headers) {
					const totalItems = Number(headers["x-total-count"] || 0);

					if (totalItems) {
						pagination = {
							...pagination,
							totalItems,
							totalPages: Math.ceil(totalItems / itemsPerPage),
						};
					}
				}

				if (data && data.length) {
					const newData = data.map((item) => ({
						...item,
						completedString: item.completed ? "Yes" : "No",
					}));

					setTableConfig((curr) => ({ ...curr, rows: newData, pagination }));
				}
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		getTodos();
	}, []);	

	return (
		<Table {...tableConfig} />
	)
}`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TableStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [tableConfig, _] = useState<TableProps>({
		columns: [
			{ header: "Name", key: "name" },
			{ header: "Age", key: "age" },
			{ header: "Address", key: "address" },
			{ header: "Birthday", key: "birthday" },
		],
		rows: [
			{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
			{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
			{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
		],
		gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
		variant: "default",
		size: "medium",
	});

	const [tableState, setTableState] = useState<TableState>({
		disabled: false,
		empty: false,
		loading: true,
	});

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				{tableState && (
					<div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
						<Button
							theme={tableState.loading ? "primary" : "default"}
							variant="filled"
							onClick={() => {
								setTableState((curr) => ({ ...curr, loading: !curr.loading }));
							}}
							customStyles={{ marginRight: 12 }}
						>
							{tableState.loading ? "Stop Loading" : "Start Loading"}
						</Button>
						<Button
							theme={!tableState.disabled ? "primary" : "danger"}
							variant="filled"
							onClick={() => {
								setTableState((curr) => ({ ...curr, disabled: !curr.disabled }));
							}}
							customStyles={{ marginRight: 12 }}
						>
							{!tableState.disabled ? "On" : "Off"}
						</Button>
						<Button
							theme={tableState.empty ? "danger" : "primary"}
							variant="filled"
							onClick={() => {
								setTableState((curr) => ({ ...curr, empty: !curr.empty }));
							}}
							customStyles={{ marginRight: 12 }}
						>
							{tableState.empty ? "Empty" : "With Data"}
						</Button>
					</div>
				)}
				<Table {...tableConfig} state={tableState} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
const [tableConfig, _] = useState<TableProps>({
	columns: [
		{ header: "Name", key: "name" },
		{ header: "Age", key: "age" },
		{ header: "Address", key: "address" },
		{ header: "Birthday", key: "birthday" },
	],
	rows: [
		{ name: "John", age: 20, address: "New York", birthday: "01/01/2002" },
		{ name: "Peter", age: 25, address: "London", birthday: "01/01/1992" },
		{ name: "Math", age: 30, address: "Paris", birthday: "01/01/1982" },
	],
	gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
	variant: "default",
	size: "medium",
});

const [tableState, setTableState] = useState<TableState>({
	disabled: false,
	empty: false,
	loading: true,
});

return (
	<>
		{tableState && (
			<div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
				<Button
					theme={tableState.loading ? "primary" : "default"}
					variant="filled"
					onClick={() => {
						setTableState((curr) => ({ ...curr, loading: !curr.loading }));
					}}
					customStyles={{ marginRight: 12 }}
				>
					{tableState.loading ? "Stop Loading" : "Start Loading"}
				</Button>
				<Button
					theme={!tableState.disabled ? "primary" : "danger"}
					variant="filled"
					onClick={() => {
						setTableState((curr) => ({ ...curr, disabled: !curr.disabled }));
					}}
					customStyles={{ marginRight: 12 }}
				>
					{!tableState.disabled ? "On" : "Off"}
				</Button>
				<Button
					theme={tableState.empty ? "danger" : "primary"}
					variant="filled"
					onClick={() => {
						setTableState((curr) => ({ ...curr, empty: !curr.empty }));
					}}
					customStyles={{ marginRight: 12 }}
				>
					{tableState.empty ? "Empty" : "With Data"}
				</Button>
			</div>
		)}
		<Table {...tableConfig} state={tableState} />
	</>;`}
					language="tsx"
				/>
			)}
		</>
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
		gridTemplateColumns: {
			type: "React.CSSProperties['gridTemplateColumns']",
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
	};

	return <LeApiTable props={props} />;
};

tableAttr["LeSourceButton"] = LeSourceButton;
tableAttr["LeHighlighter"] = LeHighlighter;
tableAttr["TableImportPreview"] = TableImportPreview;
tableAttr["TableConfigurationPreview"] = TableConfigurationPreview;
tableAttr["TableChildrenPreview"] = TableChildrenPreview;
tableAttr["TableVariantPreview"] = TableVariantPreview;
tableAttr["TableSizePreview"] = TableSizePreview;
tableAttr["TableFiltersPreview"] = TableFiltersPreview;
tableAttr["TablePaginationPreview"] = TablePaginationPreview;
tableAttr["TableStatePreview"] = TableStatePreview;
tableAttr["TableApiTable"] = TableApiTable;

export { tableAttr };
