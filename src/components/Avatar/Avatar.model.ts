type AvatarSizes = "small" | "medium" | "large";

interface AvatarProps {
	src: string;
	size?: AvatarSizes;
	customSize?: React.CSSProperties["width"];
	alt?: HTMLImageElement["alt"];
	asText?: boolean;
	rounded?: boolean;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { AvatarProps, AvatarSizes };
