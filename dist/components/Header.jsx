import { useState } from "react";

export default function Header({ darkMode, ontoggle }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <h2 className="header-title">TODO</h2>
      <img
        className="header-icon"
        onClick={ontoggle}
        src={darkMode ? "./icon-sun.svg" : "./icon-moon.svg"}
        alt={darkMode ? "./icon-sun.svg" : "./icon-moon.svg"}
      />
    </header>
    // </div>
  );
}
