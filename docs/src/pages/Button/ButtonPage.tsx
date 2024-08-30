import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "../NotFound";
import pageAttributes from "./ButtonAttributes";

import { ReactComponent as enMD } from "./button.en.md";
import { ReactComponent as ptMD } from "./button.pt.md";
import { ReactComponent as esMD } from "./button.es.md";

const ButtonPage: React.FC = () => {
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

export default ButtonPage;
