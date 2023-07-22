import React, { useState } from 'react';
import SignUp from './SignUp';

function Body() {
    
    const [signUp , setSignUp] = useState(true);
  
    return (
    <>
        {signUp && <SignUp />}
    </>
  )
}

export default Body;