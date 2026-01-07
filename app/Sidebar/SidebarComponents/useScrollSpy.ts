"use client";

import { useEffect } from "react";
import { navItems } from "./navItems";

export function useScrollSpy(
  isManualScroll: boolean,
  setActiveSection: (id: string) => void
) {
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(
          navItems[i].href
        ) as HTMLElement | null;

        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll, setActiveSection]);
}
