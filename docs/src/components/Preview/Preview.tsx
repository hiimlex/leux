import { useState } from "react";
import "./Preview.scss";
import { LeClassNames } from "../../../../src";

type PreviewDirection = "row" | "column";

interface PreviewProps {
	children?: React.ReactNode;
	direction?: PreviewDirection;
	showCode?: boolean;
	setShowCode?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Preview = ({ children, direction = "row", showCode, setShowCode }: PreviewProps) => {
	const classNames: LeClassNames = {
		preview: () => "le-preview",
		previewContent: ({ direction }: { direction?: PreviewDirection }) =>
			`le-preview--content ${direction ? "le-preview--content-" + direction : ""}`,
		previewFooter: () => "le-preview--footer",
		previewFooterCode: () => "le-preview--footer-code",
	};

	const handleShowCode = () => !!setShowCode && setShowCode((curr) => !curr);

	return (
		<div className={classNames["preview"]()}>
			<div className={classNames["previewContent"]({ direction })}>{children}</div>
			<div className={classNames["previewFooter"]()}>
				{showCode !== undefined && (
					<div className={classNames["previewFooterCode"]()} onClick={handleShowCode}>
						{showCode ? "HIDE" : "SHOW"} CODE
					</div>
				)}
			</div>
		</div>
	);
};

export default Preview;
