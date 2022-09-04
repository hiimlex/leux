import React from "react";
import "./Button.scss";

export interface ButtonProps {
	label: string;
}

const Button = ({ label }: ButtonProps) => {
	return <button>{label}</button>;
};

export default Button;
