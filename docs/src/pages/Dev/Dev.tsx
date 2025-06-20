import React from "react";
import { Box, Table, TableHeaderColumnProps, Typography } from "lib";

const Dev: React.FC = () => {
	type TestData = {
		id: string;
		name: string;
	};

	const columns: TableHeaderColumnProps<TestData>[] = [
		{
			header: "ID",
			columnKey: "id",
		},
		{
			header: "Name",
			columnKey: "name",
		},
	];
	const data: TestData[] = [
		{ id: "1", name: "Item 1" },
		{ id: "2", name: "Item 2" },
		{ id: "3", name: "Item 3" },
		{
			name: "Item 4",
			id: "4",
		},
	];
	const dataKeys: (keyof TestData)[] = ["id", "name"];

	return (
		<Box flex flexDirection="column" flexGap={12}>
			<Typography variant="h2">Dev playground</Typography>

			<Table.Root variant="bordered" keysOrder={dataKeys} height={420}>
				<Table.Header>
					<Table.HeaderRow>
						<Table.HeaderColumn>Id</Table.HeaderColumn>
						<Table.HeaderColumn>Name</Table.HeaderColumn>
					</Table.HeaderRow>
				</Table.Header>
				<Table.Body>
					{data.map((item, index) => (
						<Table.BodyRow key={index}>
							<Table.BodyCell>{item.id}</Table.BodyCell>
							<Table.BodyCell>{item.name}</Table.BodyCell>
						</Table.BodyRow>
					))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
};

export default Dev;
