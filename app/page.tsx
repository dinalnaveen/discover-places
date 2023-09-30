import Image from 'next/image'
import Hero from './components/Hero'
import Results from './components/Results'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Results/>
    </div>
  )
}
