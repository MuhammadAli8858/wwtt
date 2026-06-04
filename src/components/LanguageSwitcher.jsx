import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useLanguage, LANGUAGES } from '../i18n/LanguageContext.jsx'

// variant: 'dark' for the dark MainPage header, 'light' for the white detail headers.
export default function LanguageSwitcher({ variant = 'dark' }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]
  const isDark = variant === 'dark'

  const triggerCls = isDark
    ? 'text-zinc-300 hover:text-yellow-500'
    : 'text-zinc-600 hover:text-zinc-900'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        className={`flex items-center gap-1.5 transition-colors ${triggerCls}`}
      >
        <Globe size={18} />
        <span className="text-sm font-semibold">{current.short}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-zinc-200 py-2 z-[60]">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-zinc-50 ${
                l.code === lang ? 'text-yellow-600 font-semibold' : 'text-zinc-700'
              }`}
            >
              <span>{l.label}</span>
              {l.code === lang && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
