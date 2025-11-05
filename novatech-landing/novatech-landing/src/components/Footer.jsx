import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} NovaTech — Todos os direitos reservados</div>
        <div className="text-sm">
          <a className="mr-4" href="#">LinkedIn</a>
          <a className="mr-4" href="#">Github</a>
        </div>
      </div>
    </footer>
  )
}
