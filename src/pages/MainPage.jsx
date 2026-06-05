import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Camera,
  Shield,
  Zap,
  CheckCircle,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight
} from 'lucide-react'
import ImageWithFallback from '../components/figma/ImageWithFallback.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import SignThumbnail from '../components/SignThumbnail.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { roadSigns } from '../data/roadSigns.js'
import { services } from '../data/services.js'
import { poles } from '../data/poles.js'
import { advantages, processSteps, certificates } from '../data/siteContent.js'

// Maps the advantage icon keys (stored as strings in data) to lucide components.
const ADV_ICONS = {
  shield: Shield,
  zap: Zap,
  check: CheckCircle,
  award: Award,
  camera: Camera
}

const STAT_VALUES = ['500+', '15+', '100%', '24/7']

const PROJECT_IMAGES = [
  '/projectFoto/1.png',
  '/projectFoto/2.png',
  '/projectFoto/3.png',
  '/projectFoto/4.png',
  '/projectFoto/5.png',
  '/projectFoto/6.png'
]

export default function MainPage() {
  const navigate = useNavigate()
  const { t, tr } = useLanguage()
  const [projectIndex, setProjectIndex] = useState(null)


  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { value: STAT_VALUES[0], label: t('about.stat1') },
    { value: STAT_VALUES[1], label: t('about.stat2') },
    { value: STAT_VALUES[2], label: t('about.stat3') },
    { value: STAT_VALUES[3], label: t('about.stat4') }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Camera className="text-zinc-900" size={24} />
            </div>
            <div>
              <div className="font-bold text-white text-lg">WORLD WIDE TRADE TEAM</div>
              <div className="text-xs text-zinc-400">{t('nav.subtitle')}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-zinc-300 hover:text-yellow-500 transition-colors">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('poles')} className="text-zinc-300 hover:text-yellow-500 transition-colors">{t('nav.poles')}</button>
            <button onClick={() => scrollToSection('signs')} className="text-zinc-300 hover:text-yellow-500 transition-colors">{t('nav.signs')}</button>
            <button onClick={() => scrollToSection('certificates')} className="text-zinc-300 hover:text-yellow-500 transition-colors">{t('nav.certificates')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-zinc-300 hover:text-yellow-500 transition-colors">{t('nav.contacts')}</button>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="dark" />
            <button onClick={() => scrollToSection('contact')} className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-6 py-2.5 rounded-xl font-semibold transition-colors">
              {t('nav.request')}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584527810790-01a904be796b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          alt="WORLD WIDE TRADE TEAM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-2xl text-zinc-300 mb-10 max-w-2xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <button onClick={() => scrollToSection('contact')} className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              {t('hero.getConsultation')}
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/20">
              {t('hero.orderInstallation')}
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">{t('about.title')}</h2>
              <p className="text-lg text-zinc-600 mb-4">{t('about.p1')}</p>
              <p className="text-lg text-zinc-600 mb-4">{t('about.p2')}</p>
              <p className="text-lg text-zinc-600">{t('about.p3')}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                  <div className="text-zinc-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 text-center">{t('services.title')}</h2>
          <p className="text-lg text-zinc-600 mb-12 text-center max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-zinc-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-zinc-200">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{tr(service.title)}</h3>
                <p className="text-zinc-600">{tr(service.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poles */}
      <section id="poles" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">{t('poles.title')}</h2>
          <p className="text-lg text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
            {t('poles.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {poles.map((pole) => (
              <div
                key={pole.id}
                onClick={() => navigate(`/pole/${pole.id}`)}
                className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-yellow-500 group"
              >
                <div className="h-96 overflow-hidden">
                  <ImageWithFallback
                    src={pole.image}
                    alt={tr(pole.type)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{tr(pole.type)}</h3>
                  <div className="text-yellow-500 font-semibold mb-3">{t('poles.heightLabel')} {tr(pole.height)}</div>
                  <p className="text-zinc-400 mb-4">{tr(pole.description)}</p>
                  <div className="space-y-2 mb-5">
                    <div className="font-semibold text-sm text-zinc-300">{t('poles.applicationsLabel')}</div>
                    {pole.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle size={16} className="text-yellow-500" />
                        {tr(app)}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                    <div>
                      <div className="text-xs text-zinc-500">{t('common.price')}</div>
                      <div className="font-bold text-yellow-500">{t('common.onRequest')}</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/pole/${pole.id}`)
                      }}
                      className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                    >
                      {t('common.moreDetails')}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs */}
      <section id="signs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 text-center">{t('signs.title')}</h2>
          <p className="text-lg text-zinc-600 mb-12 text-center max-w-2xl mx-auto">
            {t('signs.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {roadSigns.map((sign) => (
              <div
                key={sign.id}
                onClick={() => navigate(`/sign/${sign.id}`)}
                className="bg-zinc-50 p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-transparent hover:border-yellow-500 group"
              >
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm overflow-hidden">
                  <SignThumbnail src={sign.image} code={sign.code} alt={tr(sign.name)} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-yellow-600 transition-colors">{sign.code}</div>
                  <div className="text-xs text-zinc-600 line-clamp-2">{tr(sign.name)}</div>
                </div>
                <div className="mt-3 flex items-center justify-center text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold">{t('common.moreDetails')}</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 text-center">{t('certs.title')}</h2>
          <p className="text-lg text-zinc-600 mb-12 text-center max-w-2xl mx-auto">
            {t('certs.subtitle')}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200">
                <div className="aspect-[3/4] bg-zinc-100 rounded-xl mb-4 flex items-center justify-center">
                  <Award size={64} className="text-yellow-600" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{tr(cert.title)}</h3>
                <p className="text-sm text-zinc-600">{cert.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">{t('adv.title')}</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = ADV_ICONS[adv.icon] || Shield
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-zinc-900" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{tr(adv.title)}</h3>
                  <p className="text-sm text-zinc-600">{tr(adv.desc)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('process.title')}</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-yellow-500/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{tr(step.title)}</h3>
                <p className="text-zinc-400">{tr(step.desc)}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-500/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">{t('projects.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* {PROJECT_IMAGES.map((img, idx) => (
              <div key={idx} className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <ImageWithFallback
                  src={img}
                  alt={`${t('projects.title')} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} */}

            {PROJECT_IMAGES.map((img, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setProjectIndex(idx)}
                className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-zoom-in"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${t('projects.title')} ${idx + 4}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">{t('contact.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">{t('contact.leaveRequest')}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder={t('contact.name')}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder={t('contact.email')}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="tel"
                  placeholder={t('contact.phone')}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder={t('contact.message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-semibold py-3.5 rounded-xl transition-colors"
                >
                  {t('contact.submit')}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">{t('contact.ourContacts')}</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-zinc-900" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 mb-1">{t('contact.phoneLabel')}</div>
                  <div className="text-zinc-600">+998 (93) 123-45-67</div>
                  <div className="text-zinc-600">+998 (95) 987-65-43</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-zinc-900" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 mb-1">{t('contact.emailLabel')}</div>
                  <div className="text-zinc-600">info@wwtt.uz</div>
                  <div className="text-zinc-600">sales@wwtt.uz</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-zinc-900" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 mb-1">{t('contact.addressLabel')}</div>
                  <div className="text-zinc-600">{t('contact.addressValue')}</div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-zinc-50 rounded-2xl">
                <div className="font-semibold text-zinc-900 mb-2">{t('contact.workHours')}</div>
                <div className="text-zinc-600">{t('contact.workHours1')}</div>
                <div className="text-zinc-600">{t('contact.workHours2')}</div>
                <div className="text-zinc-600">{t('contact.workHours3')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Camera className="text-zinc-900" size={24} />
            </div>
            <div className="font-bold text-xl">WORLD WIDE TRADE TEAM</div>
          </div>
          <p className="text-zinc-400 mb-4">
            {t('footer.tagline')}
          </p>
          <p className="text-zinc-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
      <Lightbox
        images={PROJECT_IMAGES}
        index={projectIndex}
        onChange={setProjectIndex}
        onClose={() => setProjectIndex(null)}
      />
    </div>
  )
}
