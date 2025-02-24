import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "../functions/Scroller";
import "../Sass/_hero.scss";
import heroimg from "../Images/plotherobest.webp";

function Hero() {
  return (
    <>
      <div id="hero" className="hero">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading--secondary">
            Stavíme ploty na klíč na Moravě, pomůžeme i s rekonstrukcí plotů
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="composition">
              <Image
                src={heroimg}
                alt="Plot z drátěného pletiva"
                className="composition__photo"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="hero-para">
              <h3 className="heading-tertiary jake">
                Jaké typy plotů stavíme?
              </h3>
              <p className="paragraph">
                Zaměřujeme se primárně na stavby oplocení z klasického pletiva,
                z 3D/2D panelů a stavíme i betonové ploty. Oplocení Vám můžeme
                postavit i s podhrabovými deskami. Plot Vám samořejmě na základě
                Vašich požadavků postavíme společně s bránou nebo brankou, je
                možnost instalace chytrého odemykání.
                <strong> Ploty stavíme na klíč. </strong>
              </p>

              <ScrollToTop href="/" className="btn--text btn--gallery">
                Galerie staveb &rarr;
              </ScrollToTop>

              <h3 className="heading-tertiary stavime">
                Pro koho ploty stavíme?
              </h3>
              <p className="paragraph">
                Ploty stavíme kolem domů pro soukromé osoby, dále stavíme ploty
                pro firmy kolem firemních/průmyslových objektů, pro obce, nebo
                např. kolem sportovišť.{" "}
                <strong>
                  {" "}
                  Pletivo a další potřebná příslušenství si sami vyrábíme,{" "}
                </strong>{" "}
                fungujeme na trhu od roku 1930, takže se stavbou plotů z pletiva
                dokážeme dobře odborně poradit. Plot Vám proto můžeme postavit z
                našeho vlastního materiálu, pokud však máte pletivo již koupené,
                můžeme Vám z něj po konzultaci a domluvě plot postavit.
              </p>

              <Link href="/form" className="btn--text kontkt">
                Kontaktujte nás &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts">
        <p className="contacts__item">plotygrygov@gmail.com</p>
        <p className="contacts__item">+420 608 705 547</p>
        <Link href="/form" className="contacts__item contacts__button">
          Odeslat poptávku
        </Link>
      </div>
    </>
  );
}

export default Hero;
