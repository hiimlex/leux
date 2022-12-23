import "./Preview.scss";

interface PreviewProps {
	children?: React.ReactNode;
	direction?: "row" | "column";
}

const Preview = ({ children, direction = "row" }: PreviewProps) => {
	return (
		<div className={"le-preview" + (direction ? ` le-preview--${direction}` : "")}>{children}</div>
	);
};

export default Preview;
