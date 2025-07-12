"use client";
import Image from "next/image";
import Modal from "../functions/Modal";
import "../Sass/_typy.scss";

import typ1 from "../Images/1typ.webp";
import typ2 from "../Images/2typ.webp";
import typ3 from "../Images/typ3.webp";
import typ4 from "../Images/4typ.webp";
import typ5 from "../Images/galBeton/002.webp";
import typ6 from "../Images/pletvo.webp";
import background from "../Images/backgrund2.webp";
import Link from "next/link";

function Typy() {
  return (
    <div className="section-container">
      <section className="section-typy">
        <div className="background">
          <Image
            src={background}
            className="background__image"
            alt="Plot z pletiva - pozadí"
            loading="lazy"
          />
        </div>

        <div className="center-text margin-bottom">
          <h2 className="heading-secondary">PŘEHLED PLOTŮ, KTERÉ STAVÍME</h2>
        </div>

        <div className="typs-container">
          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ1}
                className="typ__photo"
                alt="Ukázka typu plotu z klasického pletiva - Ploty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">Ploty z běžného pletiva</h3>
              <p>
                Nejčastější variantou plotu je plot z běžného upleteného
                pletiva. Pletivo si vyrábíme sami, proto za kvalitu pletiva
                ručíme. Plot z běžného pletiva je flexibilní a cenově příznivá
                varianta pro stavbu oplocení. Hodí se na oplocení soukromých
                pozemků, firemních objektů, nebo např. sportovišť.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ2}
                className="typ__photo"
                alt="Ukázka typu plotu z 3D/2D panelů - Ploty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">Ploty z 3D/2D panelů</h3>
              <p>
                Ploty z 3D/2D panelů mají velmi moderní vzhled, jsou pevné,
                stabilní a velice odolné, jsou však dražší než ploty z
                klasického pletiva. 3D panely poskytnou Vašemu pozemku velice
                hezkou vizuální bariéru.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ3}
                className="typ__photo"
                alt="Ukázka typu plotu s podhrabovými deskami - Ploty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">
                Ploty z pletiva/panelů 3D/2D s podhrabovými deskami
              </h3>
              <p>
                Podhrabové desky jsou vyrobené z betonu, což zajišťuje dlouhou
                životnost. Podhrabové desky představují zvýšenou ochranu
                oplocení samotného, zabraňují zvířatům a škůdcům v podhrabání
                plotu, brání prorůstání plevele skrz plot, a také vyrovnávají
                nerovnosti terénu. Jsou kompatibilní s různymi druhy plotů a
                společně vytváří estetický vzhled.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ5}
                className="typ__photo"
                alt="Žeberkový plot - PLoty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">Betonové ploty</h3>
              <p className="zeb">
                Betonové ploty jsou skvělým řešením oplocení pozemku pro
                zákazníky, pro které je důležité především soukromí. Betonové
                ploty také zajišťují vysokou odolnost proti povětrnostním
                vlivům, velmi dlouhou životnost a minimální údržbu. Betonové
                ploty jsou vhodné jak pro rezidenční oblasti, tak pro průmyslové
                a komerční prostory.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ4}
                className="typ__photo"
                alt="Žeberkový plot - PLoty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">Žebérkové ploty</h3>
              <p className="zeb">
                Žebérkové ploty jsou vyrobené z kovu, jsou velice odolné a
                trvanlivé, tyto ploty jsou vhodné k zabezpečení prostor v
                průmyslových, komerčních i rezidenčních prostorách.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Modal
                src={typ6}
                className="typ__photo"
                alt="Žeberkový plot - PLoty Grygov"
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">
                Dodáváme veškerá příslušenství k stavbě plotu
              </h3>
              <p className="zeb">
                Můžete u nás nakoupit kompletní materiál k stavbě oplocení.
                Dodáváme pletiva (poplastovaná, alugreen, bezinal...), panely
                3D/2D (zelené, antracitové, pozinkované), brány a branky,
                sloupky, napínací dráty a ostatní nezbytná příslušenství k
                úspěšné montáži plotu.
              </p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link href="/Galerie" className="btn--typ">
            Galerie staveb &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Typy;
