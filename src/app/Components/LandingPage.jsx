"use client";
import "../Sass/_landingPage.scss";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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

function LandingPage() {
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
    <div className="master-container">
      <div className="gallery-container">
        <section className="gallery" id="gallery">
          <figure className="gallery__item gallery__item--1">
            <Image
              src={img12}
              alt="Plot na klíč z pletiva s bránou na zahradě"
              className="gallery__img"
              onClick={() => openModal(img12)}
            />
          </figure>

          <figure className="gallery__item gallery__item--2">
            <Image
              src={img2}
              alt="Oplocení z 3D panelů v rezidenční oblasti"
              className="gallery__img"
              onClick={() => openModal(img2)}
            />
          </figure>

          <figure className="gallery__item gallery__item--3">
            <Image
              src={img3}
              alt="Oplocení z 3D panelů na zahradě"
              className="gallery__img"
              onClick={() => openModal(img3)}
            />
          </figure>

          <figure className="gallery__item gallery__item--4">
            <Image
              src={img4}
              alt="Vysoký plot z drátěného pletiva s ostnatým drátem okolo průmyslového objektu"
              className="gallery__img"
              onClick={() => openModal(img4)}
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <Image
              src={img1}
              alt="Moderní oplocení z 3D panelů okolo firemního pozemku"
              className="gallery__img"
              onClick={() => openModal(img1)}
            />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <Image
              src={img6}
              alt="Kvalitní plot z drátěného pletiva kolem rodinného domu se zahradou"
              className="gallery__img"
              onClick={() => openModal(img6)}
            />
          </figure>

          <figure className="gallery__item gallery__item--7">
            <Image
              src={img7}
              alt="Drátěný plot s podhrabovými deskami v chatové oblasti"
              className="gallery__img"
              onClick={() => openModal(img7)}
            />
          </figure>

          <figure className="gallery__item gallery__item--8">
            <Image
              src={img8}
              alt="Vysoký plot z 3D panelů a s ostnatým drátem chránící firemní objekt"
              className="gallery__img"
              onClick={() => openModal(img8)}
            />
          </figure>

          <figure className="gallery__item gallery__item--9">
            <Image
              src={img9}
              alt="Oplocení z 3D panelů s podhrabovými deskami okolo rodinného domu"
              className="gallery__img"
              onClick={() => openModal(img9)}
            />
          </figure>

          <figure className="gallery__item gallery__item--10">
            <Image
              src={img10}
              alt="Montáž brány v průmyslovém objektu"
              className="gallery__img"
              onClick={() => openModal(img10)}
            />
          </figure>

          <figure className="gallery__item gallery__item--11">
            <Image
              src={img11}
              alt="Běžné oplocení z drátěného pletiva s brankou kolem sportoviště"
              className="gallery__img"
              onClick={() => openModal(img11)}
            />
          </figure>

          <figure className="gallery__item gallery__item--12">
            <Image
              src={img5}
              alt="Plot z pletiva s ostnatým drátem a brankou okolo firemního pozemku"
              className="gallery__img"
              onClick={() => openModal(img5)}
            />
          </figure>
        </section>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <Image
            className="modal-content"
            src={selectedImage}
            alt="Přiblížený obrázek"
          />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
