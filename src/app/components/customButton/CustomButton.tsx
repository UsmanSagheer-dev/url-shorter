type CustomButtonProps = {
  title: string;
  className?: string;
  width?: string;
  onClick?: () => void; // We'll update this to handle async too
  disabled?: boolean;  // Add this
};

const CustomButton = ({ 
  title, 
  className = '', 
  width = 'auto', 
  onClick, 
  disabled = false // Add default value
}: CustomButtonProps) => {
  return (
    <button 
      className={`w-full bg-[#0066FF] text-white py-3 rounded-[48px] hover:bg-[#0052CC] transition-all duration-200 font-medium ${className} ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      style={{ width }}
      onClick={onClick}
      disabled={disabled} // Add this
    >
      {title}
    </button>
  );
};

export default CustomButton;