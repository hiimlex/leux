type AvatarSizes = "small" | "medium" | "large";
type AvatarVariants = "filled" | "outlined";

interface AvatarProps {
	src: string;
	size?: AvatarSizes;
	customSize?: React.CSSProperties["width"];
	alt?: HTMLImageElement["alt"];
	asText?: boolean;
	rounded?: boolean;
	customClass?: string;
	customStyles?: React.CSSProperties;
	variant?: AvatarVariants;
}

export { AvatarProps, AvatarSizes, AvatarVariants };
