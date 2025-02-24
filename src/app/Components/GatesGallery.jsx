import "../Sass/_galleryGates.scss";
import Modal from "../functions/Modal";
import img001 from "../Images/galGates/001.webp";
import img002 from "../Images/galGates/002.webp";
import img004 from "../Images/galGates/004.webp";
import img003 from "../Images/galGates/003.webp";
import img005 from "../Images/galGates/005.webp";
import img006 from "../Images/galGates/006.webp";
import img007 from "../Images/galGates/007.webp";
import img008 from "../Images/galGates/008.webp";
import img009 from "../Images/galGates/009.webp";
import img010 from "../Images/galGates/010.webp";
import img011 from "../Images/galGates/011.webp";
import img012 from "../Images/galGates/012.webp";
import img013 from "../Images/galGates/013.webp";
import img014 from "../Images/galGates/014.webp";
import img015 from "../Images/galGates/015.webp";
import img016 from "../Images/galGates/016.webp";
import img017 from "../Images/galGates/017.webp";
import img018 from "../Images/galGates/018.webp";
import img019 from "../Images/galGates/019.webp";
import img020 from "../Images/galGates/020.webp";

function GatesGallery() {
  const imagePaths = [
    { src: img001, alt: "Zelená branka k plotu z pletiva u firemního objektu" },
    { src: img002, alt: "Brána kolem objektu v průmyslové oblasti" },
    { src: img004, alt: "Brána kolem objektu v průmyslové oblasti" },
    { src: img003, alt: "Zelená branka k plotu z pletiva u firemního objektu" },
    { src: img005, alt: "Velká vstupní brána do firemního objektu" },
    { src: img006, alt: "Velká vstupní brána do firemního objektu" },
    { src: img007, alt: "Zelená branka k plotu z pletiva u firemního objektu" },
    { src: img008, alt: "Brána kolem objektu v průmyslové oblasti" },
    {
      src: img009,
      alt: "Zelená vstupní brána s plotem z 3D panelů na zahradu u rodinného domu",
    },
    {
      src: img010,
      alt: "Zelená vstupní brána s plotem z 3D panelů na zahradu u rodinného domu",
    },
    {
      src: img011,
      alt: "Zelená vstupní brána pro vstup na zahradu na soukromém pozemku",
    },
    {
      src: img012,
      alt: "Zelená vstupní brána s plotem z 3D panelů kolem zahrady u rodinného domu",
    },
    { src: img013, alt: "Zelená branka pro vstup do průmyslového objektu" },
    { src: img014, alt: "Velká vstupní brána do soukromého pozemku" },
    { src: img015, alt: "Vstupní brána do soukromého pozemku" },
    { src: img016, alt: "Žlutá branka u vstupu do firemního objektu" },
    {
      src: img017,
      alt: "Žlutá branka u vstupu na zahradu v soukromém objektu",
    },
    {
      src: img018,
      alt: "Žlutá branka u vstupu na zahradu v soukromém objektu",
    },
    { src: img019, alt: "Větší šedá brána pro vstup do soukromého objektu" },
    { src: img020, alt: "Šedá branka u vstupu na zahradu u rodinného domu" },
  ];

  return (
    <div className="gates-gallery-container">
      <h1 className="gates-gallery-title">Brány a branky k oplocení</h1>
      <div className="gates-gallery-grid">
        {imagePaths.map((image, index) => (
          <Modal
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-gates-photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default GatesGallery;
