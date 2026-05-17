import React from "react";
import hanumanImg from "../assets/images/lord-hanuman.jpg";
import Container from "./Container";

const QuoteCard: React.FC = () => {
  return (
    <section className="w-full pb-10 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div
          className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden border border-orange-200/20 
          shadow-[0_0_60px_rgba(249,115,22,0.15)] bg-black"
        >
          {/* Background Image */}
          <img
            src={hanumanImg}
            alt="Lord Hanuman"
            className="h-150 w-full object-cover object-center animate-[imageReveal_6s_cubic-bezier(0.22,1,0.36,1)_infinite_alternate]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/20" />

          {/* Orange Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.35),transparent_40%)]" />

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white"
          >
            {/* Badge */}
            <div
              className="mb-4 w-fit rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5
              text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-orange-300 backdrop-blur-md"
            >
              Jai Shree Ram 🚩
            </div>

            {/* Sanskrit Quote */}
            <h2
              className="max-w-3xl text-xl font-bold leading-snug text-orange-100 drop-shadow-xl"
            >
              बुद्धिर्बलं यशोधैर्यं निर्भयत्वमरोगता।
              <br />
              अजाड्यं वाक्पटुत्वं च हनुमत्स्मरणाद्भवेत्॥
            </h2>

            {/* Transliteration */}
            <p
              className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-orange-200/90 font-medium"
            >
              Buddhir Balam Yasho Dhairyam Nirbhayatvam Arogata...
            </p>

            {/* Meaning */}
            <p
              className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-200"
            >
              Remembering Lord Hanuman brings wisdom, strength, courage,
              fearlessness, good health, and excellence in speech.
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-14 bg-orange-400" />

              <p className="text-xs sm:text-sm tracking-widest text-orange-300 uppercase">
                Hanuman Chalisa
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuoteCard;