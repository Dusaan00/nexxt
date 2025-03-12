import "../Sass/_galleryOthers.scss";
import Modal from "../functions/Modal";
import Link from "next/link";
import img001 from "../Images/galOthers/001.webp";
import img002 from "../Images/galOthers/002.webp";
import img003 from "../Images/galOthers/003.webp";
import img004 from "../Images/galOthers/004.webp";
import img005 from "../Images/galOthers/005.webp";
import img006 from "../Images/galOthers/006.webp";
import img007 from "../Images/galOthers/007.webp";
import img008 from "../Images/galOthers/008.webp";
import img009 from "../Images/galOthers/009.webp";
import img010 from "../Images/galOthers/010.webp";
import img011 from "../Images/galOthers/011.webp";
import img012 from "../Images/galOthers/012.webp";
import img013 from "../Images/galOthers/013.webp";
import img014 from "../Images/galOthers/014.webp";
import img015 from "../Images/galOthers/015.webp";

function OthersGallery() {
  const imagePaths = [
    { src: img001, alt: "Oplocení zahrádky u rodinného domu" },
    { src: img002, alt: "Oplocení zahrádky u rodinného domu" },
    { src: img003, alt: "Oplocení kolem kontejnerů" },
    { src: img004, alt: "Oplocení kolem kontejnerů" },
    { src: img005, alt: "Ochranný rám" },
    { src: img006, alt: "Ochranný rám" },
    { src: img007, alt: "Ochranný rám" },
    { src: img008, alt: "Ochranný rám" },
    { src: img009, alt: "Ochranný rám" },
    { src: img010, alt: "Ochranný rám" },
    { src: img011, alt: "Ochranný rám" },
    { src: img012, alt: "Ochranný rám" },
    { src: img013, alt: "Ochranný rám" },
    { src: img014, alt: "Ochranný rám" },
    { src: img015, alt: "Ochranný rám" },
  ];

  return (
    <div className="others-gallery-container">
      <div className="centered-text-container-others">
        <div className="others-gallery-texts">
          <h1 className="others-gallery-title">Naše ostatní práce</h1>
          <Link href="/form">
            <button className="others-gallery-button">Odeslat poptávku</button>
          </Link>
          <p className="others-gallery-text">
            Zde je galerie našich ostatních prací, dlouhou dobu se mimo výrobu
            pletiva zabýváme zámečnickou výrobou, proto jsme schopni pro Vás
            zrealizovat různé práce v oblasti zámečnictví. Na obrázcích níže
            jsou zobrazeny fotky některých našich realizovaných prací/výrobků
            mimo ploty samotné.
          </p>
        </div>
      </div>
      <div className="others-gallery-grid">
        {imagePaths.map((image, index) => (
          <Modal
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-others-photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default OthersGallery;
