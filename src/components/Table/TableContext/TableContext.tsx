import { Context, createContext, useContext } from "react";
import { TableContextType } from "./TableContext.model";

export const TableContext: Context<object> = createContext<TableContextType<object>>({
	keysOrder: undefined,
	rows: undefined,
	columns: undefined,
	size: undefined,
	variant: undefined,
});

export const useTableContext = <RowType extends object>(): TableContextType<RowType> => {
	const ctx = useContext<TableContextType<RowType>>(TableContext);
	if (!ctx) throw new Error("useTableContext must be inside Table");
	return ctx;
};
