import pt from './pt-BR.json'
import es from './es-ES.json'
import it from './it.json'
import en from './en-US.json'

export function normalizeHeaderLanguage(locale: string) {
  if (locale === "en-US") {
    return { translation: en }
  } else if (locale === "es-ES") {
    return { translation: es }
  } else if (locale === "pt-BR") {
    return { translation: pt }
  } else if (locale === "it") {
    return { translation: it }
  }
}