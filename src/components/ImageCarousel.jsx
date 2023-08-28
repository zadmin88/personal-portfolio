import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  return (
    <div id="screenshots" className="pb-16 md:pb-24">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default ImageCarousel;
