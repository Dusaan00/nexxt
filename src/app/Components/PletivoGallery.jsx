import "../Sass/_galleryPletivo.scss";
import Modal from "../functions/Modal";
import Link from "next/link";
import img001 from "../Images/galPletivo/001.webp";
import img002 from "../Images/galPletivo/002.webp";
import img003 from "../Images/galPletivo/003.webp";
import img004 from "../Images/galPletivo/004.webp";
import img005 from "../Images/galPletivo/005.webp";
import img006 from "../Images/galPletivo/006.webp";
import img007 from "../Images/galPletivo/007.webp";
import img008 from "../Images/galPletivo/008.webp";
import img009 from "../Images/galPletivo/009.webp";
import img010 from "../Images/galPletivo/010.webp";
import img011 from "../Images/galPletivo/011.webp";
import img012 from "../Images/galPletivo/012.webp";
import img013 from "../Images/galPletivo/013.webp";
import img014 from "../Images/galPletivo/014.webp";
import img015 from "../Images/galPletivo/015.webp";
import img016 from "../Images/galPletivo/016.webp";
import img017 from "../Images/galPletivo/017.webp";
import img018 from "../Images/galPletivo/018.webp";
import img019 from "../Images/galPletivo/019.webp";
import img020 from "../Images/galPletivo/020.webp";
import img021 from "../Images/galPletivo/021.webp";
import img022 from "../Images/galPletivo/022.webp";
import img023 from "../Images/galPletivo/023.webp";
import img024 from "../Images/galPletivo/024.webp";
import img025 from "../Images/galPletivo/025.webp";
import img026 from "../Images/galPletivo/026.webp";
import img027 from "../Images/galPletivo/027.webp";
import img028 from "../Images/galPletivo/028.webp";
import img029 from "../Images/galPletivo/029.webp";
import img030 from "../Images/galPletivo/030.webp";
import img031 from "../Images/galPletivo/031.webp";
import img032 from "../Images/galPletivo/032.webp";
import img033 from "../Images/galPletivo/033.webp";
import img034 from "../Images/galPletivo/034.webp";
import img035 from "../Images/galPletivo/035.webp";
import img036 from "../Images/galPletivo/036.webp";
import img037 from "../Images/galPletivo/037.webp";
import img038 from "../Images/galPletivo/038.webp";
import img039 from "../Images/galPletivo/039.webp";
import img040 from "../Images/galPletivo/040.webp";
import img041 from "../Images/galPletivo/041.webp";
import img042 from "../Images/galPletivo/042.webp";
import img043 from "../Images/galPletivo/043.webp";
import img044 from "../Images/galPletivo/044.webp";
import img045 from "../Images/galPletivo/045.webp";
import img046 from "../Images/galPletivo/046.webp";
import img047 from "../Images/galPletivo/047.webp";
import img048 from "../Images/galPletivo/048.webp";
import img049 from "../Images/galPletivo/049.webp";
import img050 from "../Images/galPletivo/050.webp";
import img051 from "../Images/galPletivo/051.webp";
import img052 from "../Images/galPletivo/052.webp";
import img053 from "../Images/galPletivo/053.webp";
import img054 from "../Images/galPletivo/054.webp";
import img055 from "../Images/galPletivo/055.webp";
import img056 from "../Images/galPletivo/056.webp";
import img057 from "../Images/galPletivo/057.webp";
import img058 from "../Images/galPletivo/058.webp";
import img059 from "../Images/galPletivo/059.webp";

