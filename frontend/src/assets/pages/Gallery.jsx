import Lightbox from "yet-another-react-lightbox";
// import { slides } from "../components/GalleryYet/dataImages";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Images from "../components/GalleryYet/Images";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useEffect, useState } from "react";

export default function App() {
  const [index, setIndex] = useState(-1);
  const [imagesData, setImagesData] = useState([]);
  const [imagesSlides, setImagesSlides] = useState([]);

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/gallery")
      .then((response) => response.json())
      .then((response) => {
        setImagesData(response[0].data);
        setImagesSlides(response[0].slides);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Images
        data={imagesData}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        slides={imagesSlides}
      />
    </>
  );
}
