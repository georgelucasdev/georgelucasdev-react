import React from 'react'

export default function FAQ() {
  const [open, setOpen] = React.useState(null)

  const items = [
    {
      q: 'Quanto tempo leva para entregar um site?',
      a: 'Sites simples (Essencial) levam 7-14 dias. Planos maiores podem levar até 30 dias, conforme a complexidade e o volume de conteúdo fornecido.'
    },
    {
      q: 'Posso alterar o site depois de pronto?',
      a: 'Sim! Oferecemos 30 dias de suporte inicial para ajustes. Após isso, oferecemos planos de manutenção mensal ou você pode fazer alterações diretamente.'
    },
    {
      q: 'Qual é a melhor forma de começar?',
      a: 'Entre em contato pelo WhatsApp! Faremos uma consulta rápida para entender suas necessidades, então enviaremos um orçamento personalizado.'
    },
    {
      q: 'Preciso fornecer conteúdo e imagens?',
      a: 'Sim. Você fornece o conteúdo e imagens, e nós criamos o design. Se preferir, oferecemos consultoria para definir a estrutura e conteúdo.'
    },
    {
      q: 'O site é responsivo (mobile)?',
      a: 'Claro! Todos os nossos sites são 100% responsivos e otimizados para celular, tablet e desktop.'
    },
    {
      q: 'Vocês fazem SEO?',
      a: 'Sim, todos os planos incluem SEO básico (tags meta, estrutura, velocidade). Para SEO avançado, oferecemos consultoria adicional.'
    }
  ]

  return (
    <section id="faq" className="faq container">
      <h2>Perguntas Frequentes</h2>
      <div className="faq-list">
        {items.map((item, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
