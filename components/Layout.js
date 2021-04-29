import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1 className="uppercase text-5xl text-center">
          Josh <span className="text-green-400">Suson</span>
        </h1>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
