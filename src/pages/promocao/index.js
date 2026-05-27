import React from 'react';
import imgPs5 from '../../img/ps5.jpg';
import imgPc from '../../img/pcgamer.jpg';
import imgNotebook from '../../img/note.jpg';
import imgMouse from '../../img/mause.jpg';
import imgTeclado from '../../img/teclado.jpg';
import imgGeneric from '../../img/fone.jpg';

export default function Promocao() {
  const products = [
    {
      title: 'PlayStation 5 Slim Digital (825GB)',
      description: 'Console PlayStation 5 Slim Digital — edição Turismo. Confira o preço e disponibilidade em promoção.',
      image: imgPs5,
      link: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J/ref=sr_1_5?crid=1VH2HM16UZHF6&dib=eyJ2IjoiMSJ9._FCLhj9XU-hEdG3fD-U35AWC_nXXGOATFG0xFuzDd3lOB1AHgfSJ0JYGymyfvLHkwtgFIPbr7rLP7Ge-nvDpgdcwU2MGmyqGvuZ59s0lsbndJ3_Yc5PcG-EydRdOATESq3pHeKw2CzVutavr0rkDTLduHnkF0EvmqJQSUiU2l0cfmdAPGbrJGnrFNDpaPIJwcYHgWfQDGxKtpgU0I6fjxbfQVKymg-kFv1_-6z8WeM1aQIhR3VIs22IG3DeWAR39wrc3sHHt4s7CClcPberxQYXLNKSLm53-3A86zPLr_vY.n-wQ7W7GD5ahP5-s3pdAa004X7eDX0TLXdi6TkiUBeE&dib_tag=se&keywords=playstation+5&qid=1779898177&sprefix=plays%2Caps%2C207&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'
    },
    {
      title: 'Gamer Ryzen 5600GT',
      description: 'Computador Gamer com Ryzen 5600GT e memória 3200MHz — peça ideal para jogos de alta performance.',
      image: imgPc,
      link: 'https://www.amazon.com.br/Gamer-Ryzen-5600GT-Placa-M%C3%A3e-3200MHz/dp/B0GV5GYVHP/ref=sr_1_12?crid=16GBVF85F4NGY&dib=eyJ2IjoiMSJ9.9I48EQ_OQKOMU5o_ZEsZ2O8vN2_DiqtpGuEaO9sl9DO6X_YZnXOycFEFYgyNBG0LFoYSMpTqoYnHSruS5Fvhn6pPI0T5z_UeSWDXiHP99MjojOdkM2JsAbIbsJbBPwdcxY_MJXovSfwtcjnilIhDfbIua7bbT4fNq2FaeYMZyPYcivvOZ6z6ZpAbXAZ-T84lE-eV5IMrCuDQMkvmmcoBAIFCo0K5jJHIlMJRW1EOG2ZyG3gmE8u3O_fCn5rPPBLicbA9Lx7Ta7KhS-BKYnFcUkQvekzdS5xV0LP4VscwmVw.atKfN5Q3C0blY_zQApD2qa5fiWnsRgic1dtD5H0jMUg&dib_tag=se&keywords=computador+gamer&qid=1779898219&sprefix=computador%2Caps%2C215&sr=8-12&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751'
    },
    {
      title: 'Notebook Gamer Alienware Aurora',
      description: 'Notebook/PC Gamer Alienware Aurora — configuração premium para jogos e criação de conteúdo.',
      image: imgNotebook,
      link: 'https://www.amazon.com.br/Notebook-Gamer-Alienware-Aurora-AC16-C7240H-D30/dp/B0FPGTRPLL/ref=sxin_14_sbv_search_btf?content-id=amzn1.sym.6c1e2f1f-e41a-433b-a1d3-1d086b3e9837%3Aamzn1.sym.6c1e2f1f-e41a-433b-a1d3-1d086b3e9837&crid=16GBVF85F4NGY&cv_ct_cx=computador%2Bgamer&keywords=computador%2Bgamer&pd_rd_i=B0FPGTRPLL&pd_rd_r=c1ab65cc-39fb-431b-9c60-0dd0ea86d4ca&pd_rd_w=7bvQ2&pd_rd_wg=G6BRR&pf_rd_p=6c1e2f1f-e41a-433b-a1d3-1d086b3e9837&pf_rd_r=RZJ071B428EXK5953V34&qid=1779898219&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=computador%2Caps%2C215&sr=1-1-b8f34313-536f-475f-9207-a7c427a641c1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&th=1'
    },
    {
      title: 'Mouse Gamer Predator Redragon M612',
      description: 'Mouse gamer com alta sensibilidade e iluminação RGB — precisão para jogos competitivos.',
      image: imgMouse,
      link: 'https://www.amazon.com.br/Mouse-Gamer-Predator-Redragon-M612/dp/B08T68T1T6/ref=sr_1_5?crid=2Y3FXRB8SRKW8&dib=eyJ2IjoiMSJ9.BuRfgcMmV6IBa2amFMOY2JqJ8yY79IVAZCUVWvNfI0p2_tqFWskr0LDoXOpnOClFMHu_WneeBuzUP8XM3C8jJC-fO3MoI4K8UXfMOHBJb3qTtj-S0teE-0k1ar0DkIt89eapgB9VbouYDbS165ypRloinSvSeu1FHX6m0VfTlAEjmvT-wDiNY4no8U7oiOFeXGCwlFkzhrsJLYTPNh0WmqZsj_V5fasbf6-8TYwXUiZ12Y1lKpe5COiXuMQrnRWTkll9JOvAd-y3VBNAifijHuo-5htHiC3fKFhmW5ceQCs.3RuAIZZHPzTQirTHQVeB8t5XH0keJQ_tUfFRGTBgawo&dib_tag=se&keywords=mouse+gamer&qid=1779898260&sprefix=mause%2Caps%2C205&sr=8-5'
    },
    {
      title: 'Teclado Gamer HyperX Alloy (ABNT2)',
      description: 'Teclado mecânico HyperX Alloy com layout ABNT2 — ideal para digitação e jogos.',
      image: imgTeclado,
      link: 'https://www.amazon.com.br/HyperX-Teclado-Gamer-Alloy-ABNT2/dp/B07TV9B7Z3/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=AD3DK6S4T9RH&dib=eyJ2IjoiMSJ9.oZAYtj-rjMSwsMBB87ruZESrx808Rl8EdNgMnFGoaPN3iLCcpcbb-sEwkHao8hqY6tSMrqD2gEeRTfsbGO3JPiZsYisW_9ue_-zf8SvgylgOieXUNDwNzdUO0PiLUT68lzTOidB7rANzi6hxXTvU4qJ3_9nFJY7vaSybcPgpuJrC8cPw1SdOUpKi_QLxIlF8QI8iox7YRj_pc1wbuuNpNdKUn5tpOeLHoz6OLUdJUd0Zoczko7Q5B8WFxAly8Eom07T4azM9isqvWVfwBpt6VZSaffToAoiZAgYRHvGWaqA.K28BGK5tAfdsGSSTyC4_kxUfxJBQPg9o1ICAahfsB5E&dib_tag=se&keywords=teclado+gamer&qid=1779898290&sprefix=teclado+gam%2Caps%2C213&sr=8-5&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678'
    },
    {
      title: 'Fone de ouvido com fio JBL',
      description: 'SOM PROFISSIONAL. Com a tecnologia JBL QuantumSOUND Signature, o JBL Quantum 100M2 coloca você no centro da ação para escutar os menores detalhes e sentir cada explosão, proporcionando uma experiência de som realista.',
      image: imgGeneric,
      link: 'https://www.amazon.com.br/gp/aw/d/B0D6NLHV8N/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=6959ed0c036a0d72d23cec8ef634bf18&hsa_cr_id=0&qid=1779898322&sr=1-2-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=Q2mqi&content-id=amzn1.sym.28153920-e8af-4e55-ae3c-1905a4e32903%3Aamzn1.sym.28153920-e8af-4e55-ae3c-1905a4e32903&pf_rd_p=28153920-e8af-4e55-ae3c-1905a4e32903&pf_rd_r=ZDCDC6XDDQ6YQ2Z9K88C&pd_rd_wg=5H6XF&pd_rd_r=164fb525-d8c8-4ff4-bbe1-62934f000be6&th=1'
    }
  ];

  return (
    <main className="container">
      <section className="hero-section">
        <h1>Promoção</h1>
        <p className="hero-text">Links de produtos em promoção — substitua pelos seus links de afiliado para gerar receita.</p>
      </section>

      <hr className="hr3" />

      <section className="apps-section promocao-section">
        <h2>Produtos</h2>
        <div className="apps-grid promocao-grid">
          {products.map((p, i) => (
            <div key={i} className="app-card promocao-item">
              <a href={p.link} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.title} className="app-image" />
              </a>
              <div className="app-info">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="app-link">Comprar na Promoção →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
