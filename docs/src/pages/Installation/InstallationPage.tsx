import { LeHighlighter } from "@/components";

import React, { useMemo } from "react";
import NotFoundPage from "../NotFound";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import { useTranslation } from "react-i18next";

import { ReactComponent as enMD } from "./installation.en.md";
import { ReactComponent as esMD } from "./installation.es.md";
import { ReactComponent as ptMD } from "./installation.pt.md";

const NpmCode = () => (
	<LeHighlighter
		language="bash"
		code={`npm install leux

yarn install leux`}
	/>
);

const pageAttributes: Record<string, any> = {};
pageAttributes["NpmCode"] = NpmCode;

const InstallationPage = () => {
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

export default InstallationPage;
