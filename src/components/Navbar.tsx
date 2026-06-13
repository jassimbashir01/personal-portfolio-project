"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen((prev) => !prev);

  const linkClass = (path: string) =>
    `transition-colors ${
      pathname === path ? "text-black" : "text-gray-400 hover:text-black"
    }`;

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Jassim Bashir
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black my-1 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-gray-200 ${
          open ? "max-h-60 py-3" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 text-sm font-medium gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={linkClass("/about")}
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className={linkClass("/projects")}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={linkClass("/contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
