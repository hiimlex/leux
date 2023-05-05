import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { PropsWithChildren, useContext, useState } from "react";
import { Avatar, Button, ModalContext, Topography } from "../../../../src";
import { attributes as modalAttr } from "./modal.md";

const ModalImportPreview = () => (
	<LeHighlighter
		language="tsx"
		code={`import { Modal, ModalContext, ModalProvider, ModalProps } from "leux";`}
	></LeHighlighter>
);

const ModalContextPreview = () => {
	return (
		<>
			<LeHighlighter
				language="tsx"
				code={`// ModalContext.tsx
type ModalContextProps = {
	openModals: ModalProps[];
	createModal: (modal: ModalProps) => void;
	openModal: (id: string) => void;
	closeModal: (id: string, shouldDestroy?: boolean) => void;
	hasModal: (id: string) => boolean;
	destroyModal: (id: string) => void;
	destroyAll: () => void;
};`}
			/>
			<LeHighlighter
				language="tsx"
				code={`// Component.tsx
const Component = () => {
	const { openModals, createModal, openModal, closeModal, hasModal, destroyModal, destroyAll } =
		useContext(ModalContext);
		// ...

		return (
			<>
				{/* ... your component */}
			</>
		);
};`}
			/>
		</>
	);
};
const ModalProviderPreview = () => {
	return (
		<>
			<LeHighlighter
				language="tsx"
				code={`// app.tsx
const App = () => {
	return (
		<>
			<ModalProvider>
				{/* ... your application */}
			</ModalProvider>
		</>
	);
};
`}
			/>
		</>
	);
};

const ModalUsagePreview = () => {
	const { createModal } = useContext(ModalContext);
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const handleOpenModal = () => {
		createModal({
			id: "modal-usage",
			title: "Title",
			children: (
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem consequuntur
					facilis quo saepe alias autem expedita molestiae laboriosam, iusto quaerat minima laborum
					eius omnis ipsa voluptate aliquam impedit quisquam!
				</Topography>
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
	const { hasModal, createModal, openModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		if (!hasModal("modal-usage")) {
			createModal({
				id: "modal-usage",
				title: "Title",
				children: (
					<Topography variant="body-1" customStyles={{ margin: 0 }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem consequuntur
						facilis quo saepe alias autem expedita molestiae laboriosam, iusto quaerat minima
						laborum eius omnis ipsa voluptate aliquam impedit quisquam!
					</Topography>
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
	const [showCode, setshowCode] = useState<boolean | undefined>(false);
	const { createModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		createModal({
			id: "modal-actions",
			title: "Title",
			children: (
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					click on OK, Cancel or Close button
				</Topography>
			),
			visible: false,
			onOk: () => {
				alert("Hello");
			},
			onCancel: () => {
				alert("Why you click me?");
			},
			onClose: () => {
				alert("Closed");
			},
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
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					click on OK, Cancel or Close button
				</Topography>
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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const { createModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		createModal({
			id: "modal-position",
			title: "Position",
			children: (
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					120px from top
				</Topography>
			),
			top: 120,
			footer: null,
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
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					120px from top
				</Topography>
			),
			top: 120,
			footer: null,
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

const ModalSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createModal } = useContext(ModalContext);

	const handleOpenModal = () => {
		createModal({
			id: "modal-size",
			title: "Size",
			children: (
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					80% width
				</Topography>
			),
			footer: null,
			width: "80%",
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
			id: "modal-size",
			title: "Size",
			children: (
				<Topography variant="body-1" customStyles={{ margin: 0 }}>
					80% width
				</Topography>
			),
			footer: null,
			width: "80%",
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
		{children} <strong className="le-color-text--danger">*</strong>
	</span>
);

modalAttr["LeSourceButton"] = LeSourceButton;
modalAttr["LeHighlighter"] = LeHighlighter;
modalAttr["RequiredProp"] = RequiredProp;
modalAttr["ModalUsagePreview"] = ModalUsagePreview;
modalAttr["ModalImportPreview"] = ModalImportPreview;
modalAttr["ModalActionsPreview"] = ModalActionsPreview;
modalAttr["ModalPositionPreview"] = ModalPositionPreview;
modalAttr["ModalSizePreview"] = ModalSizePreview;
modalAttr["ModalContextPreview"] = ModalContextPreview;
modalAttr["ModalProviderPreview"] = ModalProviderPreview;

export { modalAttr };
