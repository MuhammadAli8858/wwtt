import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Shield, FileText, Phone } from 'lucide-react'
// import ImageWithFallback from '../components/figma/ImageWithFallback.jsx'
import PoleGallery from '../components/PoleGallery.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { poles } from '../data/poles.js'

export default function PoleDetailPage() {
  const { poleId } = useParams()
  const navigate = useNavigate()
  const { t, tr } = useLanguage()

  const pole = poles.find((p) => p.id === poleId)

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('contact')
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (!pole) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">{t('poleDetail.notFound')}</h1>
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
            <PoleGallery images={pole.images || [pole.image]} alt={tr(pole.type)} />
          <div>
            <div className="inline-block bg-yellow-500 text-zinc-900 px-4 py-1.5 rounded-lg font-semibold text-sm mb-4">
              {t('poleDetail.badge')}
            </div>
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">{tr(pole.type)}</h1>
            <p className="text-xl text-zinc-600 mb-8">{tr(pole.description)}</p>

            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-zinc-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">{t('poleDetail.specHeight')}</h3>
                    <p className="text-zinc-600">{tr(pole.height)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-500">{t('common.price')}</div>
                  <div className="text-xl font-bold text-yellow-600">{t('common.onRequest')}</div>
                </div>
              </div>
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
              {t('poleDetail.specsTitle')}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specHeight')}</span>
                <span className="text-zinc-900">{tr(pole.height)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specTakeaway')}</span>
                <span className="text-zinc-900">{tr(pole.takeaway)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specMaterial')}</span>
                <span className="text-zinc-900">{tr(pole.specifications.material)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specCoating')}</span>
                <span className="text-zinc-900">{tr(pole.specifications.coating)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specMounting')}</span>
                <span className="text-zinc-900">{tr(pole.specifications.mounting)}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-zinc-700">{t('poleDetail.specFoundation')}</span>
                <span className="text-zinc-900">{tr(pole.specifications.foundation)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <CheckCircle className="text-yellow-600" size={28} />
              {t('poleDetail.applicationsTitle')}
            </h2>
            <div className="space-y-3">
              {pole.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                  <CheckCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700">{tr(app)}</span>
                </div>
              ))}
            </div>
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
          <p className="text-zinc-700">{t('poleDetail.profText')}</p>
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
