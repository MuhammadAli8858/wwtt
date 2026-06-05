import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ImageWithFallback from './figma/ImageWithFallback.jsx'

// Reusable near-fullscreen image viewer shown over the whole page.
// Controlled by the parent:
//   images   - array of image URLs
//   index    - number to open at that image, or null to stay closed
//   onChange - called with the new index when navigating (prev/next/arrows)
//   onClose  - called when the viewer should close (X, backdrop, Esc)
export default function Lightbox({ images = [], index = null, onChange, onClose }) {
  const open = index !== null && images.length > 0

  // Lock background scroll + arrow/Esc keys while open.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') onChange?.((index - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') onChange?.((index + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, images.length, onChange, onClose])

  if (!open) return null

  const go = (dir) => onChange?.((index + dir + images.length) % images.length)

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-start justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
      onClick={() => onClose?.()}
    >
      <button
        type="button"
        onClick={() => onClose?.()}
        aria-label="Close"
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
      >
        <X size={24} />
      </button>

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl mt-4"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={26} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
