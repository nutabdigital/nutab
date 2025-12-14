"use client";
import React, { useEffect, useRef } from "react";
import { Wrench, HeartHandshake, Globe } from "lucide-react";

const aboutItems = [
  {
    icon: Wrench,
    title: "What We Do",
    description: "We create tailored solutions for businesses—whether it's building a custom website, improving your SEO, or developing mobile apps to engage your customers.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: HeartHandshake,
    title: "Why Choose Us",
    description: "Our team works face-to-face with Canadian businesses to understand their needs and deliver results that drive growth. We build long-term relationships, not just solutions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Our Vision",
    description: "To empower Canadian businesses with innovative, scalable, and effective digital strategies that boost visibility and success in today's competitive market.",
    gradient: "from-cyan-500 to-teal-500",
  },
];

const About: React.FC = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mm = window.matchMedia("(max-width: 600px)");
    if (!mm.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("scale-105", "!bg-blue-600");
            el.querySelectorAll("p, h3").forEach(child => child.classList.add("!text-white"));
          } else {
            el.classList.remove("scale-105", "!bg-blue-600");
            el.querySelectorAll("p, h3").forEach(child => child.classList.remove("!text-white"));
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex items-center justify-center box-border w-screen min-h-screen z-10 py-8 max-md:items-start max-md:pt-8 max-md:h-auto">
      <div className="flex flex-col items-center box-border w-[75vw] max-w-[1200px] p-4 mx-auto bg-white/70 dark:bg-black/70 shadow-lg dark:shadow-black/75 rounded-3xl z-10 backdrop-blur-xl max-md:w-[85vw]">
        <div className="text-center text-gray-900 dark:text-white">
          <div className="flex flex-col items-center justify-center mb-2">
            <img
              src="/icons/maple-leaf-icon.svg"
              alt="Canadian maple leaf icon representing local service"
              className="w-10 h-10 mb-2"
              loading="lazy"
              width="40"
              height="40"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Built in Canada, Designed for Growth
            </h2>
          </div>
          <p className="text-lg font-normal text-center mb-6 opacity-85 text-gray-700 dark:text-gray-300">
            Your Digital Partner from Coast to Coast
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 w-full p-4 max-[900px]:grid-cols-1 max-[900px]:gap-6">
          {aboutItems.map(({ icon: Icon, title, description, gradient }, index) => (
            <div
              key={title}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="group cursor-pointer rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:bg-blue-600 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm max-md:text-center"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${gradient} mb-4`}>
                  <Icon className="w-8 h-8 text-white" aria-label={title} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">{title}</h3>
              </div>
              <p className="text-center opacity-85 leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-white/90 transition-colors">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
