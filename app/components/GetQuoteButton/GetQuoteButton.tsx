"use client";

import React from "react";
import { useRouter } from "next/navigation";


const GetQuoteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    // If already on the homepage, just smooth-scroll to the contact section
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // update the URL hash without reloading
        history.replaceState(null, "", "#contact");
        return;
      }
    }

    // Otherwise perform client-side navigation to home with hash (no full reload)
    router.push("/#contact");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 inline-block bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white rounded-full text-base font-semibold cursor-pointer border-0 shadow-md transform-gpu transition-transform duration-150 hover:-translate-y-[2px] hover:opacity-95"
    >
      <span>Get a Quote Today</span>
    </button>
  );
};

export default GetQuoteButton;