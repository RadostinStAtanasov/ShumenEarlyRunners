import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../components/dataImages";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Images from "../components/Images";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import ds1 from "../images/5kmCommon/DSC05701.jpg";
import ds2 from "../images/5kmCommon/DSC05702.jpg";
import ds3 from "../images/5kmCommon/DSC05703.jpg";
import ds4 from "../images/5kmCommon/DSC05704.jpg";

export default function App() {
  // const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Images
        data={slides}
        // onClick={(currentIndex) => console.log(currentIndex)}
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
        slides={
          slides
          //   [
          //   {
          //     src: ds1,
          //     title: "Irun logo",
          //     desciption: "image1 caption",
          //   },
          //   {
          //     src: ds2,
          //     title: "Irun logo2",
          //     desciption: "image1 caption",
          //   },
          //   {
          //     src: ds3,
          //     title: "Irun logo3",
          //     desciption: "image1 caption",
          //   },
          //   {
          //     src: ds4,
          //     title: "Irun logo4",
          //     desciption: "image1 caption",
          //   },
          // ]
        }
      />
    </>
  );
}
