import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../assets/mainNavigation/MainNavigation";
import Footer from "./mainNavigation/Footer";
import classes from "../assets/Root.module.css";
import { useEffect } from "react";
import { getTokenDuration } from "./util/auth";

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(
      () => {
        submit(null, { action: "/logout", method: "post" });
      },
      1 * 60 * 60 * 1000,
    );
  }, [token, submit]);

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
