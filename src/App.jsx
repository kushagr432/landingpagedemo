import Hero from './components/Hero'
import WhatYoullLearn from './components/WhatYoullLearn'
import Instructor from './components/Instructor'
import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import Urgency from './components/Urgency'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Hero />
      <WhatYoullLearn />
      <Instructor />
      <Testimonials />
      <Benefits />
      <Urgency />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
