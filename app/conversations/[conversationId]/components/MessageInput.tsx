"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const MessageInput = ({
  errors,
  id,
  register,
  placeholder,
  required,
  type,
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required: required })}
        placeholder={placeholder}
        className="w-full rounded-full bg-neutral-100 px-4 py-2 font-light text-black focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
