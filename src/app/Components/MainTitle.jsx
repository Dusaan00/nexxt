import Link from "next/link";
import "../Sass/_mainTitle.scss";

function MainTitle() {
  return (
    <section className="main-title-section" id="main">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          <span className="heading-primary--bold">Pletivo</span>{" "}
          <span className="heading-primary--space">Grygov</span>
        </span>
        <span className="heading-primary--sub">
          Provádíme stavby plotů na klíč, rekonstrukce plotů, <br /> máme
          desítky let zkušeností, fungujeme po celé Moravě
        </span>
      </h1>
      <Link href="/form" className="btn btn--cta btn--animated">
        <span className="btn--bold">Odeslat poptávku</span>
      </Link>
    </section>
  );
}

export default MainTitle;
