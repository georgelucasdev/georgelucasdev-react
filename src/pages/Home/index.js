import React, { useState } from 'react';
import { SiNextdotjs, SiPython, SiFlutter, SiJavascript } from 'react-icons/si';
import { FaReact, FaNode } from 'react-icons/fa';
import Concluidos from '../../components/concluidos';
import Ativos from '../../components/ativos';
import ciscopython1 from '../../img/cisco-python1.png';
import ciscopython2 from '../../img/cisco-python2.png';

export default function Home() {
    const [showInfo1, setShowInfo1] = useState(false);
    const [showInfo2, setShowInfo2] = useState(false);

    const handleButton1Click = () => {
        setShowInfo1(!showInfo1);
        setShowInfo2(false);
    };

    const handleButton2Click = () => {
        setShowInfo2(!showInfo2);
        setShowInfo1(false);
    };

    return (
        <>
            <div className="container">
                <section>
                    <h3><strong><center></center></strong></h3>
                    <p className="ctaText"></p>
                </section>
                <hr className="hr3" />
                <section>
                <h5><strong><>
                            Olá, seja bem-vindo ao meu site! Fique à vontade para explorar.<p/>
                            <br/>
                            Na aba "Quem é George Lucas", você pode saber mais sobre mim.<p/>
                            Em "Criações", encontrará meus jogos desenvolvidos e publicados em várias plataformas.<p/>
                            Por fim, em "Contato", você pode entrar em contato comigo para conversarmos sobre diversos assuntos.<p/>
                            <br/>
                            Aproveite sua visita!
                    </></strong></h5>
                </section>
                <hr className="hr3" />
                <div className="container1">
                    <div className="container4">
                        <section className="sectionItens">
                            <FaNode size={40} />
                        </section>
                        <section className="sectionItens">
                            <FaReact size={40} />
                        </section>
                        <section className="sectionItens">
                            <SiNextdotjs size={40} />
                        </section>
                        <section className="sectionItens">
                            <SiPython size={40} />
                        </section>
                        <section className="sectionItens">
                            <SiFlutter size={40} />
                        </section>
                        <section className="sectionItens">
                            <SiJavascript size={40} />
                        </section>
                    </div>
                    <div className="bb">
                        <div className="certificacao">
                            <a href="https://www.credly.com/badges/4346d242-d25a-4490-ac73-571979364c08/public_url" target="_blank" rel="noreferrer">
                                <img src={ciscopython1} alt="Certificação Cisco Python 1" />
                            </a>
                            <a href="https://www.credly.com/badges/fc0cd9a5-b62d-4b33-84b3-9337307b4da9/public_url" target="_blank" rel="noreferrer">
                                <img src={ciscopython2} alt="Certificação Cisco Python 2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
