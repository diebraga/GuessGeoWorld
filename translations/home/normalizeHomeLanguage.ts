import pt from './pt-BR.json'
import es from './es-ES.json'
import it from './it.json'
import en from './en-US.json'
import fr from './fr.json'
import { localeType } from '../../@types/localeType'

export function normalizeHomeLanguage(locale: localeType) {
  if (locale === "en-US") {
    return { translation: en }
  } else if (locale === "es-ES") {
    return { translation: es }
  } else if (locale === "pt-BR") {
    return { translation: pt }
  } else if (locale === "it") {
    return { translation: it }
  } else if (locale === "fr") {
    return { translation: fr }
  }
}