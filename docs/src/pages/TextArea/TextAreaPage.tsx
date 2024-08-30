import { useTranslation } from "react-i18next";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import { useMemo } from "react";
import { textAreaAttr } from "./TextAreaAttributes";
import NotFoundPage from "../NotFound";

import { ReactComponent as enMD } from "./textarea.en.md";
import { ReactComponent as ptMD } from "./textarea.pt.md";
import { ReactComponent as esMD } from "./textarea.es.md";
import React from "react";

const TextAreaPage = () => {
	const { i18n } = useTranslation();
	const language: AppLanguages = useMemo(() => i18n.language as AppLanguages, [i18n.language]);

	const components: LanguagesRecord<React.FC> = {
		en: enMD,
		"pt-BR": ptMD,
		"es-ES": esMD,
	};

	if (!components[language]) {
		return <NotFoundPage />;
	}

	return React.createElement(components[language], textAreaAttr);
};

export default TextAreaPage;
