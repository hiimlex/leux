import React from "react";
import { AvatarProps } from "./Avatar.model";
import "./Avatar.scss";

const Avatar = ({
	alt,
	size = "medium",
	src,
	asText,
	customClass,
	customStyles,
	customSize,
}: AvatarProps) => {
	const getCapitals = (str: string) =>
		str
			.split(" ")
			.map((el) => el[0])
			.join("")
			.toLocaleUpperCase();

	return (
		<div
			className={
				"le-avatar" +
				(customClass ? ` ${customClass}` : "") +
				(size ? ` le-avatar--${size}` : "") +
				(asText ? " le-avatar--text" : "")
			}
			style={{
				...customStyles,
				width: customSize,
				height: customSize,
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
