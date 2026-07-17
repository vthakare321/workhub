import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;