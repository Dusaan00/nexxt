import "../Sass/_instructions.scss";
import React from "react";

function Instructions() {
  return (
    <div className="instructions">
      <h2 className="instructions__title">Jak to funguje?</h2>
      <p className="instructions__text">
        <strong>
          Stavby plotů na klíč provádíme v Olomouci, Přerově, Prostějově, dále
          např. v Brně, v Ostravě, po celé Moravě.
        </strong>{" "}
        Vždy nás můžete kontaktovat a my zjistíme, jestli budeme schopni stavbu
        plotu u Vás provést. Pokud nám pošlete poptávku přes náš formulář, tak
        do 24h Vám odpovíme s orientační nabídkou (cenou), čím detailnější Váše
        nezávazná poptávku bude, tím přesnější bude naše následná zaslaná
        nabídka. Potom se domluvíme na osobní konzultaci a přijedeme se podívat
        na místo stavby. Na základě toho bude vyhotovená konečná cena za stavbu
        plotu. V průběhu stavby komunikace nadále probíhá.
        <strong>
          {" "}
          Naše firma se zaměřuje na stavby betonových plotů, plotů z pletiva, z
          3D/2D panelů a ploty s podhrabovými deskami.
        </strong>{" "}
        K postavenému plotu Vám samozřejmě nainstalujeme i bránu/branku na
        základě Vašich požadavků.{" "}
        <strong>
          Pletivo si vyrábíme sami už velice dlouho, proto kvalitu použitého
          materiálu můžeme zaručit.
        </strong>
      </p>
      <svg className="instructions__icon">
        <use href="sprite.svg#icon-clipboard"></use>
      </svg>
    </div>
  );
}

export default Instructions;
