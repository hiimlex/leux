import { LePreview, LeSourceButton } from "@/components";
import { useContext, useState } from "react";
import { Button, ModalContext } from "../../../../src";
import { attributes as modalAttr } from "./modal.md";

const ModalUsagePreview = () => {
	const ModalService = useContext(ModalContext);

	const handleOpenModal = () => {
		if (ModalService) {
			ModalService.createModal({
				id: "modal-usage",
				title: "How to ",
				children: <p>Modal usage</p>,
				visible: true,
			});
		}
	};

	return (
		<>
			<LePreview>
				<Button onClick={handleOpenModal}>Abrir modal</Button>
			</LePreview>
		</>
	);
};

modalAttr["LeSourceButton"] = LeSourceButton;
modalAttr["ModalUsagePreview"] = ModalUsagePreview;

export { modalAttr };
