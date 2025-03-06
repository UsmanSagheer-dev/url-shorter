export interface InputFieldProps {
    name: string;
    type: string;
    placeholder: string;
    width?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }