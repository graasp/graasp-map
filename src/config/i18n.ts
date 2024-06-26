/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { initReactI18next, useTranslation } from 'react-i18next';

import { buildI18n, namespaces } from '@graasp/translations';

import ar from '../langs/ar.json';
import de from '../langs/de.json';
import en from '../langs/en.json';
import es from '../langs/es.json';
import fr from '../langs/fr.json';
import it from '../langs/it.json';

const i18n = buildI18n().use(initReactI18next);

export const MAP_NAMESPACE = 'map';
i18n.addResourceBundle('ar', MAP_NAMESPACE, ar);
i18n.addResourceBundle('de', MAP_NAMESPACE, de);
i18n.addResourceBundle('en', MAP_NAMESPACE, en);
i18n.addResourceBundle('es', MAP_NAMESPACE, es);
i18n.addResourceBundle('fr', MAP_NAMESPACE, fr);
i18n.addResourceBundle('it', MAP_NAMESPACE, it);

export const useMapTranslation = () => useTranslation(MAP_NAMESPACE);
export const useCommonTranslation = () => useTranslation(namespaces.common);

export default i18n;
