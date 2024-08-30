import { useEffect, useLayoutEffect, useState } from "react";

type LeBreakpoints = "sm" | "md" | "lg" | "xl";

type LeBreakpointType = {
	breakpoint: LeBreakpoints;
};

const breakpoints: Record<LeBreakpoints, number> = {
	sm: 1080,
	md: 1280,
	lg: 1440,
	xl: 1920,
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

	useEffect(() => {
		Object.keys(breakpoints).forEach((key) => {
			const breakpointValue = breakpoints[key as LeBreakpoints];
			document.documentElement.style.setProperty(`--le-breakpoint-${key}`, `${breakpointValue}px`);
		});
	}, []);

	useLayoutEffect(() => {
		window.addEventListener("resize", updateBreakpoint);
		updateBreakpoint();

		return () => window.removeEventListener("resize", updateBreakpoint);
	}, []);

	return breakpoint;
}

export { useBreakpoint, LeBreakpoints, LeBreakpointType };
