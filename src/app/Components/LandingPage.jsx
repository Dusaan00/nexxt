import "../Sass/_landingPage.scss";
import img1 from "../Images/1-transformed.webp";
import img2 from "../Images/2.webp";
import img3 from "../Images/3.webp";
import img4 from "../Images/4.webp";
import img5 from "../Images/5.webp";
import img6 from "../Images/6.webp";
import img7 from "../Images/7.webp";
import img8 from "../Images/8.webp";
import img9 from "../Images/99.webp";
import img10 from "../Images/10.webp";
import img11 from "../Images/11.webp";
import img12 from "../Images/12.webp";
import beton1 from "../Images/beton1.jpg";
import beton2 from "../Images/beton2.jpg";
import Modal from "../functions/Modal";
import bakgrund from "../Images/stavbyy.png";

function LandingPage() {
  return (
    <div
      className="master-container"
      style={{
        backgroundImage: `url(${bakgrund.src})`,
      }}
    >
      <div className="gallery-container">
        <section className="gallery" id="gallery">
          <figure className="gallery__item gallery__item--1">
            <Modal
              src={img12}
              alt="Plot na klíč z pletiva s bránou na zahradě"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--2">
            <Modal
              src={img2}
              alt="Oplocení z 3D panelů v rezidenční oblasti"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--3">
            <Modal
              src={img3}
              alt="Oplocení z 3D panelů na zahradě"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--4">
            <Modal
              src={img4}
              alt="Vysoký plot z drátěného pletiva s ostnatým drátem okolo průmyslového objektu"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <Modal
              src={img1}
              alt="Moderní oplocení z 3D panelů okolo firemního pozemku"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <Modal
              src={img6}
              alt="Kvalitní plot z drátěného pletiva kolem rodinného domu se zahradou"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--7">
            <Modal
              src={img7}
              alt="Drátěný plot s podhrabovými deskami v chatové oblasti"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--8">
            <Modal
              src={img8}
              alt="Vysoký plot z 3D panelů a s ostnatým drátem chránící firemní objekt"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--9">
            <Modal
              src={img9}
              alt="Oplocení z 3D panelů s podhrabovými deskami okolo rodinného domu"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--10">
            <Modal
              src={beton2}
              alt="Montáž brány v průmyslovém objektu"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--11">
            <Modal
              src={beton1}
              alt="Běžné oplocení z drátěného pletiva s brankou kolem sportoviště"
              className="gallery__img"
            />
          </figure>

          <figure className="gallery__item gallery__item--12">
            <Modal
              src={img5}
              alt="Plot z pletiva s ostnatým drátem a brankou okolo firemního pozemku"
              className="gallery__img"
            />
          </figure>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
