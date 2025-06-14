export type LeSizes = "small" | "medium" | "large";
export type LeVariants = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LeSafeAny = any;

export type LeClassNames = Record<string, (props?: LeSafeAny) => string>;
export type LeClassNamesArray = Record<string, (props?: LeSafeAny) => string[]>;

export type LeClassNamesSimple = Record<string, string>;

export const leClassNames = (values: (string | undefined | boolean)[] | string): string => {
	if (typeof values === "string") {
		return values;
	}

	return values.filter(Boolean).join(" ");
};
