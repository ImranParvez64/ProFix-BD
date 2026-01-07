"use client";

import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white min-h-screen scroll-mt-20"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* Mobile: form first | Desktop: info first */}
        <ContactInfo />
        <ContactForm />

      </div>
    </section>
  );
}
