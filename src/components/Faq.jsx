import { useState } from "react";
import faqList from "./faq.json";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="mt-5">
      <div className="bg-primary text-white py-4">
        <h2 className="font-bold text-center">FAQ</h2>
        <p className="text-center">
          Berikut beberapa pertanyaan yang sering ditanyakan beserta jawabannya
        </p>
        <div className="container mx-auto px-4 md:px-8 my-8">
          <ul className="bg-white text-primary divide-y-2  divide-gray-200 rounded-lg">
            {faqList.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between w-full p-4 text-left focus:outline-none"
                >
                  <span className="font-bold">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3.0"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
