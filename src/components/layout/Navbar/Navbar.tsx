"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import style from "./Navbar.module.css";
import NAV_LINKS from "./navLinks";

const WHATSAPP_NUMBER = "6281281700875";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState<"enter" | "exit" | null>(
    null
  );

  const openMenu = () => {
    setIsMenuOpen(true);
    setMenuAnimation("enter");
  };

  const startCloseMenu = () => {
    setMenuAnimation("exit");
  };

  const handleDrawerAnimationEnd = () => {
    if (menuAnimation === "exit") {
      setIsMenuOpen(false);
    }
    setMenuAnimation(null);
  };

  const isDrawerVisible = isMenuOpen || menuAnimation === "exit";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya mengenai layanan Pola Resik Optima."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="grid grid-cols-[auto_1fr_auto] items-center py-6 px-8 md:px-10 bg-white/70 backdrop-blur-lg shadow-md rounded-br-xl rounded-bl-xl tracking-widest text-[12px] fixed top-0 left-0 right-0 w-full z-50">
        {/* Logo */}
        <Link 
            href="/"
            onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
          <div className="flex items-center text-blue-900 gap-2.5">
            <Image
              src="/images/Pola Resik Optima Transparant.png"
              alt="Pola Resik Optima"
              width={60}
              height={100}
              sizes="(max-width: 768px) 30px, 60px"
              className="w-7.5 md:w-auto md:h-auto object-contain"
            />
            <p className="font-bold text-[10px] md:text-[14px] uppercase tracking-widest">
              Pola Resik Optima
            </p>
          </div>
        </Link>

        {/* Links (desktop) */}
        <ul className="hidden md:flex gap-8 justify-center">
          {NAV_LINKS.map((link) => (
            <li className="text-[#3057B6]" key={link.id}>
                <button
                    type="button"
                    className={`nav-link ${style.navLink} cursor-pointer`}
                    onClick={() => scrollToSection(link.id)}
                >
                    {link.label}
                </button>
            </li>
          ))}
        </ul>

        {/* Tombol Hubungi (desktop) */}
        <div className="hidden md:block">
          <Button
            label="Hubungi Kami"
            onClick={openWhatsApp}
            className="bg-[#3057B6] py-2 px-4 rounded cursor-pointer shadow-lg text-white hover:bg-[#25489E] transition duration-300"
          />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`md:hidden justify-self-end p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${style.hamburger} ${
            isMenuOpen ? style.hamburgerOpen : ""
          }`}
          onClick={isMenuOpen ? startCloseMenu : openMenu}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          <span className={style.hamburgerLine} />
          <span className={style.hamburgerLine} />
          <span className={style.hamburgerLine} />
        </button>
      </nav>

      {/* Overlay blur background */}
      {isDrawerVisible && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-25 md:hidden"
          onClick={startCloseMenu}
        />
      )}

      {/* Drawer kanan (mobile menu) */}
      {isDrawerVisible && (
        <div
          className={`fixed top-16 right-0 h-screen w-2/3 bg-white/90 backdrop-blur-lg shadow-2xl z-25 py-8 px-6 flex flex-col md:hidden ${
            menuAnimation === "exit"
              ? style.mobileDrawerExit
              : style.mobileDrawerEnter
          }`}
          onAnimationEnd={handleDrawerAnimationEnd}
        >
          <nav className="flex flex-col gap-6 mt-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`nav-link ${style.navLink} text-[16px] text-[#3057B6] text-left cursor-pointer`}
                onClick={() => {
                    scrollToSection(link.id);
                    startCloseMenu();
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-5">
            <Button
              label="Hubungi Kami"
              onClick={openWhatsApp}
              className="w-full bg-[#3057B6] py-2 px-4 rounded cursor-pointer shadow-lg text-white hover:bg-[#25489E] transition duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;