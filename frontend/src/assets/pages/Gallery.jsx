import classes from "./Gallery.module.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

import first2 from "../images/picsFromRunning/1.jpg";
import second2 from "../images/picsFromRunning/2.jpg";
import third2 from "../images/picsFromRunning/3.jpg";
import forth2 from "../images/picsFromRunning/4.jpg";
import five2 from "../images/picsFromRunning/5.jpg";
import six2 from "../images/picsFromRunning/6.jpg";
import seven2 from "../images/picsFromRunning/7.jpg";
//import eight2 from "../images/picsFromRunning/8.jpg";
import nine2 from "../images/picsFromRunning/9.jpg";
import ten2 from "../images/picsFromRunning/10.jpg";
import first3 from "../images/picsFromRunning/11.jpg";
import second3 from "../images/picsFromRunning/12.jpg";
import third3 from "../images/picsFromRunning/13.jpg";
import forth3 from "../images/picsFromRunning/14.jpg";
import five3 from "../images/picsFromRunning/15.jpg";
import six3 from "../images/picsFromRunning/16.jpg";
import seven3 from "../images/picsFromRunning/17.jpg";
import eight3 from "../images/picsFromRunning/18.jpg";
import nine3 from "../images/picsFromRunning/19.jpg";
import ten3 from "../images/picsFromRunning/20.jpg";
import first4 from "../images/picsFromRunning/21.jpg";
import second4 from "../images/picsFromRunning/22.jpg";
import third4 from "../images/picsFromRunning/23.jpg";
import forth4 from "../images/picsFromRunning/24.jpg";
import five4 from "../images/picsFromRunning/25.jpg";
import six4 from "../images/picsFromRunning/26.jpg";
import seven4 from "../images/picsFromRunning/27.jpg";
import eight4 from "../images/picsFromRunning/28.jpg";
import nine4 from "../images/picsFromRunning/29.jpg";
import ten4 from "../images/picsFromRunning/30.jpg";
import first5 from "../images/picsFromRunning/31.jpg";
import second5 from "../images/picsFromRunning/32.jpg";
import third5 from "../images/picsFromRunning/33.jpg";
import forth5 from "../images/picsFromRunning/34.jpg";
import five5 from "../images/picsFromRunning/35.jpg";
import six5 from "../images/picsFromRunning/36.jpg";
import seven5 from "../images/picsFromRunning/37.jpg";
import eight5 from "../images/picsFromRunning/38.jpg";
import nine5 from "../images/picsFromRunning/39.jpg";
import ten5 from "../images/picsFromRunning/40.jpg";
import first6 from "../images/picsFromRunning/41.jpg";
import second6 from "../images/picsFromRunning/42.jpg";
import third6 from "../images/picsFromRunning/43.jpg";
import forth6 from "../images/picsFromRunning/44.jpg";
import five6 from "../images/picsFromRunning/45.jpg";
import six6 from "../images/picsFromRunning/46.jpg";
import seven6 from "../images/picsFromRunning/47.jpg";
import eight6 from "../images/picsFromRunning/48.jpg";
import nine6 from "../images/picsFromRunning/49.jpg";
import ten6 from "../images/picsFromRunning/50.jpg";
import first7 from "../images/picsFromRunning/51.jpg";
//import second7 from "../images/picsFromRunning/52.jpg";
//import third7 from "../images/picsFromRunning/53.jpg";
import forth7 from "../images/picsFromRunning/54.jpg";
import five7 from "../images/picsFromRunning/55.jpg";
import six7 from "../images/picsFromRunning/56.jpg";
import seven7 from "../images/picsFromRunning/57.jpg";
import eight7 from "../images/picsFromRunning/58.jpg";
import nine7 from "../images/picsFromRunning/59.jpg";
import ten7 from "../images/picsFromRunning/60.jpg";
import first8 from "../images/picsFromRunning/61.jpg";
import second8 from "../images/picsFromRunning/62.jpg";
import third8 from "../images/picsFromRunning/63.jpg";
import forth8 from "../images/picsFromRunning/64.jpg";
import five8 from "../images/picsFromRunning/65.jpg";
import six8 from "../images/picsFromRunning/66.jpg";
import seven8 from "../images/picsFromRunning/67.jpg";
import eight8 from "../images/picsFromRunning/68.jpg";
import nine8 from "../images/picsFromRunning/69.jpg";
import ten8 from "../images/picsFromRunning/70.jpg";

import fiveKm1 from "../images/5kmCommon/1-5km.jpg";
import fiveKm2 from "../images/5kmCommon/2-5km.jpg";
import fiveKm3 from "../images/5kmCommon/3-5km.jpg";
import fiveKm4 from "../images/5kmCommon/4-5km.jpg";

