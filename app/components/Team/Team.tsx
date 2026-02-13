"use client";
import React, { useEffect } from "react";
import Image from 'next/image';

// Contact structure
interface Contact {
  name: string;
  phone: string;
  email: string;
  company: string;
  website: string;
  photo: string;
}

interface TeamProps {
  onSelectContact: (contact: Contact) => void;
}

// Contact database
const contacts: Record<string, Contact> = {
  navjot: {
    name: "Navjot Saran",
    phone: "(587) 707-2495",
    email: "navjots@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/nav-headshot.webp",
  },
  fysal: {
    name: "Fysal Beauferris",
    phone: "(587) 888-6755",
    email: "fysalb@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/fysal-headshot.webp",
  },
};

const Team: React.FC<TeamProps> = ({ onSelectContact }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Guard for older browsers that don't support IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') return;

    const mm = window.matchMedia('(max-width: 600px)');
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      // cleanup any existing observer first
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (!mm.matches) return;

      const elements = Array.from(document.querySelectorAll<HTMLElement>('.team-member'));
      if (!elements.length) {
        return;
      }

      observer = new IntersectionObserver((entries) => {
        // gather intersecting entries
        const intersecting = entries.filter(e => e.isIntersecting);
        if (!intersecting.length) {
          // nothing intersecting: remove inview from any elements encountered
          entries.forEach(entry => {
            const el = entry.target as HTMLElement;
            if (el.classList.contains('scale-110')) {
              el.classList.remove('scale-110');
            }
          });
          return;
        }

        const viewportMid = window.innerHeight / 2;
        const distances = intersecting.map(entry => {
          const el = entry.target as HTMLElement;
          const rect = el.getBoundingClientRect();
          const elemMid = rect.top + rect.height / 2;
          const dist = Math.abs(elemMid - viewportMid);
          return { entry, el, dist, elemMid };
        });

        const minDist = Math.min(...distances.map(d => d.dist));
        const allowed = Math.max(10, window.innerHeight * 0.05); // 5% of viewport or 10px

        distances.forEach(({ el, dist }) => {
          if (dist <= allowed || dist === minDist) {
            if (!el.classList.contains('scale-110')) {
              el.classList.add('scale-110');
            }
          } else {
            if (el.classList.contains('scale-110')) {
              el.classList.remove('scale-110');
            }
          }
        });
      }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

      elements.forEach(el => observer!.observe(el));
    };

    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      document.querySelectorAll('.team-member.scale-110').forEach(n => n.classList.remove('scale-110'));
    };

    const mqListener = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      if (matches) setup();
      else cleanup();
    };

    // initialize (handles both initial mobile and desktop->mobile changes)
    if (mm.matches) setup();

    if ((mm as any).addEventListener) (mm as any).addEventListener('change', mqListener);
    else (mm as any).addListener(mqListener);

    return () => {
      cleanup();
      if ((mm as any).removeEventListener) (mm as any).removeEventListener('change', mqListener);
      else (mm as any).removeListener(mqListener as any);
    };
  }, []);

  return (
    <section className="w-[85vw] md:w-[50vw] max-w-[700px] flex flex-col items-center justify-center box-border p-4 pb-8 mx-[2.5vw] bg-white/75 text-[var(--foreground)] shadow-[0_4px_12px_rgba(3,3,3,0.198)] backdrop-blur-lg rounded-[1.5rem] z-10 dark:bg-[rgba(10,10,10,0.7)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.752)]">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Our Team</h2>
      <p className="text-center text-[1.15rem] mb-8 opacity-[0.85]">Meet the passionate developers behind NuTab Digital</p>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16 flex-wrap w-full">
        <div className="cursor-pointer text-center max-w-[300px] w-full flex-1 transform transition-transform duration-500 ease-in-out hover:scale-110" onClick={() => onSelectContact(contacts.navjot)}>
          <Image
            className="w-[90%] max-w-[200px] h-[90%] max-h-[200px] aspect-square object-cover rounded-full mx-auto mb-4 border-[0.25rem] border-[rgba(0,103,231,0.5)] block"
            src={contacts.navjot.photo}
            alt="Navjot Saran headshot"
            loading="lazy"
            width={200}
            height={200}
            decoding="async"
          />
          <p className="text-[1.5rem] font-normal my-2">Navjot Saran</p>
          <p className="bg-[#0067e7] rounded-[1.5rem] font-normal mb-2 text-white inline-block px-3 py-1 text-[1rem]">Co-Founder</p>
          <p className="text-[1.05rem] font-normal text-[#0067e7] opacity-[0.95] mt-1 mb-2 tracking-[0.01em]">Software Developer</p>
          <p className="opacity-[0.85]">B.Sc. in Computer Science, University of Calgary</p>
        </div>

        <div className="cursor-pointer text-center max-w-[300px] w-full flex-1 transform transition-transform duration-500 ease-in-out hover:scale-110" onClick={() => onSelectContact(contacts.fysal)}>
          <Image
            className="w-[90%] max-w-[200px] h-[90%] max-h-[200px] aspect-square object-cover rounded-full mx-auto mb-4 border-[0.25rem] border-[rgba(0,103,231,0.5)] block"
            src={contacts.fysal.photo}
            alt="Fysal Beauferris headshot"
            loading="lazy"
            width={200}
            height={200}
            decoding="async"
          />
          <p className="text-[1.5rem] font-normal my-2">Fysal Beauferris</p>
          <p className="bg-[#0067e7] rounded-[1.5rem] font-normal mb-2 text-white inline-block px-3 py-1 text-[1rem]">Co-Founder</p>
          <p className="text-[1.05rem] font-normal text-[#0067e7] opacity-[0.95] mt-1 mb-2 tracking-[0.01em]">Software Developer</p>
          <p className="opacity-[0.85]">B.Sc. in Computer Science, University of Calgary</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
