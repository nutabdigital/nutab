"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Brain,
  PenTool,
  Briefcase,
  Camera,
  ArrowRight,
  Code,
  MonitorSmartphone,
  ShoppingCart,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Code,
    id: "custom-software",
    name: "Custom Software Solutions",
    description: "We create custom software that streamlines operations and boosts efficiency, tailored to your business needs.",
    link: "/services/custom-software",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: MonitorSmartphone,
    id: "app-development",
    name: "Mobile & Web App Development",
    description: "We create user-friendly apps that provide seamless experiences and help businesses engage customers.",
    link: "/services/app-development",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: LineChart,
    id: "seo-digital-marketing",
    name: "SEO & Digital Marketing",
    description: "Enhance online visibility and attract customers with SEO and targeted digital marketing strategies.",
    link: "/services/seo-marketing",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: ShoppingCart,
    id: "ecommerce-development",
    name: "E-Commerce Development",
    description: "Build scalable e-commerce sites with seamless shopping experiences, secure payments, and inventory management.",
    link: "/services/ecommerce",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Brain,
    id: "ai-automation",
    name: "AI & Automation Solutions",
    description: "Leverage AI-driven tools and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    link: "/services/ai-automation",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Briefcase,
    id: "business-consulting",
    name: "Business & IT Consulting",
    description: "Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
    link: "/services/it-consulting",
    gradient: "from-green-500 to-lime-500",
  },
  {
    icon: PenTool,
    id: "graphic-design",
    name: "Graphic & Brand Design",
    description: "Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    link: "/services/brand-design",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Camera,
    id: "media-production",
    name: "Photography & Media Production",
    description: "High-quality photography and media services for websites, marketing campaigns, and brand storytelling.",
    link: "/services/photo-media",
    gradient: "from-rose-500 to-pink-500",
  },
];

const Services: React.FC = () => {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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
            el.querySelectorAll("h3, p").forEach(child => child.classList.add("!text-white"));
          } else {
            el.classList.remove("scale-105", "!bg-blue-600");
            el.querySelectorAll("h3, p").forEach(child => child.classList.remove("!text-white"));
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-[75vw] max-w-[1200px] mx-auto flex items-center justify-center box-border flex-col p-4 pb-8 bg-white/70 dark:bg-black/70 shadow-lg dark:shadow-black/75 backdrop-blur-xl rounded-3xl z-10 max-md:w-[85vw] max-md:max-w-full">
      <h2 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-2xl font-normal text-center">
        Our Services
      </h2>
      <p className="text-center text-lg mb-6 opacity-85 text-gray-700 dark:text-gray-300">
        Comprehensive digital solutions to help your business thrive
      </p>
      <div className="relative grid grid-cols-4 gap-6 max-[900px]:grid-cols-2 max-md:grid-cols-1">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              href={service.link}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="group rounded-3xl p-4 cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-105 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.gradient} mb-4 mx-auto block`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 font-semibold text-center text-gray-900 dark:text-white group-hover:text-white transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-center opacity-85 text-gray-600 dark:text-gray-400 group-hover:text-white/90 transition-colors">
                {service.description}
              </p>
              <div className="flex justify-center items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-bold text-white mr-2">Learn More</span>
                <ArrowRight className="w-5 h-5 text-white" aria-label="Go to service" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
