import { PropsMapping, LeApiTable, LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
	Button,
	ToastContext,
	ToastProps,
	ToastProviderProps,
	ToastSize,
	ToastTheme,
} from "../../../../src";
import { attributes as toastAttr } from "./toast.md";

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
	removeToast: (id: string) => void;
	position?: ToastPosition;
};`}
		/>
		<LeHighlighter
			language="tsx"
			code={`// Component.tsx
const Component = () => {
	const { toasts, createToast, removeToast, position } = useContext(ToastContext);
	
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
					code={`// Component.tsx
import { Box, Button, ToastContext, ToastSize } from "leux";
					
const Component = () =>{
	const { createToast } = useContext(ToastContext);

	const handleCreateToast = () => {
		createToast({
			label: "usage toast preview",
		});
	};

	return (
		<Button onClick={handleCreateToast}>toast</Button>
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
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, ToastContext, ToastSize } from "leux";

const Component = () => {
	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (size: ToastSize) => {
		createToast({
			label: \`toast \${size} preview\`,
			size,
		});
	};
					

	return (
		<Box flex flexDirection="row" alignItems="center">
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
		</Box>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (theme: ToastTheme) => {
		createToast({
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

const ToastDurationPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const { createToast } = useContext(ToastContext);

	const handleCreateToast = (duration: number) => {
		createToast({
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

const ToastApiTable = () => {
	const props: PropsMapping<ToastProps> = {
		label: {
			type: "string",
			required: true,
		},
		id: {
			type: "string",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		variant: {
			type: "'filled'",
			defaultValue: "'filled'",
		},
		theme: {
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'",
			defaultValue: "'default'",
		},
		duration: {
			type: "number",
			defaultValue: "2500",
		},
		closable: {
			type: "boolean",
			defaultValue: "true",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		onClose: {
			type: "() => void",
		},
		loading: {
			type: "boolean",
			defaultValue: "false",
		},
		zIndex: {
			type: "number",
			defaultValue: "1000",
		},
	};

	return <LeApiTable props={props} />;
};

const ToastProdiverApiTable = () => {
	const props: PropsMapping<Omit<ToastProviderProps, "children">> = {
		position: {
			type: "'topRight' | 'topLeft' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter'",
			defaultValue: "'topCenter'",
		},
		stackable: {
			type: "boolean",
			defaultValue: "true",
		},
		duration: {
			type: "number",
			defaultValue: "2500",
		},
	};

	return <LeApiTable props={props} />;
};

toastAttr["LeSourceButton"] = LeSourceButton;
toastAttr["NavLink"] = NavLink;
toastAttr["ToastApiTable"] = ToastApiTable;
toastAttr["ToastProdiverApiTable"] = ToastProdiverApiTable;
toastAttr["ToastImportPreview"] = ToastImportPreview;
toastAttr["ToastContextPreview"] = ToastContextPreview;
toastAttr["ToastUsagePreview"] = ToastUsagePreview;
toastAttr["ToastSizePreview"] = ToastSizePreview;
toastAttr["ToastThemePreview"] = ToastThemePreview;
toastAttr["ToastDurationPreview"] = ToastDurationPreview;
toastAttr["ToastClosablePreview"] = ToastClosablePreview;
toastAttr["ToastCustomPreview"] = ToastCustomPreview;
toastAttr["ToastActionPreview"] = ToastActionPreview;

export { toastAttr };
