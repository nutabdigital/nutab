"use client";

import React, { useState, useCallback } from "react";

const SUBMIT_COOLDOWN_MS = 10_000; // 10-second cooldown between submissions

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'cooldown'>('idle');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const now = Date.now();
      if (now - lastSubmitTime < SUBMIT_COOLDOWN_MS) {
        e.preventDefault();
        setSubmitStatus('cooldown');
        return;
      }
      // Check honeypot — if filled, silently block
      const form = e.currentTarget;
      const honeypot = form.querySelector<HTMLInputElement>('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }
      setIsSubmitting(true);
      setLastSubmitTime(now);
      setSubmitStatus('idle');
      // Allow native form submission to Formspree
    },
    [lastSubmitTime]
  );

  return (
    <section className="flex flex-row gap-0 w-full max-w-[900px] min-h-[400px] p-0 mx-auto shadow-none bg-transparent max-[900px]:flex-col max-[900px]:min-h-0 max-[900px]:max-w-[98vw] max-[900px]:w-[85vw]">
      {/* Left Column */}
      <div className="flex-1 p-8 px-6 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] dark:from-[#6a11cb] dark:to-[#2575fc] dark:bg-white/70 text-[#03045e] dark:text-white rounded-l-3xl flex flex-col justify-center max-[900px]:rounded-t-3xl max-[900px]:rounded-bl-none max-[900px]:p-6 max-[900px]:px-4">
        <h3 className="text-3xl mb-4 font-medium">
          Let&apos;s Talk{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h3>
        <p className="text-base mb-6">
          Have a project in mind or just want to say hi?
          <br />
          Fill out the form and we&apos;ll get back to you shortly.
        </p>
        <div className="space-y-1">
          <p className="text-base">
            <strong>Email:</strong> nutabdigital@gmail.com
          </p>
          <p className="text-base">
            <strong>Phone:</strong> (587) 888-6755
          </p>
          <p className="text-base">
            <strong>Location:</strong> Calgary, Alberta
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-[1.2] p-8 bg-white/75 dark:bg-[rgba(10,10,10,0.7)] text-[#222] dark:text-gray-100 shadow-[4px_0_12px_rgba(3,3,3,0.198)] dark:shadow-[0_4px_12px_rgba(3,3,3,0.198)] backdrop-blur-xl rounded-r-3xl flex flex-col justify-center max-[900px]:rounded-b-3xl max-[900px]:rounded-tr-none max-[900px]:p-6 max-[900px]:px-4">
        <form
          action="https://formspree.io/f/manrbogw"
          method="POST"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Honeypot field — hidden from real users, catches bots */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name input field */}
          <div className="space-y-1">
            <label htmlFor="name" className="block font-normal">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              maxLength={100}
              className="w-full p-2.5 border border-gray-300 rounded-2xl box-border bg-white text-[#222]"
              required
            />
          </div>

          {/* Email input field */}
          <div className="space-y-1">
            <label htmlFor="email" className="block font-normal">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              maxLength={254}
              className="w-full p-2.5 border border-gray-300 rounded-2xl box-border bg-white text-[#222]"
              required
            />
          </div>

          {/* Message input field */}
          <div className="space-y-1">
            <label htmlFor="message" className="block font-normal">Message:</label>
            <textarea
              name="message"
              id="message"
              maxLength={5000}
              className="w-full p-2.5 border border-gray-300 rounded-2xl box-border bg-white text-[#222] h-[100px]"
              required
            />
          </div>

          {/* Rate-limit feedback */}
          {submitStatus === 'cooldown' && (
            <p className="text-amber-600 dark:text-amber-400 text-sm" role="alert">
              Please wait a few seconds before submitting again.
            </p>
          )}

          {/* Submit button with rate limiting */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 rounded-full cursor-pointer text-base font-semibold overflow-hidden transition-all duration-150 mt-2 will-change-transform hover:-translate-y-0.5 hover:opacity-90 hover:shadow-indigo-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="relative z-[1]">{isSubmitting ? 'Sending...' : 'Send'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
