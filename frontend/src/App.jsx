import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/pages/Home";
import ContactPage from "./assets/pages/Contact";
import RootLayout from "./assets/Root";
import NewsPage from "./assets/pages/BlogAndNews/BlogAndNews";
import ForUsPage from "./assets/pages/ForUs";
import ResultsPage from "./assets/pages/Results";
import GadgetsPage from "./assets/pages/Gadgets";
import EventsPage from "./assets/pages/Events/Events";
import GalleryPage from "./assets/pages/Gallery";
import ShopPage from "./assets/pages/Shop/Shop";
import MadaraPage from "./assets/pages/BlogAndNews/News/MadaraTrail";
import PartnersPage from "./assets/pages/Partners";
import GenerateClickedEvent from "./assets/pages/BlogAndNews/GeneratedClickedBlogOrNews.jsx";
import GenerateSelectedEventPage from "./assets/pages/Events/GenerateSelectedEvent.jsx";
import DetailPage from "./assets/pages/Shop/Detail";
import AuthenticationPage, {
  action as authAction,
} from "./assets/pages/Authentication/Authentication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //errorElement: <ErrorPage />, da se napravi
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/начало", element: <HomePage /> },
      { path: "/контакти", element: <ContactPage /> },
      { path: "/галерия", element: <GalleryPage /> },
      { path: "/Блог енд Нюз", element: <NewsPage /> },
      {
        path: "/Блог енд Нюз/:blogAndNewsId",
        element: <GenerateClickedEvent />,
      },
      { path: "/За Нас", element: <ForUsPage /> },
      { path: "/резултати", element: <ResultsPage /> },
      { path: "/джаджи", element: <GadgetsPage /> },
      { path: "/събития", element: <EventsPage /> },
      { path: "/събития/:eventsId", element: <GenerateSelectedEventPage /> },
      { path: "/магазин", element: <ShopPage /> },
      { path: "/магазин/детайли", element: <DetailPage /> },
      { path: "/мадараТрейл", element: <MadaraPage /> },
      { path: "/партньори", element: <PartnersPage /> },
      {
        path: "/register",
        element: <AuthenticationPage />,
        action: authAction,
      },
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
