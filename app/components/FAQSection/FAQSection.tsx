import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  faqs: FAQItem[];
  title?: string;
  lead?: string;
  className?: string;
};

const FAQSection: React.FC<FAQProps> = ({ faqs, title = "Frequently Asked Questions", lead = "", className = "" }) => {
  return (
    <SectionWrapper className={("section-wrapper--faq " + className).trim()}>
      <div className="faq">
        <header className="faq__header">
          <h2>{title}</h2>
          {lead ? <p className="faq__lead">{lead}</p> : null}
        </header>
        <div className="faq__list">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">{faq.question}</h3>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
