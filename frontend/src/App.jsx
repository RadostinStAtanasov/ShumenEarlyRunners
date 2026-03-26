import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/pages/Home";
import ContactPage from "./assets/pages/Contact";
import RootLayout from "./assets/Root";
import NewsPage from "./assets/pages/BlogAndNews/BlogAndNews";
import ForUsPage from "./assets/pages/ForUs";
import ResultsPage from "./assets/pages/Results";
import GadgetsPage from "./assets/pages/Gadgets";
import EventsPage from "./assets/pages/Events";
import GalleryPage from "./assets/pages/Gallery";
import ShopPage from "./assets/pages/Shop/Shop";
import MadaraPage from "./assets/pages/BlogAndNews/News/MadaraTrail";
import PartnersPage from "./assets/pages/Partners";
import GeneratedClickedBlogOrNews from "./assets/pages/BlogAndNews/GeneratedClickedBlogOrNews";
import DetailPage from "./assets/pages/Shop/Detail";
import Awsbucket from "./assets/pages/Awsbucket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/начало", element: <HomePage /> },
      { path: "/контакти", element: <ContactPage /> },
      { path: "/галерия", element: <GalleryPage /> },
      { path: "/Блог енд Нюз", element: <NewsPage /> },
      {
        path: "/Блог енд Нюз/:blogAndNewsId",
        element: <GeneratedClickedBlogOrNews />,
      },
      { path: "/За Нас", element: <ForUsPage /> },
      { path: "/резултати", element: <ResultsPage /> },
      { path: "/джаджи", element: <GadgetsPage /> },
      { path: "/събития", element: <EventsPage /> },
      { path: "/магазин", element: <ShopPage /> },
      { path: "/магазин/детайли", element: <DetailPage /> },
      { path: "/мадараТрейл", element: <MadaraPage /> },
      { path: "/партньори", element: <PartnersPage /> },
      { path: "/Awsbucket", element: <Awsbucket /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
