import React from "react";
import themingAttr from "./GlobalConfigAttributes";
import { ReactComponent as GlobalConfigMD } from "./globalconfig.md";

const GlobalConfigPage = () => <GlobalConfigMD {...themingAttr} />;

export default GlobalConfigPage;
