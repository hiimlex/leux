import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import pageAttributes from "./CheckboxAttributes";
import NotFoundPage from "../NotFound";

import { ReactComponent as enMD } from "./checkbox.en.md";
import { ReactComponent as esMD } from "./checkbox.es.md";
import { ReactComponent as ptMD } from "./checkbox.pt.md";

const CheckboxPage: React.FC = () => {
	const { i18n } = useTranslation();
	const language: AppLanguages = useMemo(() => i18n.language as AppLanguages, [i18n.language]);

	const components: LanguagesRecord<React.FC> = {
		en: enMD,
		"pt-BR": ptMD,
		"es-ES": esMD,
	};

	if (!components[language as AppLanguages]) {
		return <NotFoundPage />;
	}

	return React.createElement(components[language as AppLanguages], pageAttributes);
};

export default CheckboxPage;
