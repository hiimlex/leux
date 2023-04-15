import React from "react";
import "./Modal.scss";
import { ModalProps } from "./Modal.model";

const Modal = ({ title, width, visible = true, zIndex, children, centered }: ModalProps) => {
	if (!visible) return null;

	return (
		<div className="le-modal--wrapper">
			<div className="le-modal" style={{ width, zIndex }}>
				<header className="le-modal--header">
					<h4 className="le-modal--title">{title}</h4>
					<div className="le-modal--close"></div>
				</header>
				<div className="le-modal--body">{children}</div>
			</div>
		</div>
	);
};

export { Modal };
