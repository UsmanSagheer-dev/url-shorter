type CustomButtonProps = {
  title: string;
  className?: string;
  width?: string;
};

const CustomButton = ({ title, className = '',width = 'auto' }: CustomButtonProps) => {
  return (
    <button 
      className={`w-full bg-[#0066FF] text-white py-3 rounded-[48px] hover:bg-[#0052CC] transition-all duration-200 font-medium ${className}`}
      style={{ width }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
