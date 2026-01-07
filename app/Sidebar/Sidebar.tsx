"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { useScrollSpy } from "./SidebarComponents/useScrollSpy";
import MobileHeader from "./SidebarComponents/MobileHeader";
import NavItem from "./SidebarComponents/NavItem";
import { navItems } from "./SidebarComponents/navItems";
import SocialIcon from "./SidebarComponents/SocialIcon";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* scroll spy */
  useScrollSpy(isManualScroll, setActiveSection);

  return (
    <>
      <MobileHeader open={open} setOpen={setOpen} />

      <aside
        className={`
          fixed top-0 left-0 h-screen bg-primary text-white z-60
          w-72 lg:w-64 flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        `}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="h-36 flex items-center px-6 border-b border-white/10"
        >
          <Image
            src="/logo2.png"
            alt="ProFix BD"
            width={260}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Nav */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              isActive={activeSection === item.href.replace("#", "")}
              onClick={() => {
                setIsManualScroll(true);
                setActiveSection(item.href.replace("#", ""));
                setOpen(false);

                setTimeout(() => setIsManualScroll(false), 600);
              }}
            />
          ))}
        </nav>

        {/* Address */}
        <div className="px-6 py-4 border-t border-white/10 text-sm">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
            Office Address
          </p>
          <p className="opacity-80 leading-relaxed">
            ProFix BD Electric Service <br />
            Mirpur, Dhaka <br />
            📞 +880 1912300964
          </p>
        </div>

        {/* Social */}
        <div className="px-6 pb-6 flex gap-3">
          <Link href="https://www.facebook.com/" target="_blank">
            <SocialIcon icon={Facebook} />
          </Link>
          <Link href="https://www.whatsapp.com/" target="_blank">
            <SocialIcon icon={MessageCircle} />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <SocialIcon icon={Instagram} />
          </Link>
          <Link href="https://x.com/" target="_blank">
            <SocialIcon icon={Twitter} />
          </Link>
        </div>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
        />
      )}
    </>
  );
}
