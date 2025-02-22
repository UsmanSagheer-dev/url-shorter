interface InputFieldProps {
    type: string;
    placeholder: string;
    width?: string;
  }

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, width = "full" }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`${width} px-4 py-3 rounded-[48px] bg-[#353C4A]/50 border border-[#353C4A] border-w-[4px] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all`}
      />
    );
  };
  export default InputField;
