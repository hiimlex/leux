import { useLayoutEffect, useState } from "react";

type LeBreakpoints = "sm" | "md" | "lg" | "xl";

type LeBreakpointType = {
	breakpoint: LeBreakpoints;
};

/**
 * useBreakpoint hook
 *
 * A one-liner hook to get the current breakpoint based on the window.innerWidth
 * always updated when the window is resized.
 *
 *
 * @returns {LeBreakpointType} `sm | md | lg | xl`
 */
function useBreakpoint(): LeBreakpointType {
	const [breakpoint, setBreakpoint] = useState<LeBreakpointType>({
		breakpoint: "sm",
	});

	const updateBreakpoint = () => {
		const { innerWidth: width } = window;

		if (width <= 1080) {
			setBreakpoint({ breakpoint: "sm" });
		} else if (width <= 1280) {
			setBreakpoint({ breakpoint: "md" });
		} else if (width <= 1440) {
			setBreakpoint({ breakpoint: "lg" });
		} else {
			setBreakpoint({ breakpoint: "xl" });
		}
	};

	useLayoutEffect(() => {
		window.addEventListener("resize", updateBreakpoint);
		updateBreakpoint();
		return () => window.removeEventListener("resize", updateBreakpoint);
	}, []);

	return breakpoint;
}

export { useBreakpoint, LeBreakpoints, LeBreakpointType };
