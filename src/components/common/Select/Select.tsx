import React, { forwardRef } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Option[];
  error?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium"
        >
          {label}
        </label>

        <select
          ref={ref}
          id={id}
          {...props}
          className={`w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 ${className}`}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;