import React from "react";

interface LogoProps {
  className?: string;
  textColor?: string;
}

const Logo = ({ className = "", textColor = "text-[#3c2a21]" }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1
        className={`text-2xl md:text-3xl font-serif tracking-wider ${textColor}`}
      >
        ROCHELA
      </h1>
      <span
        className={`text-xl md:text-2xl font-serif italic -mt-1 ${textColor}`}
      >
        Spa
      </span>
    </div>
  );
};

export default Logo;
