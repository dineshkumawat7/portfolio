import React from "react";
import krishnaImg from "../assets/images/krishna.jpg";

const QuoteCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-950 p-4">
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-purple-400/30">
        {/* Background Image */}
        <img
          src={krishnaImg}
          alt="Krishna"
          className="w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-6 text-white">
          {/* Sanskrit */}
          <h2 className="text-yellow-400 text-lg md:text-xl font-semibold leading-relaxed max-w-md">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते
            सङ्गोऽस्त्वकर्मणि॥
          </h2>

          {/* Transliteration */}
          <p className="mt-3 text-sm font-medium max-w-md">
            Karmanye Vadhikaraste, Ma Phaleshu Kadachana...
          </p>

          {/* Meaning */}
          <p className="mt-2 text-xs text-gray-200 max-w-md">
            You have a right to perform your duties, but not to the fruits of
            your actions. Do not let the fruits of action be your motive, nor
            let your attachment be to inaction.
          </p>

          {/* Source */}
          <p className="mt-3 text-[10px] text-gray-300">— Bhagavad Gita 2.47</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
