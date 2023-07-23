import React, { useState } from 'react';
import SignUp from './SignUp';

function Body() {

    const [closePop, setClosePop] = useState(true);

    return (
    <>
        {closePop && <SignUp setClosePop = {setClosePop}/>}
    </>
  )
}

export default Body;