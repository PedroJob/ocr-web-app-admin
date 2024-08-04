import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label className={`mb-2 block text-xs text-slate-600 lg:text-sm xl:text-base`}>
        {labelText}
      </label>
      <input
        className={`block w-full rounded-md border bg-slate-50 px-1 py-2 text-xs outline-none transition-all focus:shadow focus:shadow-blue-500 disabled:border-slate-100 lg:text-sm xl:text-base ${error ? 'animate-shake border-red-500' : 'border-slate-400'}`}
        {...props}
      ></input>
    </div>
  );
};

export default InputBox;
