import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
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
	TableColumn,
	TableOrder,
	TableProps,
	TableSizes,
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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
				{tableConfig.columns && tableConfig.columns[0].order}
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

const TableOrderPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const orderFn = ({ key, order }: TableColumn) => {
		getTodos({ key, order: order === "asc" ? "desc" : "asc" });
	};

	const [tableConfig, setTableConfig] = useState<TableProps>({
		columns: [
			{
				header: "#ID",
				key: "id",
				order: "asc",
				orderFn,
			},
			{ header: "User ID", key: "userId", order: "asc", orderFn },
			{ header: "Title", key: "title", order: "asc", orderFn },
			{ header: "Completed", key: "completedString" },
		],
		rows: [],
		gridTemplateColumns: "repeat(2, 1fr) 2fr 1fr",
		variant: "default",
		size: "medium",
	});

	const getTodos = useCallback(async (sort?: { key: string; order: TableOrder }) => {
		try {
			let url = `https://jsonplaceholder.typicode.com/todos?_limit=10`;
			let { columns } = tableConfig;

			if (sort && columns) {
				url = `${url}&_sort=${sort.key}&_order=${sort.order}`;

				columns = columns.map((item) => {
					if (sort.key === item.key) {
						item.orderActive = true;
						item.order = sort.order;
					} else if (item.key && item.orderActive) {
						item.orderActive = false;
					}

					return item;
				});
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

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Table {...tableConfig} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`import axios from "axios";

const Component = () => {
	const orderFn = ({ key, order }: TableColumn) => {
		getTodos({ key, order: order === "asc" ? "desc" : "asc" });
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
	});

	const getTodos = useCallback(async (sort?: { key: string; order: TableOrder }) => {
		try {
			let url = \`https://jsonplaceholder.typicode.com/todos?_limit=10\`;
			let { columns } = tableConfig;

			if (sort && columns) {
				url = \`$\{url}&_sort=$\{sort.key}&_order=$\{sort.order}\`;

				columns = columns.map((item) => {
					if (sort.key === item.key) {
						item.orderActive = true;
						item.order = sort.order;
					} else if (item.key && item.orderActive) {
						item.orderActive = false;
					}

					return item;
				});
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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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

tableAttr["LeSourceButton"] = LeSourceButton;
tableAttr["LeHighlighter"] = LeHighlighter;
tableAttr["TableImportPreview"] = TableImportPreview;
tableAttr["TableConfigurationPreview"] = TableConfigurationPreview;
tableAttr["TableChildrenPreview"] = TableChildrenPreview;
tableAttr["TableVariantPreview"] = TableVariantPreview;
tableAttr["TableSizePreview"] = TableSizePreview;
tableAttr["TableOrderPreview"] = TableOrderPreview;
tableAttr["TablePaginationPreview"] = TablePaginationPreview;
tableAttr["TableStatePreview"] = TableStatePreview;

export { tableAttr };