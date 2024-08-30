import { useTranslation } from "react-i18next";
import { radioAttr } from "./RadioAttributes";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import NotFoundPage from "../NotFound";

import { ReactComponent as enMD } from "./radio.en.md";
import { ReactComponent as esMD } from "./radio.es.md";
import { ReactComponent as ptMD } from "./radio.pt.md";

const RadioPage: React.FC = () => {
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

	return React.createElement(components[language], radioAttr);
};

export default RadioPage;
