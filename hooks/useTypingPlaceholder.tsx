"use client"

import { useEffect, useRef, useState } from "react"

export default function useTypingPlaceholder(
  phrases: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1500
) {
  const [text, setText] = useState<string>("")
  const [phraseIndex, setPhraseIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]

    if (!isDeleting && text === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    } else {
      timeout.current = setTimeout(
        () => setText(current.slice(0, text.length + (isDeleting ? -1 : 1))),
        isDeleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timeout.current)
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause])

  return text
}
