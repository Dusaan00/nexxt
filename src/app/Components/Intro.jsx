import "../Sass/_intro.scss";
import intro from "../Images/inst.webp";
import Modal from "../functions/Modal";

function Intro() {
  return (
    <section className="section-intro" id="intro">
      <div className="intro-container">
        <div className="intro-text">
          <div className="first-text">
            <h2 className="intro-head">Kdo jsme?</h2>
            <p className="intro-para">
              Jsme firma z{" "}
              <a
                className="grygov"
                href="https://www.google.com/maps/place/Grygov,+783+73+Grygov/@49.5569969,17.289508,12.75z/data=!4m15!1m8!3m7!1s0x47124d87e0d14729:0x5f40821de72b1e7a!2sGrygov,+783+73+Grygov!3b1!8m2!3d49.5378532!4d17.3108442!16zL20vMGM1OWs4!3m5!1s0x47124d87e0d14729:0x5f40821de72b1e7a!8m2!3d49.5378532!4d17.3108442!16zL20vMGM1OWs4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grygova
              </a>{" "}
              (okres Olomouc), stavíme ploty na klíč po celém Olomouckém,
              Jihomoravském a Moravskoslezském kraji. Zároveň se naše firma i
              specializuje na výrobu pletiva samotnou, takže kvalitu použitého
              materiálu můžeme zaručit. Můžeme vám tedy dodat veškerý materiál
              pro montáž plotu - pletivo, panely 3D/2D, brány, branky, sloupky,
              podhrabové desky a příslušenství, navštivte naše stránky:{" "}
              <a
                className="grygov"
                href="https://www.pletivogrygov.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PletivoGrygov.cz
              </a>
              . K oplocení Vám samozřejmě i nainstalujeme bránu/branku.
              Provádíme i rekonstrukce starých oplocení a jsme schopni Vám
              pomoci při pojistných událostech.
            </p>
          </div>
          <div className="second-text">
            <h2 className="intro-head">Jak probíhá stavba plotu?</h2>
            <p className="intro-para">
              První den stavby většinou probíhá měření pozemku a vrtání děr na
              sloupky. Další den stavby se většinou betonují sloupky do děr a
              případně pokládají podhrabové desky. Poslední den stavby
              natahujeme plot z pletiva, montujeme 3D/2D panely, nebo stavíme
              betonový plot, k hotovému oplocení potom instalujeme bránu.
            </p>
          </div>
        </div>
        <div className="intro-img">
          <Modal
            src={intro}
            alt="Plot z drátěného pletiva mezi rodinnými domy v rezidenční oblasti"
            className="intro-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
