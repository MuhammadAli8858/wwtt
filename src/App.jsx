import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx' 
import MainPage from './pages/MainPage.jsx'
import SignDetailPage from './pages/SignDetailPage.jsx'
import PoleDetailPage from './pages/PoleDetailPage.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign/:signId" element={<SignDetailPage />} />
          <Route path="/pole/:poleId" element={<PoleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
