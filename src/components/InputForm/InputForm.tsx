import React from 'react';

interface InputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    placeholder: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({ label, name, type = 'text', value, placeholder, required, onChange }: InputProps) => (
  <div className="flex flex-col w-[400px] mt-4 mb-4">
    <label htmlFor={name} className="block text-base mb-2">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className="border border-gray-300 px-3 py-2 rounded w-full"
    />
  </div>
);

export default InputForm;