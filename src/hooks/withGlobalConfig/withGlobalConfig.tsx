import React, { ComponentType, useMemo } from "react";
import { useTheme } from "../useTheme";
import { ConfigKey } from "./global-config.model";

export function withGlobalConfig<K extends ConfigKey, P extends object>(
	Comp: ComponentType<P>,
	key: K
): ComponentType<P> {
	const WrappedComponent: React.FC<P> = (props: P) => {
		const { globalConfig } = useTheme();

		// Only inject partial props from config
		const defaultProps = useMemo<Partial<P>>(() => {
			return globalConfig?.[key] ?? {};
		}, [key, globalConfig]);

		const mergedProps = {
			...defaultProps,
			...props,
		} as P;

		return <Comp {...mergedProps} />;
	};

	WrappedComponent.displayName = `withGlobalConfig(${
		Comp.displayName || Comp.name || "Component"
	})`;

	return WrappedComponent;
}
