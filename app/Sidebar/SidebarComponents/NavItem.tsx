"use client";

import Link from "next/link";

type Props = {
  item: any;
  isActive: boolean;
  onClick: () => void;
};

export default function NavItem({ item, isActive, onClick }: Props) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        flex items-center gap-4 px-8 py-3.5 text-sm
        transition-all duration-300
        ${
          isActive
            ? "bg-white/15 text-yellow-400 border-l-4 border-yellow-400"
            : "hover:bg-white/10 hover:text-yellow-300"
        }
      `}
    >
      <Icon size={18} className="opacity-80" />
      {item.name}
    </Link>
  );
}
