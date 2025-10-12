import { Outlet } from "react-router-dom";
import MainNavigation from "../assets/mainNavigation/MainNavigation";
import Footer from "./mainNavigation/Footer";
import classes from "../assets/Root.module.css";

export default function RootLayout() {
  return (
    <div className={classes.container}>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
