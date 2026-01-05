"use client";
import React, { useState } from 'react';
import { 
  Home, User, Settings, Image as ImageIcon, 
  MessageSquare, Phone, Facebook, MessageCircle, Menu, X 
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: <Home size={18} />, href: '#' },
  { name: 'About Us', icon: <User size={18} />, href: '#' },
  { name: 'Services', icon: <Settings size={18} />, href: '#' },
  { name: 'Gallery', icon: <ImageIcon size={18} />, href: '#' },
  { name: 'Testimonials', icon: <MessageSquare size={18} />, href: '#' },
  { name: 'Contact', icon: <Phone size={18} />, href: '#' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* মোবাইল মেনু বাটন - এটি শুধু মোবাইলে (lg এর নিচে) দেখা যাবে */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#1a3a6d] p-4 flex justify-between items-center z-50 border-b border-white/10">
        <div className="text-white font-bold text-sm tracking-widest uppercase">My Logo</div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white bg-white/10 rounded-md active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* সাইডবার মেইন কন্টেইনার */}
      <aside className={`
        fixed top-0 left-0 h-screen bg-[#1a3a6d] text-white flex flex-col z-[60]
        transition-transform duration-300 ease-in-out
        /* মোবাইল ভিউ: স্ক্রিনের বাইরে থাকবে */
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        /* ডেক্সটপ ভিউ (lg: 1024px+): সব সময় ফিক্সড থাকবে */
        lg:translate-x-0 lg:w-[220px] w-64
      `}>
        
        {/* লোগো সেকশন */}
        <div className="h-32 flex flex-col items-center justify-center border-b border-white/5">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-lg mb-2">
            <span className="text-[#1a3a6d] font-black text-xl">E</span>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase opacity-60">Electrical Service</p>
        </div>

        {/* নেভিগেশন লিঙ্কস */}
        <nav className="flex-1 py-8 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // লিঙ্কে ক্লিক করলে মোবাইলে মেনু বন্ধ হবে
              className="flex items-center gap-4 px-8 py-3.5 hover:bg-[#254d8c] hover:text-yellow-400 transition-all duration-200 text-[13px] font-medium group"
            >
              <span className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
        </nav>

        {/* সোশ্যাল আইকন */}
        <div className="p-8 flex gap-5 border-t border-white/5 items-center justify-center lg:justify-start">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-blue-400 transition-all"><Facebook size={20} /></a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-green-400 transition-all"><MessageCircle size={20} /></a>
        </div>
      </aside>

      {/* ওভারলে (Overlay) - মোবাইলে মেনু খুললে ব্যাকগ্রাউন্ড ঝাপসা করবে */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;