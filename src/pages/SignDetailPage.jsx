import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Shield, FileText, Phone } from 'lucide-react'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { roadSigns } from '../data/roadSigns.js'
import SignThumbnail from '../components/SignThumbnail.jsx'


export default function SignDetailPage() {
  const { signId } = useParams()
  const navigate = useNavigate()
  const { t, tr } = useLanguage()

  const sign = roadSigns.find((s) => s.id === signId)

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('contact')
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (!sign) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">{t('signDetail.notFound')}</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            {t('signDetail.backHome')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">{t('common.back')}</span>
          </button>
          <div className="font-bold text-zinc-900 text-lg">WORLD WIDE TRADE TEAM</div>
          <div className="flex items-center gap-5">
            <LanguageSwitcher variant="light" />
            <button
              onClick={goToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-6 py-2.5 rounded-xl font-semibold transition-colors"
            >
              {t('common.order')}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero block */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-12 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-9xl font-bold text-zinc-900 mb-6">
                <SignThumbnail src={sign.image} code={sign.code} alt={tr(sign.name)} />
              </div>
              <div className="inline-block bg-yellow-500 text-zinc-900 px-6 py-2 rounded-xl font-bold text-xl">
                {sign.code}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-yellow-500 text-zinc-900 px-4 py-1.5 rounded-lg font-semibold text-sm mb-4">
              {t('signDetail.badge')}
            </div>
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">{tr(sign.name)}</h1>
            <p className="text-xl text-zinc-600 mb-8">{tr(sign.description)}</p>

            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-zinc-900" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-2">{t('signDetail.purpose')}</h3>
                  <p className="text-zinc-600">{tr(sign.purpose)}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl px-6 py-5 mb-6 shadow-sm flex items-center justify-between">
              <span className="font-semibold text-zinc-700">{t('common.price')}</span>
              <span className="text-xl font-bold text-yellow-600">{t('common.onRequest')}</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={goToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                {t('signDetail.orderInstallation')}
              </button>
              <button
                onClick={goToContact}
                className="bg-white hover:bg-zinc-50 text-zinc-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors border-2 border-zinc-200"
              >
                {t('signDetail.getConsultation')}
              </button>
            </div>
          </div>
        </div>

        {/* Specs and applications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <FileText className="text-yellow-600" size={28} />
              {t('signDetail.specsTitle')}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('signDetail.size')}</span>
                <span className="text-zinc-900">{tr(sign.specifications.size)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('signDetail.material')}</span>
                <span className="text-zinc-900">{tr(sign.specifications.material)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('signDetail.reflectivity')}</span>
                <span className="text-zinc-900">{tr(sign.specifications.reflectivity)}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-zinc-700">{t('signDetail.mounting')}</span>
                <span className="text-zinc-900">{tr(sign.specifications.mounting)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <CheckCircle className="text-yellow-600" size={28} />
              {t('signDetail.applicationsTitle')}
            </h2>
            <div className="space-y-3">
              {sign.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                  <CheckCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700">{tr(app)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
            <Shield className="text-yellow-600" size={28} />
            {t('signDetail.complianceTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {sign.compliance.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-zinc-900" size={20} />
                </div>
                <span className="font-semibold text-zinc-700">{tr(cert)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">{t('signDetail.ctaTitle')}</h2>
            <p className="text-xl text-zinc-300 mb-8">{t('signDetail.ctaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                {t('signDetail.leaveRequest')}
              </button>
              <a
                href="tel:+998931234567"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                +998 (93) 123-45-67
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl">
          <h3 className="font-bold text-zinc-900 mb-2">{t('signDetail.profTitle')}</h3>
          <p className="text-zinc-700">{t('signDetail.profText')}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-400 mb-2">{t('signDetail.footerTagline')}</p>
          <p className="text-zinc-500 text-sm">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}
