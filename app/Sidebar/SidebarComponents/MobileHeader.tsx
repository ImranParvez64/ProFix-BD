"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function MobileHeader({ open, setOpen }: Props) {
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full h-14 bg-primary flex items-center justify-between px-4 z-50 border-b border-white/10">
      <Link href="#home" onClick={() => setOpen(false)}>
        <Image
          src="/logo2.png"
          alt="ProFix BD"
          width={180}
          height={50}
          className="object-contain"
        />
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-white/10 text-white"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
