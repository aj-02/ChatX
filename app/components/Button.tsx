"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
  children: React.ReactNode;
  onclick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  danger,
  disabled,
  fullwidth,
  onclick,
  secondary,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      type={type}
      disabled={disabled}
      className={clsx(
        `y2 focus-visible: focus-visible: flex justify-center rounded-md px-3 py-2 text-sm
        font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && "cursor-default opacity-50",
        fullwidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
