import React from 'react'

export default function Reembolso() {
  return (
    <div className="container legal-page">
      <h1>Política de Reembolso</h1>
      
      <p>Na Vender Sites, compreendemos a importância de oferecer um serviço de qualidade e estamos comprometidos em proteger seus interesses.</p>

      <h2>Período de Reembolso</h2>
      <p>Oferecemos um período de reembolso de 7 (sete) dias corridos a partir da data de compra/contratação do serviço, desde que nenhum trabalho significativo tenha sido realizado ou conteúdo enviado ao cliente.</p>

      <h2>Condições para Reembolso</h2>
      <p>O reembolso será concedido quando:</p>
      <ul>
        <li>Solicitado dentro de 7 dias da contratação</li>
        <li>O site não foi iniciado ou encontra-se em fase inicial</li>
        <li>Nenhum conteúdo ou dados do cliente foram utilizados ou armazenados</li>
      </ul>

      <h2>Quando Reembolso Não é Concedido</h2>
      <p>Reembolsos não serão concedidos se:</p>
      <ul>
        <li>O período de 7 dias já expirou</li>
        <li>Trabalho substancial já foi realizado no projeto</li>
        <li>O site foi entregue ou colocado em operação</li>
        <li>O cliente solicitou modificações ou customizações específicas</li>
      </ul>

      <h2>Como Solicitar Reembolso</h2>
      <p>Para solicitar um reembolso, envie uma mensagem via <a href={`https://wa.me/5521997963622`} target="_blank" rel="noreferrer">WhatsApp</a> informando o motivo da solicitação. Avaliaremos sua solicitação dentro de 3 (três) dias úteis.</p>

      <h2>Processamento de Reembolso</h2>
      <p>Se aprovado, o reembolso será processado através do mesmo método de pagamento utilizado na compra original. O tempo de processamento pode variar de 3 a 7 dias úteis, dependendo de sua instituição financeira.</p>

      <h2>Garantia de Satisfação</h2>
      <p>Estamos comprometidos em entregar um serviço de qualidade. Se você não está satisfeito com nosso trabalho durante o período de consultoria, estaremos disponíveis para realizar ajustes dentro do escopo acordado.</p>

      <h2>Serviços em Andamento</h2>
      <p>Para projetos em andamento após o período de 7 dias, oferecemos a opção de pausar o projeto e receber um reembolso proporcional ao trabalho não realizado, dependendo dos termos de consultoria acordados.</p>

      <h2>Alterações na Política de Reembolso</h2>
      <p>Vender Sites reserva-se o direito de modificar esta Política de Reembolso a qualquer momento. Notificaremos nossos clientes sobre quaisquer alterações significativas.</p>

      <h2>Contate-nos</h2>
      <p>Se você tiver dúvidas sobre nossa Política de Reembolso, entre em contato conosco via <a href={`https://wa.me/5521997963622`} target="_blank" rel="noreferrer">WhatsApp</a> ou envie um email para contato@vendersites.ex.</p>

      <p><small>Última atualização: {new Date().toLocaleDateString('pt-BR')}</small></p>
    </div>
  )
}
