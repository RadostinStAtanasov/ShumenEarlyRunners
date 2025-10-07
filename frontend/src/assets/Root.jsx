import { Outlet } from "react-router-dom";
import MainNavigation from "../assets/mainNavigation/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
