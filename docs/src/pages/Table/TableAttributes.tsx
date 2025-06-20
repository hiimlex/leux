import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import {
	Box,
	Button,
	Table,
	TableSizes,
	TableSizesType,
	TableVariants,
	type TableProps,
} from "lib";

import React, { useState } from "react";
import { attributes as tableAttr } from "./table.md";
import { TableHeaderRow } from "../../../../src/components/Table/TableHeader";

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
} from "@leux/ui";`}
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
tableAttr["TableApiTable"] = TableApiTable;

export { tableAttr };
