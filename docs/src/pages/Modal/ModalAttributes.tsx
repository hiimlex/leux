import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { PropsWithChildren, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, ModalProps, Typography, useModal } from "@leux/ui";
import { attributes as modalAttr } from "./modal.md";
import React from "react";

const ModalImportPreview = () => (
	<LeHighlighter
		language="tsx"
		code={`import { Modal, ModalProps, useModal } from "@leux/ui";`}
	></LeHighlighter>
);

const ModalUsagePreview = () => {
	const { createModal } = useModal();
	const [showCode, setShowCode] = useState<boolean>(false);

	const handleOpenModal = () => {
		createModal({
			id: "modal-usage",
			title: "Title",
			children: (
				<Typography variant="body-1" customStyles={{ margin: 0 }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem consequuntur
					facilis quo saepe alias autem expedita molestiae laboriosam, iusto quaerat minima laborum
					eius omnis ipsa voluptate aliquam impedit quisquam!
				</Typography>
			),
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleOpenModal}>Open modal</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// example.tsx
const Component = () => {
	const { hasModal, createModal, openModal } = useModal();

	const handleOpenModal = () => {
		if (!hasModal("modal-usage")) {
			createModal({
				id: "modal-usage",
				title: "Title",
				children: (
					<Typography variant="body-1" customStyles={{ margin: 0 }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem consequuntur
						facilis quo saepe alias autem expedita molestiae laboriosam, iusto quaerat minima
						laborum eius omnis ipsa voluptate aliquam impedit quisquam!
					</Typography>
				),
				visible: false,
				onOk: (_, onClose) => {
					onClose();
				},
				destroyOnClose: true,
			});
		}
	};

	return (
		<>
			<Button onClick={handleOpenModal}>Open modal</Button>
		</>
	);
};
`}
				/>
			)}
		</>
	);
};

const ModalActionsPreview = () => {
	const [showCode, setshowCode] = useState<boolean>(false);
	const { createModal } = useModal();

	const handleOpenModal = () => {
		createModal({
			id: "modal-actions",
			title: "Title",
			children: <Typography variant="body-1">Click on OK, Cancel or Close button</Typography>,
			visible: false,
			destroyOnClose: true,
			okText: "Click me",
			cancelText: "Don't click me",
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setshowCode}>
				<Button onClick={handleOpenModal}>Open modal</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const { createModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		createModal({
			id: "modal-actions",
			title: "Title",
			children: (
				<Typography variant="body-1" customStyles={{ margin: 0 }}>
					click on OK, Cancel or Close button
				</Typography>
			),
			visible: false,
			onOk: (_, onClose) => {
				alert("Ok");

				onClose();
			},
			onCancel: (_, onClose) => {
				alert("Cancel");

				onClose();
			},
			onClose: () => {
				alert("Close");
			},
			destroyOnClose: true,
		});

		showModal("modal-actions");
	};

	return (
		<Button onClick={handleOpenModal}>Open modal</Button>
	);
};`}
				/>
			)}
		</>
	);
};

const ModalPositionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const { createModal } = useModal();

	const handleOpenModal = () => {
		createModal({
			id: "modal-position",
			title: "Position",
			children: (
				<Typography variant="body-1" customStyles={{ margin: 0 }}>
					120px from top
				</Typography>
			),
			position: { top: 120 },
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleOpenModal}>Open modal</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const { createModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		createModal({
			id: "modal-position",
			title: "Position",
			children: (
				<Typography variant="body-1" customStyles={{ margin: 0 }}>
					120px from top
				</Typography>
			),
			top: 120,
		});
	};

	return (
		<Button onClick={handleOpenModal}>Open modal</Button>
	);
};`}
				/>
			)}
		</>
	);
};

const RequiredProp = ({ children }: PropsWithChildren) => (
	<span>
		{children} <strong className="le-color-danger">*</strong>
	</span>
);

const ModalApiTable = () => {
	const props: PropsMapping<ModalProps> = {
		id: {
			type: "string",
			required: true,
		},
		zIndex: {
			type: "React.CSSProperties['zIndex']",
			defaultValue: "1000",
		},
		title: {
			type: "string",
			required: true,
		},
		children: {
			type: "React.ReactNode",
		},
		visible: {
			type: "boolean",
			defaultValue: "true",
		},
		width: {
			type: "React.CSSProperties['width']",
			defaultValue: "'40%'",
		},

		centered: {
			type: "boolean",
			defaultValue: "true",
		},
		position: {
			type: "ModalFloatPosition | { top?: React.CSSProperties['top']; left?: React.CSSProperties['left']; right?: React.CSSProperties['right']; bottom?: React.CSSProperties['bottom']; }",
		},
		closable: {
			type: "boolean",
			defaultValue: "true",
		},
		maskClosable: {
			type: "boolean",
			defaultValue: "true",
		},
		destroyOnClose: {
			type: "boolean",
			defaultValue: "true",
		},
		onClose: {
			type: "() => void",
		},
		onOk: {
			type: "ModalFooterFunction | (id: string, onClose: () => void) => void",
		},
		onCancel: {
			type: "ModalFooterFunction | (id: string, onClose: () => void) => void",
		},
		footer: {
			type: "ModalFooterProps | ButtonProps[] | null",
		},
		customFooter: {
			type: "React.ReactNode",
		},
		cancelText: {
			type: "string",
			defaultValue: "'Cancel'",
		},
		okText: {
			type: "string",
			defaultValue: "'Ok'",
		},
		customWrapperClass: {
			type: "string",
		},
		customWrapperStyles: {
			type: "React.CSSProperties",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

modalAttr["LeSourceButton"] = LeSourceButton;
modalAttr["NavLink"] = NavLink;
modalAttr["LeHighlighter"] = LeHighlighter;
modalAttr["RequiredProp"] = RequiredProp;
modalAttr["ModalUsagePreview"] = ModalUsagePreview;
modalAttr["ModalImportPreview"] = ModalImportPreview;
modalAttr["ModalActionsPreview"] = ModalActionsPreview;
modalAttr["ModalPositionPreview"] = ModalPositionPreview;
modalAttr["ModalApiTable"] = ModalApiTable;

export { modalAttr };
