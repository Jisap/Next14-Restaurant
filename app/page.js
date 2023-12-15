import Hero from '@/components/Hero'
import StyleGuide from '@/components/StyleGuide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      {/* <StyleGuide /> */}
      <Hero />
      <div className='h-[4000px]'></div>
    </main>
  )
}
