import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1 className="uppercase text-5xl text-center">
          <Link href="/">
            <a>
              Josh <span className="text-green-400">Suson</span>
            </a>
          </Link>
        </h1>
        <div>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
