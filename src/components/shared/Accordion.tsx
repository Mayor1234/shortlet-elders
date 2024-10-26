import { useState } from 'react';

type Prop = {
  title: string;
  children: React.ReactElement;
};

const Accordion = ({ title, children }: Prop) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-3 border-b border-gray-300">
      <button
        className="flex justify-between items-center py-2 w-full"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span
          className={`${
            accordionOpen && 'text-pry'
          } tracking-wide text-lg text-start`}
        >
          {title}
        </span>
        <div className="transition duration-200 ease-out">
          {accordionOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-pry"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
