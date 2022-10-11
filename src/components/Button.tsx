import React from "react";

type PropsType = {
  name: string;
  contacting: () => void;
};

function Button({ name, contacting }: PropsType) {
  return (
    <button
      style={{ backgroundColor: "#38C8FD", width: "10rem", color: "white" }}
      onClick={contacting}
    >
      {name}
    </button>
  );
}

export default Button;
