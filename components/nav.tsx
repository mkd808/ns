"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedWords from "./movenav"; // Adjust path if needed

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/100 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4">
          {/* Hamburger Icon */}
          <button
            className="relative w-8 h-8 flex flex-col justify-center items-center group z-50"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {/* Hamburger/Close animation */}
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ${
                open ? "rotate-45 top-3.5" : "top-2"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ${
                open ? "opacity-0" : "top-4"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ${
                open ? "-rotate-45 top-3.5" : "top-6"
              }`}
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="uppercase tracking-widest text-[11.2px] text-[#dad7cd] font-mono font-semibold px-2 py-1 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <AnimatedWords text="HOME" />
            </Link>
            <Link
              href="/services"
              className="uppercase tracking-widest text-[11.2px] text-[#dad7cd] font-mono font-semibold px-2 py-1 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <AnimatedWords text="SERVICES" />
            </Link>
            <Link
              href="/partners"
              className="uppercase tracking-widest text-[11.2px] text-[#dad7cd] font-mono font-semibold px-2 py-1 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <AnimatedWords text="PARTNERS" />
            </Link>
            <Link
              href="/"
              className="ml-6 px-4 py-2 bg-black text-[#dad7cd] rounded font-mono text-[11.2px] font-bold flex items-center gap-2 shadow opacity-70 hover:opacity-100 transition-opacity duration-200 tracking-widest uppercase"
            >
              <AnimatedWords text="LOGIN" /> <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
{/* Fullscreen Overlay Menu */}
{open && (
  <div className="fixed inset-0 bg-black/95 z-70 flex flex-col items-start px-8 py-8">
    {/* Close (X) icon */}
    <button
      className="mb-12 text-3xl text-gray-300 hover:text-white"
      onClick={() => setOpen(false)}
      aria-label="Close menu"
    >
      &times;
    </button>
    <nav className="flex flex-col gap-4 w-full">
      {[
        { href: "/", label: "HOME" },
        { href: "/services", label: "SERVICES" },
        { href: "/partners", label: "PARTNERS" },
        { href: "/contact", label: "CONTACT US" },
      ].map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-6xl font-extrabold tracking-tight text-gray-200 hover:text-[rgb(223,91,39)] transition-colors duration-200 animated-fade-in-up"
          style={{ animationDelay: `${0.1 + i * 0.2}s` }}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </div>
)}

    </>
  );
}
