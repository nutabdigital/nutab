// WindowService.tsx meant to act as global window listener
import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Mobile if width is less than 600px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return isMobile;
};
