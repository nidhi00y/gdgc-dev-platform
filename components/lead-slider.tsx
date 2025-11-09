'use client'

import { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
import LeadCard from './lead-card'
import { Inter } from 'next/font/google'

interface Lead {
  name: string
  domain: string
  image: string
  icon: string
}

interface Props {
  list: Lead[]
}

const inter = Inter({
    subsets: ["latin"]
})

const Leadcarasoul: NextPage<Props> = ({ list }) => {
  const [active, setActive] = useState(1)
  const [cardsPerView, setCardsPerView] = useState(3)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3)
      else setCardsPerView(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () =>
    setActive((prev) => (prev + 1) % list.length)

  const prevSlide = () =>
    setActive((prev) => (prev - 1 + list.length) % list.length)

  const extendedList = [...list, ...list, ...list]
  const middleIndex = Math.floor(extendedList.length / 3)

  return (
    <div
      className="relative flex justify-center items-center w-full overflow-hidden select-none"
    >
      <button
        onClick={prevSlide}
        className={`absolute hover:brightness-75 transition-all bottom-[4%] border-2 border-white left-0 z-10 bg-[#50FFAF] font-bold w-20 h-20 flex justify-center items-center text-5xl p-3 rounded-full ${inter.className} lg:scale-100 md:scale-75 scale-50 md:bottom-auto md:border-0`}
      >
        {`<`}
      </button>

      <div className="overflow-hidden w-[90vw]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
              transform: `translateX(-${((active - Math.floor(cardsPerView / 2) + middleIndex) * 100) / cardsPerView}%)`,
          }}
          >
          {extendedList.map((lead, i) => {
              const centerIndex = active + middleIndex
              const isFocused = i === centerIndex
              
              return (
                  <div
                  key={i}
                  className="flex-shrink-0 p-2 transition-transform duration-500 flex justify-center"
                  style={{
                      width: `${100 / cardsPerView}%`,
                      transform: `scale(${isFocused ? 1 : 0.8})`,
                    }}
                    >
                <LeadCard
                  name={lead.name}
                  domain={lead.domain}
                />
              </div>
            )
        })}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className={`absolute hover:brightness-75 border-2 transition-all border-white bottom-[4%] right-0 z-10 bg-[#50FFAF] font-bold w-20 h-20 flex justify-center items-center text-5xl p-3 rounded-full ${inter.className} lg:scale-100 md:scale-75 scale-50 md:bottom-auto md:border-0`}
        >
          {`>`}
      </button>
    </div>
  )
}

export default Leadcarasoul
