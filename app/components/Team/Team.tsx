"use client";
import React, { useEffect } from "react";
import "./Team.css";
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
            if (el.classList.contains('inview')) {
              el.classList.remove('inview');
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
        console.debug('[TeamObserver] distances:', distances.map(d => ({mid: Math.round(d.elemMid), dist: Math.round(d.dist)})), 'min', Math.round(minDist), 'allowed', Math.round(allowed));

        distances.forEach(({ el, dist }) => {
          if (dist <= allowed || dist === minDist) {
            if (!el.classList.contains('inview')) {
              el.classList.add('inview');
            }
          } else {
            if (el.classList.contains('inview')) {
              el.classList.remove('inview');
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
      document.querySelectorAll('.team-member.inview').forEach(n => n.classList.remove('inview'));
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
    <section className="team-section">
      <h2 className="team-header">Our Team</h2>
      <p className="team-subtitle">
        Meet the passionate developers behind NuTab Digital
      </p>
      <div className="grid-container">
        <div className="team-member" onClick={() => onSelectContact(contacts.navjot)}>
          <Image
            className="photo"
            src={contacts.navjot.photo}
            alt="Navjot Saran headshot"
            loading="lazy"
            width={200}
            height={200}
            decoding="async"
          />
          <p className="team-name">Navjot Saran</p>
          <p className="team-role">Co-Founder</p>
          <p className="team-position">Software Developer</p>
          <p className="team-description">
            B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
        <div className="team-member" onClick={() => onSelectContact(contacts.fysal)}>
          <Image
            className="photo"
            src={contacts.fysal.photo}
            alt="Fysal Beauferris headshot"
            loading="lazy"
            width={200}
            height={200}
            decoding="async"
          />
          <p className="team-name">Fysal Beauferris</p>
          <p className="team-role">Co-Founder</p>
          <p className="team-position">Software Developer</p>
          <p className="team-description">
            B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
