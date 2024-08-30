import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "../NotFound";
import pageAttributes from "./TypographyAttributes";

import { ReactComponent as enMD } from "./typography.en.md";
import { ReactComponent as ptMD } from "./typography.pt.md";
import { ReactComponent as esMD } from "./typography.es.md";

const TypographyPage = () => {
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

	return React.createElement(components[language], pageAttributes);
};

export default TypographyPage;
