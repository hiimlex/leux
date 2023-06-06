type SkeletonSizes = "small" | "medium" | "large";
type SkeletonVariants = "round" | "paragraph" | "rect";

interface SkeletonProps {
	children: React.ReactNode;
	size?: SkeletonSizes;
	variant?: SkeletonVariants;
	rows?: number;
	width?: React.CSSProperties["width"];
	show?: boolean;
	active?: boolean;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { SkeletonProps, SkeletonSizes, SkeletonVariants };
