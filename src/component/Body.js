import React, { useState } from 'react';
import SignUp from './SignUp';
import NewAccount from './NewAccount';

function Body() {

    const [signUp , setSignUp] = useState(true);
    const [newAccount , setNewAccount] = useState(false);
  
    return (
    <>
        {signUp && <SignUp setSignUp = {setSignUp} setNewAccount = {setNewAccount}/>}
        {newAccount && <NewAccount/>}
    </>
  )
}

export default Body;