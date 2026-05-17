import React from "react";

interface SectionHeaderProps {
    title: string;
    highlight: string;
    description: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight, description, className = "", }) => {
    return (
        <div
            className={`relative text-center mb-12 ${className}`}
        >
            <h1
                className="relative text-center font-extrabold tracking-tight text-5xl lg:text-6xl mb-3"
                style={{ letterSpacing: "-0.03em" }}
            >
                {title}{" "}
                <span
                    className="text-transparent"
                    style={{
                        WebkitTextStroke: "1.0px oklch(70.4% 0.14 182.503)",
                    }}
                >
                    {highlight}
                </span>
            </h1>
            <p className="relative font-semibold text-lg text-center mb-10 transition-colors duration-300 max-w-3xl mx-auto">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;