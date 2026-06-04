import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ImageWithFallback from './figma/ImageWithFallback.jsx'


export default function PoleGallery({ images = [], alt = '' }) {
  const pics = images.filter(Boolean)
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

useEffect(() => {
  if (!open) return
  const prevOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'       
  const onKey = (e) => {
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }
  window.addEventListener('keydown', onKey)
  return () => {
    document.body.style.overflow = prevOverflow
    window.removeEventListener('keydown', onKey)
  }
}, [open, pics.length])
  

  if (pics.length === 0) return null

  const current = Math.min(active, pics.length - 1)
  const go = (dir) => setActive((i) => (i + dir + pics.length) % pics.length)
  

  return (
    <div>
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="overflow-hidden">
          <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {pics.map((src, i) => (
                // <div key={i} className="shrink-0 w-full h-full">
                <div key={i} onClick={() => setOpen(true)} className="shrink-0 w-full h-full cursor-zoom-in">
                  <ImageWithFallback
                    src={src}
                    alt={`${alt} ${i + 45}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
        </div>

        {pics.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
            >
              <ChevronLeft size={22} className="text-zinc-900" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
            >
              <ChevronRight size={22} className="text-zinc-900" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {current + 1} / {pics.length}
            </div>
          </>
        )}
      </div>

      {pics.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {pics.map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                i === current ? 'border-yellow-500' : 'border-transparent hover:border-zinc-300'
              }`}
            >
              <ImageWithFallback
                src={src}
                alt={`${alt} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {open && (
         <div
           className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-start justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
           onClick={() => setOpen(false)}
         >
           <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-4 right-4 ...">
             <X size={24} />
           </button>
             
           <img
             src={pics[current]}
             alt={`${alt} ${current + 3}`}
             onClick={(e) => e.stopPropagation()}
             className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl mt-4"
           />

           {/* стрелки ‹ › и счётчик 1 / N */}

         </div>
       )}

    </div>
  )
}
