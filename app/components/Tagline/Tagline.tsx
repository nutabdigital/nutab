// Tagline.tsx
import React from "react";
import { scrollToSection } from "@/app/utils/scrollToSection";

const Tagline: React.FC = () => {

  return (
    <section className="relative flex justify-center items-center h-screen w-[50vw] box-border caret-transparent z-10 max-[600px]:w-[85vw]">
      <div className="relative w-[50vw] max-w-[700px] box-border p-6 mx-[2.5vw] bg-white/75 dark:bg-[rgba(10,10,10,0.75)] text-gray-900 dark:text-white shadow-lg dark:shadow-black/75 backdrop-blur-xl rounded-3xl z-10 will-change-[transform,opacity] max-[600px]:w-[85vw] max-[600px]:mx-0 max-[600px]:shadow-md max-[600px]:bg-white/95 dark:max-[600px]:bg-[rgba(10,10,10,0.95)] max-[600px]:backdrop-blur-none min-[601px]:bg-transparent min-[601px]:dark:bg-transparent min-[601px]:shadow-none min-[601px]:backdrop-blur-none min-[601px]:border-0 min-[601px]:text-left">
        {/* Orbs for visual effect */}
        <div className="absolute top-6 left-6 w-14 h-14 bg-purple-500/40 rounded-full blur-[32px] z-[1] pointer-events-none transform-gpu max-[600px]:blur-[16px]"></div>
        <div className="absolute bottom-10 right-8 w-20 h-20 bg-blue-500/30 rounded-full blur-[32px] z-[1] pointer-events-none transform-gpu max-[600px]:blur-[16px] min-[601px]:hidden"></div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.3] font-bold text-center mb-2 will-change-[opacity,transform] opacity-100 visible min-[601px]:text-left">
          <span>Open a New Tab,</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent" style={{ textShadow: '0 1px 6px rgba(168, 85, 247, 0.2), 0 1px 10px rgba(139, 92, 246, 0.13)' }}>Start Something Extraordinary.</span>
        </h1>
        <p className="text-lg sm:text-xl font-normal leading-relaxed mb-8 opacity-85 text-gray-600 dark:text-gray-300 text-center will-change-[opacity,transform] min-[601px]:text-left">
          Elevating brands through modern<br />web design & development
        </p>
        <div className="flex gap-4 justify-center min-[601px]:justify-start">
          <button
            className="relative overflow-hidden px-8 py-4 w-fit text-lg font-semibold rounded-full border-0 text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 cursor-pointer transition-all duration-300 will-change-[transform,opacity] hover:opacity-90 hover:shadow-indigo-500/40 hover:scale-105"
            onClick={() => scrollToSection("about", 10)}
          >
            <span className="relative z-[1]">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tagline;