import { TableSizesType, TableVariants } from "../Table.model";
import { RowTypeRecord } from "../TableBody";
import { TableHeaderColumnProps, TableSortFn } from "../TableHeader";

export interface TableContextType<RowType extends object = object> {
	keysOrder?: (keyof RowType)[];
	rows?: RowTypeRecord<RowType>[];
	columns?: TableHeaderColumnProps<RowType>[];
	variant?: TableVariants;
	size?: TableSizesType;
	sortFn?: TableSortFn;
}
