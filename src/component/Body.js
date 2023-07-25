import React, { useState } from "react";
import SignUp from "./SignUp";
import HomePage from "./HomePage";

function Body() {
  const [closePop, setClosePop] = useState(true);

  return (
    <>
      {closePop && <SignUp setClosePop={setClosePop} />}
      <HomePage />
    </>
  );
}

export default Body;
