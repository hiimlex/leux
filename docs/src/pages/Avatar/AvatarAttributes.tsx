import { LeHighlighter, LeSourceButton } from "@/components";
import { Avatar } from "../../../../src";
import { attributes as avatarAttr } from "./avatar.md";

const AvatarImportPreview = () => (
	<LeHighlighter code={`import { Avatar, AvatarProps } from "leux";`} language="tsx" />
);

const AvatarSrcPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<Avatar src="https://avatars.githubusercontent.com/u/49082043?v=4" alt="hiimlex github avatar" />
	)
};
`}
				language="tsx"
			/>
		</>
	);
};

const AvatarAsTextPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Avatar src="Alex Alves" asText />
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<Avatar src="Alex Alves" asText />
	)
};
`}
				language="tsx"
			/>
		</>
	);
};

const AvatarSizePreview = () => {
	return (
		<>
			<div className="le-preview">
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
					size="small"
					customStyles={{ marginRight: "18px" }}
				/>
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
					size="medium"
					customStyles={{ marginRight: "18px" }}
				/>
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
					size="large"
					customStyles={{ marginRight: "18px" }}
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Avatar
				src="https://avatars.githubusercontent.com/u/49082043?v=4"
				alt="hiimlex github avatar"
				size="small"
				customStyles={{ marginRight: "18px" }}
			/>
			<Avatar
				src="https://avatars.githubusercontent.com/u/49082043?v=4"
				alt="hiimlex github avatar"
				size="medium"
				customStyles={{ marginRight: "18px" }}
			/>
			<Avatar
				src="https://avatars.githubusercontent.com/u/49082043?v=4"
				alt="hiimlex github avatar"
				size="large"
				customStyles={{ marginRight: "18px" }}
			/>
		</>
	)
};
`}
				language="tsx"
			/>
		</>
	);
};

const AvatarCustomPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
					customSize={"10vw"}
					customStyles={{ marginRight: "18px", border: "4px solid red" }}
					customClass="le-avatar-custom"
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Avatar
				src="https://avatars.githubusercontent.com/u/49082043?v=4"
				alt="hiimlex github avatar"
				customSize={"10vw"}
				customStyles={{ marginRight: "18px", border: "4px solid red" }}
				customClass="le-avatar-custom"
			/>
		</>
	)
};
`}
				language="tsx"
			/>
		</>
	);
};

avatarAttr["LeSourceButton"] = LeSourceButton;
avatarAttr["AvatarImportPreview"] = AvatarImportPreview;
avatarAttr["AvatarSrcPreview"] = AvatarSrcPreview;
avatarAttr["AvatarAsTextPreview"] = AvatarAsTextPreview;
avatarAttr["AvatarSizePreview"] = AvatarSizePreview;
avatarAttr["AvatarCustomPreview"] = AvatarCustomPreview;
avatarAttr["LeHighlighter"] = LeHighlighter;

export { avatarAttr };
