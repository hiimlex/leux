import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { Avatar, AvatarProps } from "../../../../src";
import { attributes as avatarAttr } from "./avatar.md";
import { useState } from "react";
import React from "react";

const AvatarImportPreview = () => (
	<LeHighlighter code={`import { Avatar, AvatarProps } from "leux";`} language="tsx" />
);

const AvatarSrcPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	return (
		<Avatar src="https://avatars.githubusercontent.com/u/49082043?v=4" alt="hiimlex github avatar" />
	)
};
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const AvatarAsTextPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Avatar src="Alex Alves" asText />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	return (
		<Avatar src="Alex Alves" asText />
	)
};
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const AvatarSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
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
			</LePreview>
			{showCode && (
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
			)}
		</>
	);
};

const AvatarCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Avatar
					src="https://avatars.githubusercontent.com/u/49082043?v=4"
					alt="hiimlex github avatar"
					customSize={"10vw"}
					customStyles={{ marginRight: "18px", border: "4px solid red" }}
					customClass="le-avatar-custom"
				/>
			</LePreview>
			{showCode && (
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
			)}
		</>
	);
};

const AvatarApiTable = () => {
	const props: PropsMapping<AvatarProps> = {
		src: {
			type: "string",
			required: true,
		},
		size: {
			type: "AvatarSizes | 'small' | 'medium' | 'large'",
			defaultValue: "medium",
		},
		customSize: {
			type: "React.CSSProperties['width']",
		},
		alt: {
			type: "HTMLImageElement['alt']",
		},
		asText: {
			type: "boolean",
		},
		rounded: {
			type: "boolean",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customClass: {
			type: "string",
		},
	};

	return <LeApiTable props={props} />;
};

avatarAttr["LeSourceButton"] = LeSourceButton;
avatarAttr["AvatarImportPreview"] = AvatarImportPreview;
avatarAttr["AvatarSrcPreview"] = AvatarSrcPreview;
avatarAttr["AvatarAsTextPreview"] = AvatarAsTextPreview;
avatarAttr["AvatarSizePreview"] = AvatarSizePreview;
avatarAttr["AvatarCustomPreview"] = AvatarCustomPreview;
avatarAttr["AvatarApiTable"] = AvatarApiTable;
avatarAttr["LeHighlighter"] = LeHighlighter;

export { avatarAttr };
