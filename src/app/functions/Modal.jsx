"use client";
import "../Sass/_landingPage.scss";
import "../Sass/_intro.scss";
import "../Sass/_typy.scss";
import "../Sass/_galleryPletivo.scss";
import "../Sass/_galleryBeton.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Modal({ src, alt, className }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const openModal = () => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Image src={src} alt={alt} className={className} onClick={openModal} />

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <Image className="modal-content" src={selectedImage} alt={alt} />
        </div>
      )}
    </>
  );
}

export default Modal;
