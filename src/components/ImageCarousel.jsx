import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImageCarousel;
