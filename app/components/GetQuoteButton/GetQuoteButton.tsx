"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./GetQuoteButton.css";


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
    <button className="get-quote-button" onClick={handleClick}>
      Get a Quote Today
    </button>
  );
};

export default GetQuoteButton;