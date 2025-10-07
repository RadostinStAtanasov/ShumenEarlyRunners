import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "../src/assets/mainNavigation/MainNavigation";
import HomePage from "./assets/pages/Home";
import ContactPage from "./assets/pages/Contact";
import RootLayout from "./assets/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
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
