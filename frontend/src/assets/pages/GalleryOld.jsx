// "use client";

// import { ImageGallery } from "react-image-grid-gallery";
// import image from "../images/irina.jpg";
// import classes from "../pages/Gallery.module.css";

// const imagesArray = [
//   {
//     id: "uniqueid2",
//     alt: "image2s alt text",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
//   },
//   {
//     id: "uniqueid3",
//     alt: "image3s alt text",
//     caption: "image2 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid4",
//     alt: "image4s alt text",
//     caption: "image3 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid5",
//     alt: "image5s alt text",
//     caption: "image4 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid6",
//     alt: "image6s alt text",
//     caption: "image6 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid1",
//     alt: "iRun1",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid2",
//     alt: "image2s alt text",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid3",
//     alt: "image3s alt text",
//     caption: "image2 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid4",
//     alt: "image4s alt text",
//     caption: "image3 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid5",
//     alt: "image5s alt text",
//     caption: "image4 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid6",
//     alt: "image6s alt text",
//     caption: "image6 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid1",
//     alt: "iRun1",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid2",
//     alt: "image2s alt text",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid3",
//     alt: "image3s alt text",
//     caption: "image2 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid4",
//     alt: "image4s alt text",
//     caption: "image3 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid5",
//     alt: "image5s alt text",
//     caption: "image4 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid6",
//     alt: "image6s alt text",
//     caption: "image6 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid1",
//     alt: "iRun1",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid2",
//     alt: "image2s alt text",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid3",
//     alt: "image3s alt text",
//     caption: "image2 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid4",
//     alt: "image4s alt text",
//     caption: "image3 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid5",
//     alt: "image5s alt text",
//     caption: "image4 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid6",
//     alt: "image6s alt text",
//     caption: "image6 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid1",
//     alt: "iRun1",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid2",
//     alt: "image2s alt text",
//     caption: "image1 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid3",
//     alt: "image3s alt text",
//     caption: "image2 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid4",
//     alt: "image4s alt text",
//     caption: "image3 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid5",
//     alt: "image5s alt text",
//     caption: "image4 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
//   {
//     id: "uniqueid6",
//     alt: "image6s alt text",
//     caption: "image6 caption",
//     src: "https://trud.bg/storage/media/2019-08/844201/24-03_2450828420060106938_original.jpg",
//   },
// ];

// export default function GalleryPage() {
//   return <ImageGallery imagesInfoArray={imagesArray} gapSize={24} />;
// }
