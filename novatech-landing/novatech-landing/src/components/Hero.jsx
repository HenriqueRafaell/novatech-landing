import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <header className="py-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-40}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">NovaTech — Soluções Digitais que impulsionam seu negócio</h1>
          <p className="mt-4 text-slate-600">Desenvolvemos produtos digitais com foco em experiência do usuário, performance e escalabilidade.</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-accent text-white font-medium">Fale conosco</a>
            <a href="#services" className="px-6 py-3 rounded-lg border border-slate-200">Nossos serviços</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Case rápido</h3>
            <p className="text-sm text-slate-600 mt-2">Ajudamos a aumentar a conversão em 28% através de melhorias no fluxo do checkout e otimizações de performance.</p>
            <div className="mt-4 flex gap-2 text-sm">
              <span className="px-3 py-1 bg-slate-100 rounded-full">Design</span>
              <span className="px-3 py-1 bg-slate-100 rounded-full">Web</span>
              <span className="px-3 py-1 bg-slate-100 rounded-full">Mobile</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
