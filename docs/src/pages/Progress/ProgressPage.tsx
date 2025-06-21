import React from "react";
import { progressAttr } from "./ProgressAttributes";
import { ReactComponent as ProgressMD } from "./progress.md";

const ProgressPage = () => <ProgressMD {...progressAttr} />;

export default ProgressPage;
