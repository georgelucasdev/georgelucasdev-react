import React from 'react'

export default function Termos() {
  return (
    <div className="container legal-page">
      <h1>Termos e Condições</h1>
      
      <p>Bem-vindo ao Vender Sites. Estes Termos e Condições descrevem os direitos e responsabilidades de todos os usuários do nosso Serviço.</p>

      <h2>Aceitação dos Termos</h2>
      <p>Ao acessar e usar este Serviço, você concorda em estar vinculado por estes Termos e Condições. Se você não concorda com qualquer parte destes termos, você não pode usar o Serviço.</p>

      <h2>Descrição do Serviço</h2>
      <p>Vender Sites oferece serviços de criação de websites profissionais, incluindo websites institucionais, lojas virtuais e landing pages. Os planos incluem suporte inicial de 30 dias.</p>

      <h2>Direitos de Propriedade Intelectual</h2>
      <p>O conteúdo e a estrutura do Serviço, incluindo, mas não limitado a, software, design, texto, gráficos e imagens, são propriedade exclusiva de Vender Sites ou de seus fornecedores de conteúdo e são protegidos pelas leis de propriedade intelectual.</p>

      <h2>Uso Aceitável</h2>
      <p>Você concorda em não usar o Serviço para:</p>
      <ul>
        <li>Atividades ilegais ou fraudulentas</li>
        <li>Transmitir conteúdo abusivo, ofensivo ou prejudicial</li>
        <li>Violar direitos de propriedade intelectual de terceiros</li>
        <li>Interferir com a operação do Serviço</li>
      </ul>

      <h2>Limitação de Responsabilidade</h2>
      <p>Vender Sites não será responsável por quaisquer danos indiretos, incidentes, especiais ou consequentes decorrentes do uso ou impossibilidade de usar o Serviço.</p>

      <h2>Isenção de Garantia</h2>
      <p>O Serviço é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o Serviço será ininterrupto ou isento de erros.</p>

      <h2>Modificação dos Termos</h2>
      <p>Vender Sites reserva-se o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação nesta página.</p>

      <h2>Encerramento</h2>
      <p>Vender Sites pode encerrar sua conta a qualquer momento, a seu critério absoluto, se violar qualquer disposição destes Termos e Condições.</p>

      <h2>Lei Aplicável</h2>
      <p>Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil e você irrevogavelmente concorda em se submeter à jurisdição exclusiva dos tribunais situados nesta localização.</p>

      <h2>Contate-nos</h2>
      <p>Se você tiver alguma dúvida sobre estes Termos e Condições, entre em contato via <a href={`https://wa.me/5521997963622`} target="_blank" rel="noreferrer">WhatsApp</a>.</p>

      <p><small>Última atualização: {new Date().toLocaleDateString('pt-BR')}</small></p>
    </div>
  )
}
