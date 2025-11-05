import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
