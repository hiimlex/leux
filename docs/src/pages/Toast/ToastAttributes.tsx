import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { attributes as toastAttr } from "./toast.md";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Box, Button, ToastContext, ToastPosition, ToastSize, ToastTheme } from "../../../../src";

const ToastImportPreview = () => (
	<LeHighlighter
		language="tsx"
		code={`import { Toast, ToastProps, ToastProvider, ToastContext } from "leux";`}
	/>
);

const ToastContextPreview = () => (
	<>
		<LeHighlighter
			language="tsx"
			code={`// ToastContext.tsx
type ToastContextProps = {
	toasts: ToastProps[];
	createToast: (toast: ToastProps) => void;
};`}
		/>
		<LeHighlighter
			language="tsx"
			code={`// App.tsx
const Component = () => {
	const { toasts, createToast, removeToast } = useContext(ToastContext);
	
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

const ToastUsagePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = () => {
		createToast({
			id: "toast-usage-preview",
			label: "usage toast preview",
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleCreateToast}>toast</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () =>{
	const { createToast } = useContext(ToastContext);

	const handleCreateToast = () => {
		createToast({
			id: "toast-usage-preview",
			label: "usage toast preview",
		});
	};

	return (
		<>
			<Button onClick={handleCreateToast}>toast</Button>
		</>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (size: ToastSize) => {
		createToast({
			id: "toast-size-preview-" + size,
			label: `toast ${size} preview`,
			size,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button
					onClick={() => handleCreateToast("small")}
					size="small"
					customStyles={{ marginRight: 12 }}
				>
					small
				</Button>
				<Button
					onClick={() => handleCreateToast("medium")}
					size="medium"
					customStyles={{ marginRight: 12 }}
				>
					medium
				</Button>
				<Button onClick={() => handleCreateToast("large")} size="large">
					large
				</Button>
			</LePreview>
		</>
	);
};

const ToastThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (theme: ToastTheme) => {
		createToast({
			id: "toast-theme-preview-" + theme,
			label: `toast ${theme} preview`,
			theme,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button
					onClick={() => handleCreateToast("primary")}
					theme="primary"
					customStyles={{ marginRight: 12 }}
				>
					primary
				</Button>

				<Button
					onClick={() => handleCreateToast("secondary")}
					theme="secondary"
					customStyles={{ marginRight: 12 }}
				>
					secondary
				</Button>

				<Button
					onClick={() => handleCreateToast("success")}
					theme="success"
					customStyles={{ marginRight: 12 }}
				>
					success
				</Button>

				<Button
					onClick={() => handleCreateToast("danger")}
					theme="danger"
					customStyles={{ marginRight: 12 }}
				>
					danger
				</Button>

				<Button
					onClick={() => handleCreateToast("warning")}
					theme="warning"
					customStyles={{ marginRight: 12 }}
				>
					warning
				</Button>

				<Button
					onClick={() => handleCreateToast("default")}
					theme="default"
					customStyles={{ marginRight: 12 }}
				>
					default
				</Button>
			</LePreview>
		</>
	);
};

const ToastPositionPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (position: ToastPosition) => {
		createToast({
			id: "toast-position-preview-" + position,
			label: `toast ${position} preview`,
			position,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="column">
				<Box flex flexDirection="row" alignItems="center" customStyles={{ marginBottom: 12 }}>
					<Button onClick={() => handleCreateToast("topLeft")} customStyles={{ marginRight: 12 }}>
						top left
					</Button>

					<Button onClick={() => handleCreateToast("topCenter")} customStyles={{ marginRight: 12 }}>
						top centered
					</Button>

					<Button onClick={() => handleCreateToast("topRight")}>top right</Button>
				</Box>
				<Box flex flexDirection="row" alignItems="center">
					<Button
						onClick={() => handleCreateToast("bottomLeft")}
						customStyles={{ marginRight: 12 }}
					>
						bottom left
					</Button>

					<Button
						onClick={() => handleCreateToast("bottomCenter")}
						customStyles={{ marginRight: 12 }}
					>
						bottom centered
					</Button>

					<Button onClick={() => handleCreateToast("bottomRight")}>bottom right</Button>
				</Box>
			</LePreview>
		</>
	);
};

const ToastDurationPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (duration: number) => {
		createToast({
			id: "toast-position-preview-" + duration,
			label: `toast ${duration / 1000}s preview`,
			duration,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={() => handleCreateToast(2500)} customStyles={{ marginRight: 12 }}>
					2.5s
				</Button>

				<Button onClick={() => handleCreateToast(5000)} customStyles={{ marginRight: 12 }}>
					5s
				</Button>

				<Button onClick={() => handleCreateToast(10000)}>10s</Button>
			</LePreview>
		</>
	);
};

const ToastClosablePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (closable: boolean) => {
		createToast({
			id: `toast-closable-preview`,
			label: `toast closable preview`,
			closable,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={() => handleCreateToast(true)} customStyles={{ marginRight: 12 }}>
					close on click
				</Button>

				<Button onClick={() => handleCreateToast(false)}>don't close</Button>
			</LePreview>
		</>
	);
};

const ToastCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateCustomToast = () => {
		createToast({
			id: `toast-custom-preview`,
			label: `custom toast`,
			customClass: "le-text--h1",
			customStyles: {
				color: "green",
				background: "yellow",
				border: "1px solid red",
			},
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleCreateCustomToast}>customized</Button>
			</LePreview>
		</>
	);
};

const ToastActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = () => {
		createToast({
			id: `toast-onclose-preview`,
			label: `custom toast`,
			onClose: () => {
				alert("toast closed");
			},
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleCreateToast}>alert on close</Button>
			</LePreview>
		</>
	);
};

toastAttr["LeSourceButton"] = LeSourceButton;
toastAttr["NavLink"] = NavLink;
toastAttr["ToastImportPreview"] = ToastImportPreview;
toastAttr["ToastContextPreview"] = ToastContextPreview;
toastAttr["ToastUsagePreview"] = ToastUsagePreview;
toastAttr["ToastSizePreview"] = ToastSizePreview;
toastAttr["ToastPositionPreview"] = ToastPositionPreview;
toastAttr["ToastThemePreview"] = ToastThemePreview;
toastAttr["ToastDurationPreview"] = ToastDurationPreview;
toastAttr["ToastClosablePreview"] = ToastClosablePreview;
toastAttr["ToastCustomPreview"] = ToastCustomPreview;
toastAttr["ToastActionPreview"] = ToastActionPreview;

export { toastAttr };
