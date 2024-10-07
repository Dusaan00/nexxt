import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../Sass/_typy.scss";

import typ1 from "../Images/1typ.webp";
import typ2 from "../Images/2typ.webp";
import typ3 from "../Images/typ3.webp";
import typ4 from "../Images/4typ.webp";
import background from "../Images/backgrund2.webp";

function Typy() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
              <Image
                src={typ1}
                className="typ__photo"
                alt="Ukázka typu plotu z klasického pletiva - Ploty Grygov"
                onClick={() => openModal(typ1)}
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
              <Image
                src={typ2}
                className="typ__photo"
                alt="Ukázka typu plotu z 3D/2D panelů - Ploty Grygov"
                onClick={() => openModal(typ2)}
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">Ploty z 3D/2D panelů</h3>
              <p>
                Ploty z 3D/2D panelů mají velmi moderní vzhled, jsou pevné,
                stabilní a velice odolné, jsou však dražší než ploty z
                klasického pletiva. 3D panely poskytují velice hezkou vizuální
                bariéru.
              </p>
            </div>
          </div>

          <div className="typ">
            <div className="typ__shape">
              <Image
                src={typ3}
                className="typ__photo"
                alt="Ukázka typu plotu s podhrabovými deskami - Ploty Grygov"
                onClick={() => openModal(typ3)}
                loading="lazy"
              />
            </div>
            <div className="typ__text">
              <h3 className="heading-tertiary">
                Ploty z pletiva nebo z 3D/2D panelů s podhrabovými deskami
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
              <Image
                src={typ4}
                className="typ__photo"
                alt="Žeberkový plot - PLoty Grygov"
                onClick={() => openModal(typ4)}
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
        </div>
        <div className="button-container">
          <Link
            href="/"
            className="btn--typ"
            onClick={() => scrollToTop()}
            scroll={false}
          >
            Galerie staveb &rarr;
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <Image
            className="modal-content"
            src={selectedImage}
            alt="Přiblížený obrázek typu plotu"
          />
        </div>
      )}
    </div>
  );
}

export default Typy;
