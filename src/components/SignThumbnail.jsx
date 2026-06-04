import { useState } from 'react'

// Shows a road-sign photo (sign.image, a file placed in /public and served from
// the site root). If no photo is set, or the file fails to load, the card falls
// back to showing the sign code as text — exactly like the original design.
export default function SignThumbnail({ src, code, alt }) {
  const [didError, setDidError] = useState(false)

  if (!src || didError) {
    return <div className="text-4xl font-bold text-zinc-900">{code}</div>
  }

  return (
    <img
      src={src}
      alt={alt || code}
      className="w-full h-full object-contain p-3"
      onError={() => setDidError(true)}
    />
  )
}
