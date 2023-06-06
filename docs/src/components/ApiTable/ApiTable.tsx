import { useMemo } from "react";
import { LeHighlighter } from "..";
import { LeSafeAny } from "../../../../src";
import "./ApiTable.scss";

interface IApiTableProps {
	props: PropsMapping<LeSafeAny>;
}

export type PropsMapping<K> = Record<
	keyof K,
	{
		type: string;
		defaultValue?: string;
		required?: boolean;
	}
>;

const ApiTable = ({ props }: IApiTableProps) => {
	const propsAsArray = useMemo<
		{
			key: string;
			prop: {
				type: string;
				defaultValue?: string;
				required?: boolean;
			};
		}[]
	>(() => Object.keys(props).map((el) => ({ key: el, prop: props[el] })), [props]);

	return (
		<table className="api-table">
			<thead>
				<tr>
					<th style={{ width: "20%" }}>Prop</th>
					<th style={{ width: "60%" }}>Type</th>
					<th style={{ width: "20%" }}>Default</th>
				</tr>
			</thead>
			<tbody>
				{propsAsArray.map(({ prop, key }) => (
					<tr key={key}>
						<td>
							{key} {prop.required && <strong className="le-color-text--danger">*</strong>}
						</td>
						<td>
							<LeHighlighter code={prop.type} language="tsx" copy="off" style="soft" />
						</td>
						<td>
							<LeHighlighter
								code={prop.defaultValue || "null"}
								copy="off"
								style="soft"
								language="tsx"
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ApiTable;
