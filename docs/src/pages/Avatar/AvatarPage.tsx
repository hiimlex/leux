import React, { useMemo } from "react";
import { avatarAttr } from "./AvatarAttributes";
import { useTranslation } from "react-i18next";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";

import { ReactComponent as enMD } from "./avatar.en.md";
import { ReactComponent as ptMD } from "./avatar.pt.md";
import { ReactComponent as esMD } from "./avatar.es.md";
import NotFoundPage from "../NotFound";

const AvatarPage = () => {
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

	return React.createElement(components[language as AppLanguages], avatarAttr);
};

export default AvatarPage;
