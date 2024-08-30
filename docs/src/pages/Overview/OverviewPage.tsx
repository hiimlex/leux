import React, { useMemo } from "react";
import { ReactComponent as enMD } from "./overview.en.md";
import { ReactComponent as esMD } from "./overview.es.md";
import { ReactComponent as ptMD } from "./overview.pt.md";

import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import { useTranslation } from "react-i18next";
import NotFoundPage from "../NotFound/NotFoundPage";

const OverviewPage: React.FC = () => {
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

	return React.createElement(components[language]);
};

export default OverviewPage;
