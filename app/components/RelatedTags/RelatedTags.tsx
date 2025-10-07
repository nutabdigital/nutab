// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import "./RelatedTags.css";

// export interface RelatedTag {
//   label: string;
//   link?: string;
//   icon?: React.ReactNode;
//   badge?: string | number;
// }

// export interface RelatedTagsProps {
//   tags: (string | RelatedTag)[];
//   title?: string;
//   subtitle?: string;
//   size?: "sm" | "md" | "lg";
//   variant?: "default" | "gradient" | "outlined" | "solid";
//   theme?: "light" | "dark" | "gradient";
//   animated?: boolean;
//   interactive?: boolean;
//   centered?: boolean;
//   className?: string;
//   onTagClick?: (tag: string | RelatedTag, index: number) => void;
// }

// export default function RelatedTags({
//   tags,
//   title,
//   subtitle,
//   size = "md",
//   variant = "gradient",
//   theme = "gradient",
//   animated = true,
//   interactive = true,
//   centered = true,
//   className = "",
//   onTagClick,
// }: RelatedTagsProps) {
//   const [visibleTags, setVisibleTags] = useState<Set<number>>(new Set());
//   // allow anchors or divs (HTMLElement covers both)
//   const tagRefs = useRef<(HTMLElement | null)[]>([]);

//   // Normalize tags to always be objects
//   const normalizedTags: RelatedTag[] = tags.map((tag) =>
//     typeof tag === "string" ? { label: tag } : tag
//   );

//   useEffect(() => {
//     if (!animated) {
//       setVisibleTags(new Set(normalizedTags.map((_, idx) => idx)));
//       return;
//     }

//     const observers = tagRefs.current.map((ref, index) => {
//       if (!ref) return null;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               // create a new Set from prev, add the index, return it
//               setVisibleTags((prev) => {
//                 const s = new Set(prev);
//                 s.add(index);
//                 return s;
//               });
//             }
//           });
//         },
//         { threshold: 0.1 }
//       );

//       observer.observe(ref);
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer?.disconnect());
//     };
//     // If normalizedTags identity changes every render, consider depending on tags.length or a stable key.
//   }, [normalizedTags, animated]);

//   const handleTagClick = (tag: RelatedTag, index: number) => {
//     if (onTagClick) {
//       onTagClick(tag, index);
//     } else if (tag.link) {
//       window.location.href = tag.link;
//     }
//   };

//   return (
//     <div className={`related-tags-wrapper ${className}`}>
//       {title && (
//         <div className="related-tags-header">
//           <h2 className="related-tags-title">{title}</h2>
//           {subtitle && <p className="related-tags-subtitle">{subtitle}</p>}
//         </div>
//       )}

//       <div
//         className={`related-tags-container ${
//           centered ? "related-tags-container--centered" : ""
//         }`}
//       >
//         {normalizedTags.map((tag, index) => {
//           const commonClass = `related-tag related-tag--${size} related-tag--${variant} related-tag--${theme} ${
//             visibleTags.has(index) ? "related-tag--visible" : ""
//           } ${animated ? "related-tag--animated" : ""} ${
//             interactive ? "related-tag--interactive" : ""
//           }`;

//           const commonStyle = {
//             animationDelay: animated ? `${index * 0.1}s` : "0s",
//           };

//           // If tag has a link, render an <a>
//           if (tag.link) {
//             return (
//               <a
//                 key={tag.label + index}
//                 href={tag.link}
//                 ref={(el) =>
//                   // cast to HTMLAnchorElement | null so TS knows what we're storing
//                   (tagRefs.current[index] = el as HTMLAnchorElement | null)
//                 }
//                 className={commonClass}
//                 style={commonStyle}
//                 // allow normal navigation on anchors; only call handleTagClick if you want JS navigation
//                 onClick={(e) => {
//                   if (interactive && onTagClick) {
//                     e.preventDefault(); // prevent navigation if handler wants to handle it
//                     handleTagClick(tag, index);
//                   }
//                 }}
//               >
//                 {tag.icon && <span className="related-tag-icon">{tag.icon}</span>}
//                 <span className="related-tag-label">{tag.label}</span>
//                 {tag.badge !== undefined && (
//                   <span className="related-tag-badge">{tag.badge}</span>
//                 )}
//               </a>
//             );
//           }

//           // Otherwise render a <div>
//           return (
//             <div
//               key={tag.label + index}
//               ref={(el) =>
//                 // cast to HTMLDivElement | null so TS knows what we're storing
//                 (tagRefs.current[index] = el as HTMLDivElement | null)
//               }
//               className={commonClass}
//               style={commonStyle}
//               onClick={() => (interactive ? handleTagClick(tag, index) : undefined)}
//             >
//               {tag.icon && <span className="related-tag-icon">{tag.icon}</span>}
//               <span className="related-tag-label">{tag.label}</span>
//               {tag.badge !== undefined && (
//                 <span className="related-tag-badge">{tag.badge}</span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
