import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";
import fourthImage from "../images/4.jpg";
import fifthImage from "../images/5.jpg";
import sixthImage from "../images/6.jpg";
import seventhImage from "../images/7.jpg";
import eightthImage from "../images/8.jpg";
import ninethImage from "../images/9.jpg";
import tenthImage from "../images/10.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${firstImage}`,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: `${secondImage}`,
    title: "Burger",
  },
  {
    img: `${thirdImage}`,
    title: "Camera",
  },
  {
    img: `${fourthImage}`,
    title: "Coffee",
    cols: 2,
  },
  {
    img: `${fifthImage}`,
    title: "Hats",
    cols: 2,
  },
  {
    img: `${sixthImage}`,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: `${seventhImage}`,
    title: "Basketball",
  },
  {
    img: `${eightthImage}`,
    title: "Fern",
  },
  {
    img: `${ninethImage}`,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: `${tenthImage}`,
    title: "Tomato basil",
  },
  {
    img: `${firstImage}`,
    title: "Sea star",
  },
  {
    img: `${firstImage}`,
    title: "Bike",
    cols: 2,
  },
];
