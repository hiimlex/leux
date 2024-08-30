import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "../NotFound";
import pageAttributes from "./BoxAttributes";

import { ReactComponent as enMD } from "./box.en.md";
import { ReactComponent as esMD } from "./box.es.md";
import { ReactComponent as ptMD } from "./box.pt.md";

const BoxPage: React.FC = () => {
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

export default BoxPage;
