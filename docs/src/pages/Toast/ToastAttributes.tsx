import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	Button,
	ToastProps,
	ToastProviderProps,
	ToastSizes,
	ToastColors,
	useToast,
} from "../../../../src";
import { attributes as toastAttr } from "./toast.md";
import React from "react";

const ToastImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Toast, ToastProps, useToast } from "@leux/ui";`} />
);

const ToastSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

	const handleCreateToast = (size: ToastSizes) => {
		createToast({
			label: `toast ${size} preview`,
			size,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={() => handleCreateToast("small")}>small toast</Button>
				<Button onClick={() => handleCreateToast("medium")}>medium toast</Button>
				<Button onClick={() => handleCreateToast("large")}>large toast</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast, ToastSizes } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (size: ToastSizes) => {
		createToast({
			label: \`toast \${size} preview\`,
			size,
		});
	};
					

	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button onClick={() => handleCreateToast("small")} >
				small toast
			</Button>
			<Button onClick={() => handleCreateToast("medium")}>
				medium toast
			</Button>
			<Button onClick={() => handleCreateToast("large")}>
				large toast
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
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

	const handleCreateToast = (colorScheme: ToastColors) => {
		createToast({
			label: `toast ${colorScheme} preview`,
			colorScheme,
		});
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button
					onClick={() => handleCreateToast("primary")}
					colorScheme="primary"
					customStyles={{ marginRight: 12 }}
				>
					primary toast
				</Button>

				<Button
					onClick={() => handleCreateToast("secondary")}
					colorScheme="secondary"
					customStyles={{ marginRight: 12 }}
				>
					secondary toast
				</Button>

				<Button
					onClick={() => handleCreateToast("success")}
					colorScheme="success"
					customStyles={{ marginRight: 12 }}
				>
					success toast
				</Button>

				<Button
					onClick={() => handleCreateToast("danger")}
					colorScheme="danger"
					customStyles={{ marginRight: 12 }}
				>
					danger toast
				</Button>

				<Button
					onClick={() => handleCreateToast("warning")}
					colorScheme="warning"
					customStyles={{ marginRight: 12 }}
				>
					warning toast
				</Button>

				<Button
					onClick={() => handleCreateToast("default")}
					colorScheme="default"
					customStyles={{ marginRight: 12 }}
				>
					default toast
				</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast, ToastThemes } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (theme: ToastThemes) => {
		createToast({
			label: \`toast \${size} preview\`,
			theme,
		});
	};
					

	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button
				onClick={() => handleCreateToast("primary")}
				colorScheme="primary"
				customStyles={{ marginRight: 12 }}
			>
				primary toast
			</Button>

			<Button
				onClick={() => handleCreateToast("secondary")}
				colorScheme="secondary"
				customStyles={{ marginRight: 12 }}
			>
				secondary toast
			</Button>

			<Button
				onClick={() => handleCreateToast("success")}
				colorScheme="success"
				customStyles={{ marginRight: 12 }}
			>
				success toast
			</Button>

			<Button
				onClick={() => handleCreateToast("danger")}
				colorScheme="danger"
				customStyles={{ marginRight: 12 }}
			>
				danger toast
			</Button>

			<Button
				onClick={() => handleCreateToast("warning")}
				colorScheme="warning"
				customStyles={{ marginRight: 12 }}
			>
				warning toast
			</Button>

			<Button
				onClick={() => handleCreateToast("default")}
				colorScheme="default"
			>
				default toast
			</Button>
		</Box>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastDurationPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

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
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (duration: number) => {
		createToast({
			label: \`toast \${duration / 1000}s preview\`,
			duration,
		});
	};
					

	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button onClick={() => handleCreateToast(2500)} customStyles={{ marginRight: 12 }}>
				2.5s
			</Button>

			<Button onClick={() => handleCreateToast(5000)} customStyles={{ marginRight: 12 }}>
				5s
			</Button>

			<Button onClick={() => handleCreateToast(10000)}>10s</Button>
		</Box>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastClosablePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

	const handleCreateToast = (closable: boolean) => {
		createToast({
			label: "toast closable preview",
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
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (closable: boolean) => {
		createToast({
			label: "toast closable preview",
			closable,
		});
	};
					
	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button onClick={() => handleCreateToast(true)} customStyles={{ marginRight: 12 }}>
				close on click
			</Button>

			<Button onClick={() => handleCreateToast(false)}>don't close</Button>
		</Box>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

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
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (closable: boolean) => {
		createToast({
			label: "custom toast",
			customClass: "le-text--h1",
			customStyles: {
				color: "green",
				background: "yellow",
				border: "1px solid red",
			},
		});
	};
					
	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button onClick={handleCreateCustomToast}>customized</Button>
		</Box>
	);
};`}
				/>
			)}
		</>
	);
};

const ToastActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const { createToast } = useToast();

	const handleCreateToast = () => {
		createToast({
			label: "alert on close",
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
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`// Component.tsx
import { Box, Button, useToast } from "@leux/ui";

const Component = () => {
	const { createToast } = useToast();

	const handleCreateToast = (closable: boolean) => {
		createToast({
			label: "alert on close",
			onClose: () => {
				alert("toast closed");
			},
		});
	};
					
	return (
		<Box flex flexDirection="row" alignItems="center">
			<Button onClick={handleCreateToast}>alert on close</Button>
		</Box>
	);
};`}
				/>
			)}
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
		colorScheme: {
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

toastAttr["LeSourceButton"] = LeSourceButton;
toastAttr["NavLink"] = NavLink;
toastAttr["ToastApiTable"] = ToastApiTable;
toastAttr["ToastImportPreview"] = ToastImportPreview;
toastAttr["ToastSizePreview"] = ToastSizePreview;
toastAttr["ToastThemePreview"] = ToastThemePreview;
toastAttr["ToastDurationPreview"] = ToastDurationPreview;
toastAttr["ToastClosablePreview"] = ToastClosablePreview;
toastAttr["ToastCustomPreview"] = ToastCustomPreview;
toastAttr["ToastActionPreview"] = ToastActionPreview;

export { toastAttr };
