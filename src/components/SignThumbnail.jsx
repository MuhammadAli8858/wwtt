import { useState } from 'react'


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
