import { InputFieldProps } from "@/app/types/types";

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  width = "full",
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${width} px-4 py-3 rounded-[48px] bg-[#353C4A] border-4 border-[#353C4A] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all w-full`}
    />
  );
};
export default InputField;
