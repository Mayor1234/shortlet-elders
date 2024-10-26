import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-full pb-10 px-5 lg:px-0">
      <h2 className="relative flex items-center text-2xl text-gray-800 leading-normal tracking-wide font-semibold  before:content-[''] before:flex-1 before:h-px before:w-16 before:bg-pry before:mr-4">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
