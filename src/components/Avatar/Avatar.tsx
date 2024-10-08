import React from "react";
import { AvatarProps } from "./Avatar.model";
import "./Avatar.scss";

const Avatar: React.FC<AvatarProps> = ({
	alt,
	size = "medium",
	src,
	asText,
	customClass,
	customStyles,
	customSize,
}) => {
	const getCapitals = (str: string) =>
		str
			.split(" ")
			.map((el) => el[0])
			.join("")
			.toLocaleUpperCase();

	if (customSize) {
		customStyles = {
			...customStyles,
			width: customSize,
			height: customSize,
		};
	}

	return (
		<div
			className={`le-avatar ${size ? " le-avatar--" + size : ""}${
				asText ? " le-avatar--text" : ""
			} ${customClass ? customClass : ""}`}
			style={{
				...customStyles,
			}}
			data-testid="leuxAvatar"
		>
			{!asText ? (
				<img src={src} alt={alt} className={`le-avatar--img`} />
			) : (
				<span className="le-avatar--text">{getCapitals(src)}</span>
			)}
		</div>
	);
};

export { Avatar };
