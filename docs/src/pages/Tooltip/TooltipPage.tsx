import React from "react";
import { ReactComponent as TooltipMD } from "./tooltip.md";
import { tooltipAttr } from "./TooltipAttributes";

const TooltipPage = () => <TooltipMD {...tooltipAttr} />;

export default TooltipPage;
