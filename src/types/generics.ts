export type LeSizes = "small" | "medium" | "large";
export type LeColorScheme = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
export type LeVariants = "filled" | "outlined" | "text" | "ghost";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LeSafeAny = any;

export type LeClassNames = Record<string, (props?: LeSafeAny) => string>;
export type LeClassNamesArray = Record<string, (props?: LeSafeAny) => string[]>;

export type LeClassNamesSimple = Record<string, string>;

export type LeComponentDefaults = {
	customClass?: string;
	customStyles?: React.CSSProperties;
};

export const leClassNames = (values: (string | undefined | boolean)[] | string): string => {
	if (typeof values === "string") {
		return values;
	}

	return values.filter(Boolean).join(" ");
};
