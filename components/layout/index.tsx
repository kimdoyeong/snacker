import React from "react";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <NavBar />
    </header>
    <article>{children}</article>
  </>
);

export default Layout;
