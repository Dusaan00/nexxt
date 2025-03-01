import Link from "next/link";
import PletivoImg from "../Images/galeryimg.webp";
import beton2 from "../Images/beton2.jpg";
import PanelImg from "../Images/1-transformed.webp";
import GateImg from "../Images/gateimg.jpg";
import OstatniImg from "../Images/ostatniimg.jpg";
import Image from "next/image";
import "../Sass/_gallery.scss";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Naše stavby plotů na klíč:</h1>
      <div className="gallery-grid">
        <div className="gallery-item">
          <Link href="/PlotyPletivo">
            <Image
              src={PletivoImg}
              className="gallery-photo"
              alt="Galerie plotů z pletiva"
            />
          </Link>
          <h2 className="gallery-subtitle">Ploty z klasického pletiva</h2>
        </div>
        <div className="gallery-item">
          <Link href="/BetonovePloty">
            <Image
              src={beton2}
              className="gallery-photo"
              alt="Galerie betonových plotů"
            />
          </Link>
          <h2 className="gallery-subtitle">Betonové ploty</h2>
        </div>
        <div className="gallery-item">
          <Link href="/PlotyPanely">
            <Image
              src={PanelImg}
              className="gallery-photo"
              alt="Galerie plotů z 3D/2D panelu"
            />
          </Link>
          <h2 className="gallery-subtitle">Ploty z 3D/2D panelů</h2>
        </div>
        <div className="gallery-item">
          <Link href="/GalerieBrany">
            <Image
              src={GateImg}
              className="gallery-photo"
              alt="Galerie bran a branek k oplocení"
            />
          </Link>
          <h2 className="gallery-subtitle">Brány a branky k oplocení</h2>
        </div>
        <div className="gallery-item">
          <Link href="/GalerieOstatni">
            <Image
              src={OstatniImg}
              className="gallery-photo"
              alt="Ostatní projekty"
            />
          </Link>
          <h2 className="gallery-subtitle">Naše ostatní práce</h2>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
