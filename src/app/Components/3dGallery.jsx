import "../Sass/_galleryPanely.scss";
import Modal from "../functions/Modal";
import Link from "next/link";
import img001 from "../Images/gal3D/001.webp";
import img002 from "../Images/gal3D/002.webp";
import img003 from "../Images/gal3D/003.webp";
import img004 from "../Images/gal3D/004.webp";
import img005 from "../Images/gal3D/005.webp";
import img006 from "../Images/gal3D/006.webp";
import img007 from "../Images/gal3D/007.webp";
import img008 from "../Images/gal3D/008.webp";
import img009 from "../Images/gal3D/009.webp";
import img010 from "../Images/gal3D/010.webp";
import img011 from "../Images/gal3D/011.webp";
import img012 from "../Images/gal3D/012.webp";
import img013 from "../Images/gal3D/013.webp";
import img014 from "../Images/gal3D/014.webp";
import img015 from "../Images/gal3D/015.webp";
import img016 from "../Images/gal3D/016.webp";
import img017 from "../Images/gal3D/017.webp";
import img018 from "../Images/gal3D/018.webp";
import img020 from "../Images/gal3D/020.webp";
import img021 from "../Images/gal3D/021.webp";
import img022 from "../Images/gal3D/022.webp";
import img023 from "../Images/gal3D/023.webp";
import img024 from "../Images/gal3D/024.webp";
import img025 from "../Images/gal3D/025.webp";
import img026 from "../Images/gal3D/026.webp";
import img027 from "../Images/gal3D/027.webp";
import img028 from "../Images/gal3D/028.webp";
import img029 from "../Images/gal3D/029.webp";
import img030 from "../Images/gal3D/030.webp";
import img031 from "../Images/gal3D/031.webp";
import img032 from "../Images/gal3D/032.webp";
import img033 from "../Images/gal3D/033.webp";
import img034 from "../Images/gal3D/034.webp";
import img035 from "../Images/gal3D/035.webp";
import img036 from "../Images/gal3D/036.webp";
import img037 from "../Images/gal3D/037.webp";
import img038 from "../Images/gal3D/038.webp";

function ddGallery() {
  const imagePaths = [
    {
      src: img001,
      alt: "Plot z 3D panelů s ostnatým drátem u firemního objektu",
    },
    { src: img002, alt: "Oplocení z 3D panelů podél cyklostezky" },
    {
      src: img003,
      alt: "Plot z 3D panelů kolem firemního objektu",
    },
    {
      src: img004,
      alt: "Plot z 3D panelů s ostnatým drátem u firemního objektu",
    },
    { src: img005, alt: "Plot z 3D panelů na zahradě kolem rodinného domu" },
    { src: img006, alt: "Plot z 3D panelů na zahradě kolem rodinného domu" },
    { src: img007, alt: "Plot z 3D panelů na zahradě kolem rodinného domu" },
    { src: img008, alt: "Plot z 3D panelů v rezidenční oblasti" },
    { src: img009, alt: "Oplocení z 3D panelů na zahradě" },
    { src: img010, alt: "Plot z 3D panelů v rezidenční oblasti" },
    { src: img011, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img012, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img013, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img014, alt: "Plot z 3D panelů u rodinného domu" },
    { src: img015, alt: "Plot z 3D panelů s podhrabovými deskami u domu" },
    { src: img016, alt: "Plot z 3D panelů s podhrabovými deskami u domu" },
    {
      src: img017,
      alt: "Plot z 3D panelů s ostnatým drátem u firemního pozemku",
    },
    { src: img018, alt: "Plot z 3D panelů s podhrabovými deskami u domu" },
    { src: img020, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img021, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img022, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img023, alt: "Oplocení z 3D panelů kolem kolárny" },
    { src: img024, alt: "Plot z 3D panelů kolem rodinného pozemku" },
    { src: img025, alt: "Oplocení z 3D panelů kolem dětského hřiště" },
    { src: img026, alt: "Plot z 3D panelů u průmyslového objektu" },
    { src: img027, alt: "Oplocení z 3D panelů kolem kolárny" },
    { src: img028, alt: "Plot z 3D panelů u průmyslového objektu" },
    {
      src: img029,
      alt: "Plot z 3D panelů s ostnatým drátem u firemního objektu",
    },
    {
      src: img030,
      alt: "Oplocení z 3D panelů s ostnatým drátem u firemního objektu",
    },
    { src: img031, alt: "Plot z 3D panelů u průmyslového objektu" },
    {
      src: img032,
      alt: "Oplocení z 3D panelů s podhrabovými deskami na zahradě u rodinného domu",
    },
    {
      src: img033,
      alt: "Oplocení z 3D panelů s podhrabovými deskami u rodinného domu",
    },
    { src: img034, alt: "Oplocení z barevných 3D panelů okolo hřiště školky" },
    { src: img035, alt: "Oplocení z barevných 3D panelů okolo hřiště školky" },
    { src: img036, alt: "Oplocení z barevných 3D panelů okolo hřiště školky" },
    { src: img037, alt: "Oplocení z barevných 3D panelů okolo hřiště školky" },
    { src: img038, alt: "Barevné 3D panely od Ploty-Grygov.cz" },
  ];
  return (
    <div className="panely-gallery-container">
      <div className="centered-text-container-panely">
        <div className="panely-gallery-texts">
          <h1 className="panely-gallery-title">Ploty z 3D/2D panelů</h1>
          <Link href="/form">
            <button className="panely-gallery-button">Odeslat poptávku</button>
          </Link>
          <p className="panely-gallery-text"></p>
        </div>
      </div>
      <div className="panely-gallery-grid">
        {imagePaths.map((image, index) => (
          <Modal
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-panely-photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default ddGallery;
