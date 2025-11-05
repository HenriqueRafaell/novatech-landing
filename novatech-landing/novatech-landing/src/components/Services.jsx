import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {title:'Desenvolvimento Web', desc:'Aplicações modernas e responsivas em React e Node.'},
  {title:'Design de Produto', desc:'UX/UI com foco em conversão e experiência.'},
  {title:'Consultoria Cloud', desc:'Deploy e automação em cloud providers.'}
]

export default function Services(){
  return (
    <section id="services" className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Nossos serviços</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it,idx)=> (
          <motion.div key={it.title} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1*idx}} className="card p-6">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
