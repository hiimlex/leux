import React from "react";
import { ReactComponent as CheckboxMD } from "./checkbox.md";
import { checkboxAttr } from "./CheckboxAttributes";

const CheckboxPage = () => <CheckboxMD {...checkboxAttr} />;

export default CheckboxPage;
