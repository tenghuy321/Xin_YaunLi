import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'
import ch from './locales/ch/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en : {translation: en},
        ch : {translation: ch}
    },
    fallbackLng : 'en',
    interpolation: {
        escapeValue : false
    } 
})

export default i18n;