# NovaTech — Landing Page (React + Tailwind + Framer Motion)


## Como usar
1. Instalar dependências:
```
npm install
```
2. Rodar em dev:
```
npm run dev
```
3. Acesse http://localhost:5173

## Observações
- O formulário está simulado e salva submissões em localStorage (`novatech_submissions`).
- Se preferir integração real de email, é possível adicionar EmailJS — instruções na seção "Integração EmailJS" abaixo.

### Integração EmailJS (opcional)
1. Crie conta em https://www.emailjs.com e gere Service ID, Template ID e User/Public Key.
2. Instale o pacote `emailjs-com` e substitua a lógica de `handleSubmit` em `src/components/Contact.jsx` para enviar via `emailjs.send`.
3. Configure variáveis no frontend ou use env durante build.

---
Desenvolvido por Henrique Rafael — pronto para adicionar ao portfólio.
