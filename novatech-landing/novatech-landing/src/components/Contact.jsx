import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [status,setStatus] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !email || !message){ setStatus('Por favor preencha todos os campos.'); return }
    const submissions = JSON.parse(localStorage.getItem('novatech_submissions') || '[]')
    submissions.push({name,email,message,date:new Date().toISOString()})
    localStorage.setItem('novatech_submissions', JSON.stringify(submissions))
    setStatus('Mensagem enviada com sucesso! (simulação local)')
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <section id="contact" className="mt-12 mb-20">
      <h2 className="text-2xl font-semibold mb-4">Fale conosco</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.form initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} onSubmit={handleSubmit} className="card p-6">
          <input className="w-full p-3 border rounded mb-3" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full p-3 border rounded mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <textarea className="w-full p-3 border rounded mb-3" placeholder="Mensagem" value={message} onChange={e=>setMessage(e.target.value)} />
          <button className="px-4 py-2 bg-accent text-white rounded">Enviar mensagem</button>
          {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
        </motion.form>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="p-6">
          <h3 className="font-semibold">Endereço</h3>
          <p className="text-sm text-slate-600 mt-2">Avenida Exemplo, 123 — Osasco/SP</p>
          <h3 className="font-semibold mt-4">Telefone</h3>
          <p className="text-sm text-slate-600 mt-2">(11) 9XXXX-XXXX</p>
        </motion.div>
      </div>
    </section>
  )
}
