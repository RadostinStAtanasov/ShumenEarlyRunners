import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import tShirt1 from "../images/tshirtImages/tshirt1.jpg";
import tShirt2 from "../images/tshirtImages/tshirt2.jpg";
import tShirt3 from "../images/tshirtImages/tshirt3.jpg";
import tSDhirtER from "../images/tshirtImages/tshirt1.jpg";
import classes from "./DetailsGallery.module.css";
import "./DetailsGallery.module.css";

const images = [
  {
    original:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FAKSLXg7dh3QTl3GdtnZ9fEqjZTAkwSLSw&s",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FAKSLXg7dh3QTl3GdtnZ9fEqjZTAkwSLSw&s",
  },
  {
    original:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBppNRhf98QeaS9wArGXa3h6Tap_y4Nzo6HA&s",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBppNRhf98QeaS9wArGXa3h6Tap_y4Nzo6HA&s",
  },
  {
    original:
      "https://42krunning.com/wp-content/uploads/2025/03/camiseta-running-42k-milano-frontal.png",
    thumbnail:
      "https://42krunning.com/wp-content/uploads/2025/03/camiseta-running-42k-milano-frontal.png",
  },
];

export default function MyGallery() {
  return (
    <ImageGallery
      className="image-gallery-thumbnails-wrapper image-gallery-thumbnails-bottom thumbnails-swipe-horizontal"
      items={images}
    />
  );
}
