import styles from '../styler.css';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col} from "reactstrap";
import bb from '../img/aventuras-bb.jpg'
import fall from '../img/fallbeans.png'
import aguas from '../img/aguas.jpg'
import classsicblocks from '../img/classicblocks.png'
import desafio from '../img/desafio.png'
import puzzle from '../img/puzzle.jpg'
import tap from '../img/tap.jpg'
import casa from '../img/casa.png'



export default function Concluidos() {
    return (
      <>
      <center>
           <div className={styles.productlist}>
            <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.georgelucas.seashark" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={bb}
                    alt="Aventuras Bebê Tubarão"
                  />  
                  </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Aventuras Bebê Tubarão</strong></CardTitle>
                    <CardText>
                      Aventuras do Bebê Tubarão é um jogo emocionante e divertido que leva os jogadores a explorar o oceano em busca de tesouros e aventuras.
                      Neste jogo, você assume o papel do adorável Bebê Tubarão, um pequeno tubarão que está determinado a encontrar o maior tesouro do oceano.
                      <br/>
                      <br/>
                      Ao longo do caminho, você enfrentará vários desafios, incluindo obstáculos subaquáticos, inimigos ferozes e quebra-cabeças intrigantes.
                      Você precisará usar suas habilidades de natação e estratégia para superar esses obstáculos e chegar ao tesouro final.
                      <br/>
                      <br/>
                      O jogo apresenta gráficos vibrantes e animações divertidas que certamente encantarão jogadores de todas as idades. Com várias missões
                      emocionantes e objetivos para alcançar, Aventuras do Bebê Tubarão
                      é um jogo envolvente e cativante que oferece horas de entretenimento para jogadores de todas as habilidades. Pronto para mergulhar nessa aventura submarina?
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.fallbeans.app" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={fall}
                    alt="Fallbeans"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Fallbeans</strong></CardTitle>
                      <CardText>
                        Fallbeans é um emocionante jogo de batalha multiplayer onde feijões se enfrentam em uma arena,
                        em uma dinâmica muito parecida com o popular jogo no mercado. Com uma jogabilidade divertida e viciante, os jogadores devem saltar, correr,
                        desviar e empurrar seus adversários para fora da arena, em uma competição acirrada pela vitória.<br/>
                        Os feijões estão equipados com diferentes habilidades e poderes especiais, tornando cada partida única e imprevisível.<br/>
                        Os jogadores podem personalizar seus personagens com roupas e acessórios, criando um visual único e exclusivo para o seu feijão.<br/>
                        Com gráficos coloridos e animações divertidas, Fallbeans é um jogo que agrada a jogadores de todas as idades.<br/>
                        Desafie seus amigos ou jogue contra jogadores de todo o mundo, em uma competição emocionante e cheia de adrenalina.<br/>
                        Vença partidas, suba no ranking e torne-se o grande campeão de Fallbeans!
                      </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
         <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.glapp.house" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={casa}
                    alt="Pinte Casas"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Pinte Casas</strong></CardTitle>
                    <CardText>
                      Pinte Casas é um jogo inovador e envolvente que combina elementos de criatividade, estratégia e gestão de recursos de uma forma elegante e sofisticada.
                      No cerne do jogo, os jogadores são desafiados a exercitar suas habilidades artísticas e sentido estético ao criar pinturas de casas deslumbrantes e únicas.
                      <br/>
                      O objetivo do jogo é proporcionar aos jogadores um ambiente virtual inspirador onde possam explorar diferentes técnicas de pintura,
                      cores e estilos para personalizar casas em cenários variados. Essa abordagem permite que os jogadores aprimorem suas habilidades cognitivas,
                      como atenção aos detalhes, pensamento crítico e tomada de decisões, à medida que esculpem sua própria vila única.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
                     <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.jogos.classicblocks" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={classsicblocks}
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>ClassicBlocks</strong></CardTitle>
                    <CardText>
                      O princípio básico do ClassicBlocks consiste em manipular e encaixar perfeitamente formas geométricas variadas,
                      conhecidas como tetriminos, enquanto elas caem em cascata na área de jogo. Cada tetrimino é composto por quatro quadrados menores,
                      configurados em diferentes disposições. Os jogadores devem rotacionar e ajustar rapidamente essas peças,
                      a fim de preencher linhas horizontais completas na matriz do jogo.
                      Quando uma linha é preenchida, ela desaparece, liberando espaço para mais tetriminos e acumulando pontos cruciais para o jogador.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
                     <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.tap.market" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={tap}
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Tap Market</strong></CardTitle>
                    <CardText>
                    Tap Market é um jogo de simulação inovador e envolvente que coloca os jogadores no papel de funcionários de um mercado em expansão.
                     O objetivo principal do jogo é gerenciar e organizar as prateleiras do mercado,
                     garantindo que todos os produtos estejam adequadamente estocados e dispostos para atrair a atenção dos clientes e impulsionar as vendas.
                    <br/>
                    <br/>
                    Com uma abordagem pedagógica baseada na psicologia cognitiva, o Tap Market explora o conceito de atenção seletiva e a
                    capacidade de um indivíduo de se concentrar em detalhes específicos,
                    enquanto ignora informações irrelevantes. Os jogadores devem aplicar essas habilidades
                    ao longo do jogo, identificando rapidamente quais prateleiras precisam ser reabastecidas e quais produtos estão em falta.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
                     <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.j29.queda" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={puzzle}
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Puzzle Wild</strong></CardTitle>
                    <CardText>
                    Puzzle Wild é um jogo envolvente e desafiador que combina elementos de lógica, estratégia e habilidade cognitiva para proporcionar
                    aos jogadores uma experiência única e estimulante. Com um enfoque em combinações de peças e resolução de objetivos, este jogo é
                    projetado para testar as capacidades mentais dos jogadores, enquanto apresenta conceitos complexos de maneira clara e acessível.
                    <br/>
                    <br/>
                    No núcleo de Puzzle Wild, os jogadores são confrontados com uma variedade de cenários e desafios que exigem a identificação e
                    implementação de soluções criativas através da combinação e manipulação de peças. Essas peças, que variam em forma, cor e função,
                    devem ser organizadas de maneira específica para atingir o objetivo de cada nível. Ao fazer isso, os jogadores empregam habilidades
                    cognitivas e de resolução de problemas críticos, semelhantes às utilizadas na programação e engenharia de computação.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
                     <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.glapp.retangulo" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={desafio}
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Desafio: Retângulo Max</strong></CardTitle>
                    <CardText>
                    Retângulo Max é um jogo desafiador e intrigante que envolve habilidades cognitivas e de coordenação para os jogadores.
                    Baseado no princípio de construir uma torre com precisão e sincronia, este jogo oferece aos jogadores a oportunidade de
                    explorar os conceitos de percepção espacial, tempo e paciência.
                    <br/>
                    <br/>
                    A mecânica central do jogo consiste em empilhar retângulos de diferentes tamanhos para formar uma torre cada vez mais alta.
                     Para ter sucesso, o jogador deve acertar o momento exato para posicionar os retângulos uns sobre os outros, garantindo
                     estabilidade e altura crescente. O grau de dificuldade aumenta progressivamente à medida que o jogador avança no jogo e enfrenta 
                     retângulos de tamanhos distintos e velocidades variáveis.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
                     <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.glapp.garrafa" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={aguas}
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Águas Coloridas</strong></CardTitle>
                    <CardText>
                    Aguas Coloridas é um jogo sofisticado e desafiador que coloca à prova a capacidade cognitiva dos jogadores, 
                    exigindo habilidades de raciocínio lógico, análise e resolução de problemas. O principal objetivo do jogo é encher jarras de água com cores 
                    específicas, no entanto, as cores estão inicialmente misturadas dentro de outras jarras, criando uma complexa rede de combinações cromáticas.
                    <br/>
                    <br/>
                    O jogo se baseia em conceitos fundamentais da ciência das cores e na psicologia da percepção. 
                    Os jogadores precisam aplicar seus conhecimentos sobre mistura de cores e desenvolver estratégias eficientes para atingir os 
                    objetivos estabelecidos. Além disso, Aguas Coloridas também estimula a memória e a atenção, já que os jogadores devem lembrar-se das 
                    cores e das posições das jarras para tomar decisões informadas durante o jogo.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          </center>
          </>
    );
  }