import { BaseSyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILink, linksArr } from "../SideNav/SideNav";
import "./Search.scss";

import { FiSearch } from "react-icons/fi";
import React from "react";
import { useTranslation } from "react-i18next";

const Search = () => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [isSearching, setIsSearching] = useState<boolean>(false);
	const [results, setResults] = useState<ILink[]>([]);
	const navigate = useNavigate();
	const searchRef = useRef<HTMLInputElement | null>(null);
	const { t } = useTranslation();

	const handleOnSearchChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;

		if (value) {
			setIsSearching(true);
			const filteredResults = linksArr.filter((link) =>
				link.name.toLowerCase().includes(value.toLowerCase())
			);

			setResults(filteredResults.map((link) => link));
		} else {
			setIsSearching(false);
			setResults([]);
		}
	};

	const navigateTo = (path: string) => {
		navigate(path);

		if (searchRef.current && searchRef.current.value) {
			searchRef.current.value = "";
		}

		setIsSearching(false);
	};

	return (
		<div className="le-search">
			<input
				ref={searchRef}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className="le-search--input"
				placeholder={t("Header.Search")}
				onChange={handleOnSearchChange}
			/>
			<div className={"le-search--icon" + (isFocused ? " le-search--icon-focus" : "")}>
				<FiSearch size={16}></FiSearch>
			</div>
			{isSearching && (
				<div className="le-search--dropdown">
					{results.length > 0 ? (
						results.map((link, index) => (
							<a
								key={index}
								className="le-search--dropdown-link"
								onClick={() => navigateTo(link.path)}
							>
								{link.name}
							</a>
						))
					) : (
						<span className="le-search--dropdown-empty">{t("Header.NoResults")}</span>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
