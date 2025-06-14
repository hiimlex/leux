import React, { useMemo } from "react";
import { leClassNames, TestId } from "../../types";
import { AvatarProps } from "./Avatar.model";
import "./Avatar.scss";
import { getCapitals } from "../../utils";

const Avatar: React.FC<AvatarProps> = ({
	alt,
	size = "medium",
	src,
	asText,
	customClass,
	customStyles,
	customSize,
}) => {
	const styles = useMemo(
		() => ({
			...customStyles,
			width: customSize || customStyles?.width,
			height: customSize || customStyles?.height,
		}),
		[customStyles, customSize]
	);

	const capital = useMemo(() => getCapitals(src), [src]);

	const classNames = useMemo(
		() =>
			leClassNames(["le-avatar", `le-avatar--${size}`, asText && "le-avatar--text", customClass]),
		[size, asText, customClass]
	);

	return (
		<div className={classNames} style={styles} data-testid={TestId.Avatar}>
			{!asText ? (
				<img src={src} alt={alt} className="le-avatar--img" />
			) : (
				<span className="le-avatar--text">{capital}</span>
			)}
		</div>
	);
};

export { Avatar };
