interface SectionProps {
  children: React.ReactNode;
}

const RotatingBorderButton: React.FC<SectionProps> = ({ children }) => {
  return (
    <button className="relative group overflow-hidden px-6 py-3 font-semibold text-white bg-pry rounded-md ">
      <span className="absolute inset-0 border-transparent  hover:border-2 rounded-md hover:border-light group-hover:animate-rotate-border"></span>
      <span className="relative z-10 text-lg">{children}</span>
    </button>
  );
};

export default RotatingBorderButton;
