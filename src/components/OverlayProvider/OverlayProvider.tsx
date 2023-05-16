import React, { ComponentProps, FC, PropsWithChildren } from "react";
import { ModalProvider } from "../Modal";
import { LeSafeAny } from "../../types";
import { ToastProvider } from "../ToastProvider";

const combineProviders = (
	...components: FC<PropsWithChildren<LeSafeAny>>[]
): FC<PropsWithChildren> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC<PropsWithChildren>>): JSX.Element => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

const Providers = [ModalProvider, ToastProvider];

const OverlayProvider = combineProviders(...Providers);

export { OverlayProvider };
