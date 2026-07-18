import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium"
        >
          {label}
        </label>

        <input
          ref={ref}
          id={id}
          {...props}
          className={`w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 ${className}`}
        />

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;