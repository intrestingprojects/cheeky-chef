import React, { useState } from 'react';
import "../Css/Common.css"
import Constants from "../Constant/Constants.json"

import { GoogleSvg, EmailSvg} from "./GraphicAssets/Icons"
import SocialLoginBtn from './LoginPageUtils/SocialLoginBtn'

function SignUp(props) {

    const [signUp , setSignUp] = useState(true);
    const [newAccount , setNewAccount] = useState(false);
    
    const createNewAccount = () => {
        setSignUp(false);
        setNewAccount(true);
    }

    const accountExists = () => {
        setSignUp(true);
        setNewAccount(false);
    }

    return (
        <>
            <div id='signUpOuterContainer'>
                <div className='signUpContainer'>
                    <div className='signUpHeader'>
                        {signUp && <h1>Login</h1>}
                        {newAccount && <h1>Sign Up</h1>}
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
                        </i>
                    </div>
                    <section style={{marginTop:"2rem"}}>
                        {newAccount && <input className='loginFormInputs' placeholder='Name'></input>}
                        <input className='loginFormInputs' placeholder='Email'></input>
                        <input className='loginFormInputs' placeholder='Password'></input>
                        <button className='OtpButton'>
                            {Constants.LOG_IN}
                        </button>
                        <div className='divider'>
                            <hr className='line'></hr>
                            <span className='horizontalDivider'>or</span>
                        </div>

                        <SocialLoginBtn svg={EmailSvg} title={Constants.CONTINIUE_WITH_EMAIL} />
                        <SocialLoginBtn svg={GoogleSvg} title={Constants.CONTINIUE_WITH_GOOGLE} />

                        <hr className='line'></hr>
                        {
                            signUp &&
                            <p className='createAccount'>New to Cheeky-Chef? <span className='newAccountLink' onClick={createNewAccount}>Create account</span></p>
                        }
                        {
                            newAccount &&
                            <p className='createAccount'>Account already exists? <span className='newAccountLink' onClick={accountExists}>Log in</span></p>
                        }
                        </section>
                </div>
            </div>
        </>
  )
}

export default SignUp;