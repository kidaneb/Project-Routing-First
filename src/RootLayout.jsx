import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { NavBar } from "./NavBar";

export function RootLayout() {
  const {state} = useNavigation();

    return (
      <>
        <NavBar />
        <ScrollRestoration />
        {state === "loading" ? (
      <>
      <div class="loading-spinner"></div>
      <div class="container loading">

        <Outlet />
        </div>
      </>
      ) : (
        <Outlet />
        
      )}
      </>
    );
  }
  