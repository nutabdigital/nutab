"use client";
import React, { useState } from "react";

interface Review {
  author: string;
  meta: string;
  date: string;
  schemaDate: string;
  content: string;
}

const reviews: Review[] = [
  {
    author: "Harpreet",
    meta: "1 review • 0 photos",
    date: "42 weeks ago",
    schemaDate: "2025-04-14",
    content: `I had an outstanding experience working with NuTab for our website. From start to finish, their team was super friendly, professional, and reliable, making the entire process smooth and stress-free.

What stood out for us was them helping us at every step, from planning to execution, ensuring our vision was perfectly translated into a functional, modern website. Our site is not only visually appealing but also intuitive and easy to navigate, thanks to their thoughtful design approach. NuTab was always available to answer questions, make adjustments, and provide support, which was incredibly reassuring.

We couldn’t be happier with the final result, and I highly recommend NuTab to anyone looking for top-notch web development services. Whether you're a small business or a larger enterprise, they deliver quality work with a personal touch.

Thank you, NuTab, for exceeding our expectations!`,
  },
  {
    author: "Yusuf Abdillahi",
    meta: "6 reviews • 1 photo",
    date: "7 weeks ago",
    schemaDate: "2025-12-14",
    content: `Nav was amazing and very thoughtful. He helped quickly setup our google business profile and Nutab designed us a beautiful sign that encourages our customers to leave reviews. Highly recommended!`,
  },
  {
    author: "Moe Souraya",
    meta: "2 reviews • 0 photos",
    date: "6 days ago",
    schemaDate: "2026-01-27",
    content: `Thanks to Fysal for giving my website a much needed update. He was very communicative and helped me understand things along the way. He was easy to work with and provided a lot of feedback and ideas to best support my business, going above and beyond with his services.`,
  },
];

const Stars: React.FC = () => (
  <div className="text-yellow-400 font-medium">★★★★★</div>
);

const Reviews: React.FC = () => {
  const [open, setOpen] = useState<Review | null>(null);

  const sanitizeMeta = (meta: string) => meta.split("•")[0].trim();

  // Build JSON-LD schema for these reviews
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NuTab",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.content,
      datePublished: r.schemaDate,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };

  return (
    <section className="flex items-center justify-center box-border w-[75vw] min-h-screen mx-auto z-10 py-8 max-md:items-start max-md:pt-8 max-md:h-auto">
      <div className="flex flex-col items-center box-border w-full max-w-[1200px] p-4 mx-auto bg-white/70 dark:bg-black/70 shadow-lg dark:shadow-black/75 rounded-3xl z-10 backdrop-blur-xl max-md:w-[85vw]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="text-center text-gray-900 dark:text-white mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Client Reviews</h2>
          <p className="text-lg font-normal text-center mb-4 opacity-85 text-gray-700 dark:text-gray-300">Real feedback from businesses we've worked with</p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full p-2 max-[900px]:grid-cols-1">
          {reviews.map((r, idx) => (
            <article
              key={r.author}
              className="relative rounded-2xl p-6 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm max-md:text-left flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{r.author}</p>
                  <p className="text-sm opacity-80 text-gray-600 dark:text-gray-400">{sanitizeMeta(r.meta)}</p>
                </div>
                <div className="text-right">
                  <Stars />
                  <p className="text-sm opacity-70 text-gray-500">{r.date}</p>
                </div>
              </div>

              {/* Creative compact presentation for long review (first entry): fixed preview + modal */}
              {idx === 0 ? (
                <>
                  <div className="relative overflow-hidden" style={{ maxHeight: 160 }}>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{r.content}</p>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/90 dark:from-black/80"></div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setOpen(r)}
                      className="ml-auto bg-[#0067e7] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Read more
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{r.content}</p>
              )}
            </article>
          ))}
        </div>

        {/* Modal for full review content */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <div className="relative bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-black/75 p-6 max-w-2xl w-full z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{open.author}</p>
                  <p className="text-sm opacity-80 text-gray-600 dark:text-gray-400">{sanitizeMeta(open.meta)} • {open.date}</p>
                </div>
                <button onClick={() => setOpen(null)} className="text-gray-600 dark:text-gray-300">Close</button>
              </div>
              <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{open.content}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
