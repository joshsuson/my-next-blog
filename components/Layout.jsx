import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="py-10">
        <h1 className="uppercase text-5xl text-center font-bold mb-1">
          <Link href="/">
            <a>
              Josh <span className="text-teal-400">Suson</span>
            </a>
          </Link>
        </h1>
        <h2 className="text-center text-2xl italic font-light mb-4">
          Developing With Purpose
        </h2>
        <nav className="text-center">
          <ul className="flex justify-center gap-4 text-lg uppercase">
            <li>
              <Link href="/">
                <a className="first-custom-hover">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="first-custom-hover">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="first-custom-hover">My Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="first-custom-hover">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
