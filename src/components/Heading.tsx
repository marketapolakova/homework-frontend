import React from "react";
type PropsType = {
  children: React.ReactNode;
};

function Heading({ children }: PropsType) {
  return <h3>{children}</h3>;
}

export default Heading;