import ds1 from "../images/5kmCommon/DSC05701.jpg";
import ds2 from "../images/5kmCommon/DSC05702.jpg";
import ds3 from "../images/5kmCommon/DSC05703.jpg";
import ds4 from "../images/5kmCommon/DSC05704.jpg";
import ds5 from "../images/5kmCommon/DSC05705.jpg";
import ds6 from "../images/5kmCommon/DSC05706.jpg";
import ds7 from "../images/5kmCommon/DSC05707.jpg";
import ds8 from "../images/5kmCommon/DSC05708.jpg";
import ds9 from "../images/5kmCommon/DSC05709.jpg";
import ds10 from "../images/5kmCommon/DSC05710.jpg";
import ds11 from "../images/5kmCommon/DSC05712.jpg";
import ds12 from "../images/5kmCommon/DSC05711.jpg";
import ds13 from "../images/5kmCommon/DSC05713.jpg";
import ds14 from "../images/5kmCommon/DSC05714.jpg";
import ds15 from "../images/5kmCommon/DSC05715.jpg";
import ds16 from "../images/5kmCommon/DSC05716.jpg";
import ds17 from "../images/5kmCommon/DSC05717.jpg";
import ds18 from "../images/5kmCommon/DSC05718.jpg";
import ds19 from "../images/5kmCommon/DSC05719.jpg";
import ds20 from "../images/5kmCommon/DSC05720.jpg";
import ds21 from "../images/5kmCommon/DSC05721.jpg";

export default function GalleryPage() {
  return (
    <div className={classes.mainContainer}>
      <Box sx={{ width: 1850, height: 850, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              {/* <a href={item.img}> */}
              <img
                href={item.img}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              {/* </a> */}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: fiveKm1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: fiveKm2,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: fiveKm3,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: fiveKm4,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds2,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds3,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds4,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds5,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds6,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds7,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds8,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds9,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds10,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds11,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds12,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds13,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds14,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds15,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds16,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds17,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds18,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds19,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds20,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: ds21,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: first2,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second2,
    title: "Burger",
  },
  {
    img: third2,
    title: "Camera",
  },
  {
    img: forth2,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five2,
    title: "Hats",
    cols: 2,
  },
  {
    img: six2,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven2,
    title: "Basketball",
  },
  {
    img: nine2,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten2,
    title: "Tomato basil",
  },
  {
    img: first3,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second3,
    title: "Burger",
  },
  {
    img: third3,
    title: "Camera",
  },
  {
    img: forth3,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five3,
    title: "Hats",
    cols: 2,
  },
  {
    img: six3,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven3,
    title: "Basketball",
  },
  {
    img: eight3,
    title: "Fern",
  },
  {
    img: nine3,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten3,
    title: "Tomato basil",
  },
  {
    img: first4,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second4,
    title: "Burger",
  },
  {
    img: third4,
    title: "Camera",
  },
  {
    img: forth4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five4,
    title: "Hats",
    cols: 2,
  },
  {
    img: six4,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven4,
    title: "Basketball",
  },
  {
    img: eight4,
    title: "Fern",
  },
  {
    img: nine4,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten4,
    title: "Tomato basil",
  },
  {
    img: first5,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second5,
    title: "Burger",
  },
  {
    img: third5,
    title: "Camera",
  },
  {
    img: forth5,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five5,
    title: "Hats",
    cols: 2,
  },
  {
    img: six5,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven5,
    title: "Basketball",
  },
  {
    img: eight5,
    title: "Fern",
  },
  {
    img: nine5,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten5,
    title: "Tomato basil",
  },
  {
    img: first6,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second6,
    title: "Burger",
  },
  {
    img: third6,
    title: "Camera",
  },
  {
    img: forth6,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five6,
    title: "Hats",
    cols: 2,
  },
  {
    img: six6,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven6,
    title: "Basketball",
  },
  {
    img: eight6,
    title: "Fern",
  },
  {
    img: nine6,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten6,
    title: "Tomato basil",
  },
  {
    img: first7,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  // {
  //   img: second7,
  //   title: "Burger",
  // },
  // {
  //   img: third7,
  //   title: "Camera",
  // },
  {
    img: forth7,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five7,
    title: "Hats",
    cols: 2,
  },
  {
    img: six7,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven7,
    title: "Basketball",
  },
  {
    img: eight7,
    title: "Fern",
  },
  {
    img: nine7,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten7,
    title: "Tomato basil",
  },
  {
    img: first8,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: second8,
    title: "Burger",
  },
  {
    img: third8,
    title: "Camera",
  },
  {
    img: forth8,
    title: "Coffee",
    cols: 2,
  },
  {
    img: five8,
    title: "Hats",
    cols: 2,
  },
  {
    img: six8,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: seven8,
    title: "Basketball",
  },
  {
    img: eight8,
    title: "Fern",
  },
  {
    img: nine8,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: ten8,
    title: "Tomato basil",
  },
];
