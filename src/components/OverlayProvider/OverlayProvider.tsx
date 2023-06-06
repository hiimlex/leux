import React, { ComponentProps, FC, PropsWithChildren, useMemo } from "react";
import { ModalProvider, ModalProviderProps } from "../Modal";
import { LeSafeAny } from "../../types";
import { ToastProvider, ToastProviderProps } from "../ToastProvider";

interface OverlayProviderProps {
	children: React.ReactNode;
	ModalProviderProps?: Omit<ModalProviderProps, "children">;
	ToastProviderProps?: Omit<ToastProviderProps, "children">;
}

const combineProviders = (
	components: FC<PropsWithChildren<LeSafeAny>>[],
	props: Record<string, LeSafeAny>
): FC<PropsWithChildren> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC<PropsWithChildren<LeSafeAny>>>): JSX.Element => {
				return (
					<AccumulatedComponents>
						<CurrentComponent {...props[CurrentComponent.name + "Props"]}>
							{children}
						</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

const OverlayProvider = ({
	children,
	ModalProviderProps,
	ToastProviderProps,
}: OverlayProviderProps) => {
	const CombinedProviders = useMemo(
		() =>
			combineProviders([ModalProvider, ToastProvider], {
				ModalProviderProps,
				ToastProviderProps,
			}),
		[ModalProviderProps, ToastProviderProps]
	);

	return <CombinedProviders>{children}</CombinedProviders>;
};

export { OverlayProvider };
