import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { enUS, ptBR, esES } from "./resources";

export type AppLanguages = "en" | "pt-BR" | "es-ES";

export const LanguageFlagCode: Record<AppLanguages, string> = {
	en: "USA",
	"pt-BR": "BRA",
	"es-ES": "ESP",
};

export const LanguageNames: Record<AppLanguages, string> = {
	en: "English",
	"pt-BR": "Português",
	"es-ES": "Español",
};

export type LanguagesRecord<K = any> = Record<AppLanguages, K>;

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: enUS,
			},
			"pt-BR": {
				translation: ptBR,
			},
			"es-ES": {
				translation: esES,
			},
		},
		fallbackLng: "pt-BR",
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	});
