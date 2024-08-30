import React, { useMemo } from "react";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import { useTranslation } from "react-i18next";
import pageAttributes from "./DropdownAttributes";
import NotFoundPage from "../NotFound";

import { ReactComponent as enMD } from "./dropdown.en.md";
import { ReactComponent as ptMD } from "./dropdown.pt.md";
import { ReactComponent as esMD } from "./dropdown.es.md";

const DropdownPage = () => {
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

export default DropdownPage;
