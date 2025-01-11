"use client";

import Nav from "@src/components/Nav";

function Header() {
  return (
    <header className="p-4 border-b border-1 border-primary-100	sticky top-0 bg-white z-10">
      <Nav />
    </header>
  );
}

export default Header;
