import React, { ComponentProps, FC, JSX, PropsWithChildren, useMemo } from "react";
import { LeSafeAny } from "../../types";
import { ModalProvider, ModalProviderProps } from "../ModalProvider";
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

const OverlayProvider: React.FC<OverlayProviderProps> = ({
	children,
	ModalProviderProps,
	ToastProviderProps,
}) => {
	const CombinedProviders = useMemo(
		() =>
			combineProviders([ModalProvider, ToastProvider], {
				ModalProviderProps,
				ToastProviderProps,
			}),
		[ModalProviderProps, ToastProviderProps]
	);

	return (
		<div className="le-overlay--provider" data-testid="leuxOverlayProvider">
			<CombinedProviders>{children}</CombinedProviders>
		</div>
	);
};

export { OverlayProvider };
