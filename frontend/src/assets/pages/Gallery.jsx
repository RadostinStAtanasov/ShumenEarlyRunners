import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from "../../assets/components/dataImages";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../components/Images";

import "yet-another-react-lightbox/plugins/captions.css";

export default function App() {
  // const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button> */}

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        // open={open}
        // close={() => setOpen(false)}

        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
      />
    </>
  );
}
