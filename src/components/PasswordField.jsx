import React, { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";

const PasswordField = ({ name, id, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        className="form__input"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
      />
      <HiOutlineLockClosed className="form__input-icon" />
      <button className="form__input-eye" onClick={handleToggle}>
        {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
      </button>
    </>
  );
};

export default PasswordField;
