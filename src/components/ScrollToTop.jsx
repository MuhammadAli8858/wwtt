import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change, jump back to the top of the page.
// In a single-page app the browser keeps the previous scroll position when the
// route changes, so without this a detail page would open part-way down
// (wherever the card was on the main page) instead of at the top.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
