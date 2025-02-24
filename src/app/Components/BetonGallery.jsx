import "../Sass/_galleryBeton.scss";
import Modal from "../functions/Modal";
import img001 from "../Images/galBeton/001.webp";
import img002 from "../Images/galBeton/002.webp";

function BetonGallery() {
  const imagePaths = [
    { src: img001, alt: "Betonový plot u průmyslové oblasti" },
    { src: img002, alt: "Betonový u rodinného domu v rezidenční oblasti" },
  ];

  return (
    <div className="beton-gallery-container">
      <h1 className="beton-gallery-title">Betonové ploty</h1>
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
