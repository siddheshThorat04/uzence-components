import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  loading?: boolean;
  allowClear?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:ring-blue-500",
  outlined: "border border-gray-300 bg-white focus:ring-blue-500",
  ghost:
    "border-0 border-b border-gray-300 bg-transparent rounded-none focus:ring-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  loading,
  allowClear,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative flex items-center">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-md focus:outline-none focus:ring-2 transition
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${invalid ? "border-red-500 focus:ring-red-500" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${loading ? "pr-8" : "pr-8"}
          `}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute right-2 h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
        )}

        {/* Clear Button */}
        {allowClear && value && !disabled && !loading && (
          <button
            type="button"
            onClick={() =>
              onChange?.({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
          >
            ✕
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && !loading && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-xs text-gray-600 dark:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {/* Helper/Error Text */}
      {invalid && errorMessage ? (
        <span className="text-xs text-red-500">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};
