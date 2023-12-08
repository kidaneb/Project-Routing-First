import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { NavBar } from "./NavBar";

export function RootLayout() {
  const { state } = useNavigation();

  return (
    <>
      <NavBar />
      <ScrollRestoration />
      {state === "loading" ? (
        <>
          <div className="loading-spinner"></div>
          <div className="container loading">
            <Outlet />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
