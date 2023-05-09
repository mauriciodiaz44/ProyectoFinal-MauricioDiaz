import React, { useState } from "react";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = visible ? (
    <HiOutlineEyeSlash
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  ) : (
    <HiOutlineEye onClick={() => setVisibility((visibility) => !visibility)} />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
