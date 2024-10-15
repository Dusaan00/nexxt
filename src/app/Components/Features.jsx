import "../Sass/_features.scss";

function Features() {
  return (
    <>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-assignment"></use>
          </svg>
          <h4 className="heading--4">Jsme na trhu od roku 1930</h4>
          <p className="feature__text">
            Na trhu jako firma fungujeme už dlouho, s prováděním staveb oplocení
            proto máme mnoho let zkušeností.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-emoji_events"></use>
          </svg>
          <h4 className="heading--4">Odborně poradíme se stavbou plotu</h4>
          <p className="feature__text">
            Jelikož stavíme ploty primárně z klasického pletiva a z 3D/2D
            panelů, tak Vám dokážeme vhodně poradit na základě Vašich požadavků
            a očekávání.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-handyman"></use>
          </svg>
          <h4 className="heading--4">Materiál si sami vyrábíme</h4>
          <p className="feature__text">
            Sami si vyrábíme pletivo, brány a další potřebná příslušenství pro
            stavbu plotu. Můžeme proto zaručit kvalitu našeho materiálu.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-contacts"></use>
          </svg>
          <h4 className="heading--4">Osobní konzultace</h4>
          <p className="feature__text">
            Zašlete nám poptávku a my Vám obratem zašlem orientační nabídku.
            Specifickou nabídku obdržíte po osobní konzultaci a až uvidíme Váš
            pozemek. Komunikace samozřejmě potom probíhá po celou dobu stavby.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-brightness_high"></use>
          </svg>
          <h4 className="heading--4">Rekonstrukce oplocení</h4>
          <p className="feature__text">
            Máte-li starý plot, kterého se chcete zbavit a nahradit ho novým
            plotem, tak ten starý plot pro Vás zbouráme a na tom samém místě Vám
            postavíme plot nový. Provádíme kompletní rekonstrukce oplocení.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href="/sprite.svg#icon-location_on"></use>
          </svg>
          <h4 className="heading--4">
            Stavíme ploty v Olomouci, v Brně, Ostravě... prostě na Moravě
          </h4>
          <p className="feature__text">
            Naše firma se nachází v Grygově - v blízkosti Olomouce, avšak stavbu
            či rekonstrukci plotu Vám můžeme zřídit po celé Moravě. Vždy nás
            můžete kontaktovat a my zjistíme, zda je stavba proveditelná.
          </p>
        </div>
      </section>
      <div className="openings">
        <h2 className="openings__item">PROVOZNÍ HODINY:</h2>
        <p className="openings__item">Pondělí - Pátek</p>
        <p className="openings__item openings__hodiny">
          7:30 - 16:00 nebo po tel. domluvě
        </p>
      </div>
    </>
  );
}

export default Features;
