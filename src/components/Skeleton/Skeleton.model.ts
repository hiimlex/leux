type SkeletonSize = "small" | "medium" | "large";
type SkeletonVariant = "round" | "paragraph" | "square";

interface SkeletonProps {
	children: React.ReactNode;
	size?: SkeletonSize;
	variant?: SkeletonVariant;
	rows?: number;
	width?: React.CSSProperties["width"];
	show?: boolean;
	active?: boolean;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { SkeletonProps, SkeletonSize, SkeletonVariant };
