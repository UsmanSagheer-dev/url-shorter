interface InputFieldProps {
  name: string;
    type: string;
    placeholder: string;
    width?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder, value, onChange, width }) => {
    return (
      <input
      name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
        className={`${width} px-4 py-3 rounded-[48px] bg-[#353C4A]/50 border border-[#353C4A] border-w-[4px] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all`}
      />
    );
  };
  export default InputField;
