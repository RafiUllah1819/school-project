import React from "react";

export const Input = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={className}
    />
  );
};
