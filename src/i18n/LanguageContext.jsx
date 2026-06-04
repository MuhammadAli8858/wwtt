import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations.js'

// Available languages and how they appear in the switcher.
export const LANGUAGES = [
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'uz', label: "O‘zbek", short: 'UZ' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: 'ZH' },
  { code: 'kk', label: 'Қазақша', short: 'KK' },
  { code: 'be', label: 'Беларуская', short: 'BE' },
  { code: 'tr', label: 'Türkçe', short: 'TR' },
  
]

const DEFAULT_LANG = 'ru'
const STORAGE_KEY = 'wwtt_lang'

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
  tr: (field) => field,
})

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && translations[saved]) return saved
  } catch (e) {
    /* localStorage may be unavailable */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = (next) => {
    if (translations[next]) setLangState(next)
  }

  // Translate a UI string key.
  const t = (key) => {
    const dict = translations[lang] || translations[DEFAULT_LANG]
    return dict[key] ?? translations[DEFAULT_LANG][key] ?? key
  }

  // Translate a multilingual data field, e.g. { ru: '...', en: '...' }.
  const tr = (field) => {
    if (field == null) return ''
    if (typeof field === 'string') return field
    return field[lang] ?? field[DEFAULT_LANG] ?? ''
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