function PletivoGallery() {
  const imagePaths = [
    {
      src: img001,
      alt: "Plot z pletiva kolem rodinného domu",
    },
    {
      src: img002,
      alt: "Oplocení z pletiva s ostnatým drátem v průmyslové oblasti",
    },
    {
      src: img003,
      alt: "Plot z pletiva s podhrabovými deskami v chatové oblasti",
    },
    {
      src: img004,
      alt: "Plot z běžného pletiva u rodinného domu",
    },
    {
      src: img005,
      alt: "Plot z běžného pletiva",
    },
    {
      src: img006,
      alt: "Oplocení z běžného pletiva kolem zahrady",
    },
    {
      src: img007,
      alt: "Oplocení z pletiva v průmyslové oblasti",
    },
    {
      src: img008,
      alt: "Plot z běžného pletiva s brankou u rodinného domu",
    },
    {
      src: img009,
      alt: "Plot z běžného pletiva",
    },
    {
      src: img010,
      alt: "Plot z běžného pletiva",
    },
    {
      src: img011,
      alt: "Plot z běžného pletiva s ostnatým drátem",
    },
    {
      src: img012,
      alt: "Oplocení z klasikého pletiva s ostanatým drátem",
    },
    {
      src: img013,
      alt: "Oplocení z klasikého pletiva s ostanatým drátem",
    },
    {
      src: img014,
      alt: "Oplocení z klasikého pletiva s ostanatým drátem",
    },
    {
      src: img015,
      alt: "Oplocení z klasikého pletiva s podhrabovými deskami okolo zahrady",
    },
    {
      src: img016,
      alt: "Plot z běžného pletiva s ostnatým drátem u firemního objektu",
    },
    {
      src: img017,
      alt: "Plot z běžného pletiva",
    },
    {
      src: img018,
      alt: "Plot z běžného pletiva",
    },
    {
      src: img019,
      alt: "Plot z klasického pletiva kolem rodinného domu",
    },
    {
      src: img020,
      alt: "Plot z klasického pletiva kolem rodinného domu",
    },
    {
      src: img021,
      alt: "Plot z klasického pletiva kolem rodinného domu",
    },
    {
      src: img022,
      alt: "Plot z klasického pletiva s podhrabovými deskami v chatové oblasti",
    },
    {
      src: img023,
      alt: "Kompletní oplocení z klasického pletiva kolem rodinného dom",
    },
    {
      src: img024,
      alt: "Kompletní oplocení z klasického pletiva kolem rodinného domu",
    },
    {
      src: img025,
      alt: "Oplocení z klasického pletiva s ostnatým drátem",
    },
    {
      src: img026,
      alt: "Oplocení z klasického pletiva kolem průmyslového objektu",
    },
    {
      src: img027,
      alt: "Oplocení z klasického pletiva v chatové oblasti",
    },
    {
      src: img028,
      alt: "Oplocení z klasického pletiva v chatové oblasti",
    },
    {
      src: img029,
      alt: "Oplocení z klasického pletiva kolem zahrady",
    },
    {
      src: img030,
      alt: "Oplocení z klasického pletiva kolem cyklostezky",
    },
    {
      src: img031,
      alt: "Plot z běžného pletiva kolem firemního objektu",
    },
    {
      src: img032,
      alt: "Plot z běžného pletiva kolem firemního objektu",
    },
    {
      src: img033,
      alt: "Plot z běžného pletiva okolo zahrady",
    },
    {
      src: img034,
      alt: "Plot z běžného pletiva s ostnatým drátem kolem firemního objektu",
    },
    {
      src: img035,
      alt: "Plot z běžného pletiva s ostnatým drátem kolem firemního objektu",
    },
    {
      src: img036,
      alt: "Plot z běžného pletiva kolem zahrady na soukromém pozemku",
    },
    {
      src: img037,
      alt: "Montáž plotu z pletiva na zahradě soukromého pozemku",
    },
    {
      src: img038,
      alt: "Montáž plotu z pletiva na zahradě soukromého pozemku",
    },
    {
      src: img039,
      alt: "Plot z běžného pletiva kolem zahrady na soukromém pozemku",
    },
    {
      src: img040,
      alt: "Plot z běžného pletiva kolem zahrady na soukromém pozemku",
    },
    {
      src: img041,
      alt: "Plot z běžného pletiva kolem zahrady na soukromém pozemku",
    },
    {
      src: img042,
      alt: "Plot z běžného pletiva kolem průmyslového objektu",
    },
    {
      src: img043,
      alt: "Plot z běžného pletiva v chatové oblasti",
    },
    {
      src: img044,
      alt: "Plot z běžného pletiva kolem firemního pozemku",
    },
    {
      src: img045,
      alt: "Plot z běžného pletiva kolem rodinného domu",
    },
    {
      src: img046,
      alt: "Plot z běžného pletiva kolem zahrady u rodinného domu",
    },
    {
      src: img047,
      alt: "Oplocení z běžného pletiva na zahradě v chatové oblasti",
    },
    {
      src: img048,
      alt: "Plot z klasického pletiva na zahradě",
    },
    {
      src: img049,
      alt: "Plot z klasického pletiva na zahradě",
    },
    {
      src: img050,
      alt: "Plot z klasického pletiva kolem rodinného domu",
    },
    {
      src: img051,
      alt: "Plot z klasického na zahradě u rodinného domu",
    },
    {
      src: img052,
      alt: "Plot z klasického s ostnatným drátem kolem firemního pozemku",
    },
    {
      src: img053,
      alt: "Oplocení z klasického pletiva kolem sportoviště",
    },
    {
      src: img054,
      alt: "Oplocení z klasického pletiva kolem sportoviště",
    },
    {
      src: img055,
      alt: "Plot z klasického kolem průmyslového objektu",
    },
    {
      src: img056,
      alt: "Plot z klasického s ostnatným drátem kolem zahrady",
    },
    {
      src: img057,
      alt: "Plot z klasického s ostnatným drátem v průmyslové oblasti",
    },
    {
      src: img058,
      alt: "Plot z klasického s ostnatným drátem v průmyslové oblasti",
    },
    {
      src: img059,
      alt: "Plot z klasického kolem průmyslového objektu",
    },
  ];

  return (
    <div className="pletivo-gallery-container">
      <div className="centered-text-container">
        <div className="pletivo-gallery-texts">
          <h1 className="pletivo-gallery-title">
            Oplocení z klasického pletiva
          </h1>
          <p className="pletivo-gallery-text">
            Zde je přehled některých plotů z klasického pletiva, které stavěla
            naše firma. Pletivo si sami vyrábíme už od roku 1930. Oplocení z
            klasického pletiva se hodí jak při oplocení firemních pozemků, tak
            při oplocení rodinných domů a zahrad. Plot z pleteného pletiva je
            cenově přiznivé řešení oplocení, které zároveň spolehlivě plní svou
            funkci. Jelikož ploty z pletiva stavíme už velice dlouho, jsme
            schopni odborně poradit s výběrem a implementací řešení oplocení.
            Můžeme nabídnout několik druhů pletiv pro realizaci oplocení
            (poplastovaná, alugreen, pozinkovaná…), kontaktujte nás pro zjištění
            konkrétních možností. Zároveň, pokud si chcete oplocení postavit
            sami, abyste ušetřili, můžete u nás pletivo nakoupit a materiál
            dodáváme i pro firmy.
          </p>
          <Link href="/form">
            <button className="pletivo-gallery-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>
      <div className="pletivo-gallery-grid">
        {imagePaths.map((image, index) => (
          <Modal
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-pletivo-photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default PletivoGallery;
