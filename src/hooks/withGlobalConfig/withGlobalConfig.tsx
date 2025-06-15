import React, { ComponentType, useMemo } from "react";
import { useTheme } from "../useTheme";
import { ConfigKey } from "./global-config.model";
import { LeSafeAny } from "../../types";

function isMergeableProp(propName: string): boolean {
	return /^custom/i.test(propName);
}

function mergeValues(globalVal: LeSafeAny, localVal: LeSafeAny): LeSafeAny {
	if (typeof globalVal === "string" && typeof localVal === "string") {
		return `${globalVal} ${localVal}`.trim();
	}
	if (
		typeof globalVal === "object" &&
		globalVal !== null &&
		typeof localVal === "object" &&
		localVal !== null
	) {
		return { ...globalVal, ...localVal }; // shallow merge
	}
	return localVal ?? globalVal;
}

export function withGlobalConfig<K extends ConfigKey, P extends object>(
	Comp: ComponentType<P>,
	key: K
): ComponentType<P> {
	const WrappedComponent: React.FC<P> = (props: P) => {
		const { globalConfig } = useTheme();

		// Only inject partial props from config
		const globalProps = useMemo<Partial<P>>(() => {
			return globalConfig?.[key] ?? {};
		}, [globalConfig]);

		const mergedProps = useMemo(() => {
			const result: Record<string, LeSafeAny> = { ...globalProps };

			// Merge global props with local props
			// Only custom properties are merged
			for (const propKey in props) {
				if (isMergeableProp(propKey)) {
					result[propKey] = mergeValues(globalProps?.[propKey], props[propKey]);
				} else {
					result[propKey] = props[propKey];
				}
			}

			return result as P;
		}, [globalProps, props]);

		return <Comp {...mergedProps} />;
	};

	WrappedComponent.displayName = `withGlobalConfig(${
		Comp.displayName || Comp.name || "Component"
	})`;

	return WrappedComponent;
}
