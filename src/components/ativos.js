import styles from '../styler.css';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col} from "reactstrap";
import ai from '../img/inteligencia.png'
import leitura from '../img/leitura.png'


export default function Ativos() {
    return (
      <>
      <center>
           <div className={styles.productlist} id="projetos">
            <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.chat.gptbr" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={ai}
                    alt="Inteligência Artificial"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Inteligência Artificial</strong></CardTitle>
                    <CardText>
                        Treinamos um modelo chamado AI que interage de forma conversacional.
                        O formato de diálogo permite que o AI responda a perguntas de acompanhamento, admita seus erros,
                        conteste premissas incorretas e rejeite solicitações inadequadas.
                        Nosso trabalho para criar uma IA segura e benéfica requer uma compreensão
                        profunda dos riscos e benefícios potenciais, bem como uma consideração cuidadosa do impacto.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="https://play.google.com/store/apps/details?id=com.aprendizado.escola" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={leitura}
                    alt="Leitura Magica"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Pré-Escola: Leitura Mágica</strong></CardTitle>
                    <CardText>
                          Com Leitura Mágica, as crianças podem aprender a ler de uma maneira divertida e cativante.
                          Nosso aplicativo oferece uma variedade de jogos e atividades interativas que ajudam as crianças a desenvolver
                          habilidades essenciais de leitura, como reconhecimento de letras, compreensão de palavras e leitura fluente.
                          Com personagens encantadores, histórias envolventes e desafios emocionantes, Leitura Mágica transforma
                          o aprendizado em uma experiência mágica e inesquecível. E o melhor de tudo: tudo é adaptado à idade
                          e ao nível de habilidade da criança, garantindo que cada aluno receba a atenção individualizada
                          de que precisa para ter sucesso. Com Leitura Mágica, a leitura nunca foi tão divertida!
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="/" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src="https://via.placeholder.com/150x150"
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle><strong>Nome</strong></CardTitle>
                    <CardText>Descrição do produto 2</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row> */}
          </div>
          </center></>
    );
  }