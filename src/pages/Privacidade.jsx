import React from 'react'

export default function Privacidade() {
  return (
    <div className="container legal-page">
      <h1>Política de Privacidade</h1>
      
      <p>Esta página é usada para informar os visitantes do site e usuários em relação às nossas políticas com a coleta, uso e divulgação de Informações Pessoais.</p>

      <p>Se você optar por usar nosso Serviço, concorda com a coleta e uso de informações em relação a esta política. As Informações Pessoais que coletamos são usadas para fornecer e melhorar o Serviço. Não usaremos ou compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.</p>

      <h2>Coleta e Uso de Informações</h2>
      <p>Para uma melhor experiência, ao usar nosso Serviço, podemos exigir que você nos forneça certas informações de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade.</p>

      <h2>Dados de Registro</h2>
      <p>Queremos informá-lo que sempre que você usar nosso Serviço, em caso de erro, coletamos dados e informações em seu dispositivo chamado Log Data. Esses Dados de Registro podem incluir informações como o endereço do Protocolo de Internet ("IP") do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar nosso Serviço, a hora e a data de seu uso do Serviço e outras estatísticas.</p>

      <h2>Cookies</h2>
      <p>Cookies são arquivos com pequena quantidade de dados que é comumente usado como um identificador único anônimo. Este Serviço não usa esses "cookies" explicitamente. No entanto, o aplicativo pode usar código de terceiros e bibliotecas que usam "cookies" para coletar informações e melhorar seus serviços. Você tem a opção de aceitar ou recusar esses cookies.</p>

      <h2>Provedores de Serviço</h2>
      <p>Podemos empregar empresas e indivíduos terceirizados para facilitar nosso Serviço, fornecer o Serviço em nosso nome, executar serviços relacionados ao Serviço ou nos ajudar a analisar como nosso Serviço é usado.</p>

      <h2>Segurança</h2>
      <p>Valorizamos sua confiança em nos fornecer suas informações pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet é 100% seguro e confiável.</p>

      <h2>Links para Outros Sites</h2>
      <p>Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos que você revise a Política de Privacidade desses sites.</p>

      <h2>Alterações nesta Política de Privacidade</h2>
      <p>Podemos atualizar nossa Política de Privacidade de tempos em tempos. Assim, recomendamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.</p>

      <h2>Contate-nos</h2>
      <p>Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar via <a href={`https://wa.me/5521997963622`} target="_blank" rel="noreferrer">WhatsApp</a>.</p>

      <p><small>Última atualização: {new Date().toLocaleDateString('pt-BR')}</small></p>
    </div>
  )
}
