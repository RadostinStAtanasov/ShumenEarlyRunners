import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/pages/Home";
import ContactPage from "./assets/pages/Contact";
import RootLayout from "./assets/Root";
import InfoPage from "./assets/pages/Info";
import ForUsPage from "./assets/pages/ForUs";
import ResultsPage from "./assets/pages/Results";
import GadgetsPage from "./assets/pages/Gadgets";
import EventsPage from "./assets/pages/Events";
import GalleryPage from "./assets/pages/Gallery";
import Footer from "./assets/mainNavigation/Footer";
import ProductsPage from "./assets/pages/Products";
import MadaraPage from "./assets/pages/MadaraTrail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/начало", element: <HomePage /> },
      { path: "/контакти", element: <ContactPage /> },
      { path: "/галерия", element: <GalleryPage /> },
      { path: "/новини", element: <InfoPage /> },
      { path: "/за насс", element: <ForUsPage /> },
      { path: "/резултати", element: <ResultsPage /> },
      { path: "/джаджи", element: <GadgetsPage /> },
      { path: "/събития", element: <EventsPage /> },
      { path: "/продукти", element: <ProductsPage /> },
      { path: "/мадараТрейл", element: <MadaraPage /> },
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
