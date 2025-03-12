import "../Sass/_galleryBeton.scss";
import Modal from "../functions/Modal";
import Link from "next/link";
import img001 from "../Images/galBeton/001.webp";
import img002 from "../Images/galBeton/002.webp";

function BetonGallery() {
  const imagePaths = [
    { src: img001, alt: "Betonový plot u průmyslové oblasti" },
    { src: img002, alt: "Betonový u rodinného domu v rezidenční oblasti" },
  ];

  return (
    <div className="beton-gallery-container">
      <div className="centered-text-container-beton">
        <div className="beton-gallery-texts">
          <h1 className="beton-gallery-title">Betonové ploty</h1>
          <Link href="/form">
            <button className="beton-gallery-button">Odeslat poptávku</button>
          </Link>
          <p className="beton-gallery-text">
            Stavby betonových plotů realizujeme z důvodu jejich zřejmých a
            žádaných vlastností, jako jsou poskytnutí soukromí, životnost a
            odolnost. Betonový plot je skvělé řešení pokud Vám záleží na
            soukromí, zároveň do určité míry dokáže i tlumit hluk z vnějšího
            okolí, hodí se proto hlavně kolem silnic a v rušnějších oblastech.
            Jsou velice odolné (tím pádem můžete počítat s dlouhou životností) a
            zároveň nevyžadují téměř žádné udržování. Betonové ploty se
            instalují relativně snadno, díky tomu že se panely dosazují mezi
            sloupky, proto jejich montáž netrvá dlouho.
          </p>
        </div>
      </div>
      <div className="beton-gallery-grid">
        {imagePaths.map((image, index) => (
          <Modal
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-beton-photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default BetonGallery;
