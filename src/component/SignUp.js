import React from 'react'
import "../Css/Common.css"
import Constants from "../Constant/Constants.json"

function SignUp() {

    const validateNumber = e => {
        let currElement = e.key;
        console.log(currElement);
        console.log(/[0-9]/.test(currElement));
        if(currElement == "Backspace") 
            return;
        else if(!(/[0-9]/.test(currElement))) {
            e.preventDefault();
        }
    }
    

  return (
    <>
        <div id='signUpOuterContainer'>
            <div className='signUpContainer'>
                <div className='signUpHeader'>
                    <h1>Login</h1>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
                    </i>
                </div>
                <section style={{marginTop:"2rem"}}>
                    <div className='phoneNumber'>
                        <div style={{marginRight:"1.6rem"}}>
                            <div className='countrySelect'>
                                <div className='flagAndCode'>
                                    <div style={{height:"2rem", width:"2.3rem", marginRight:"0.5rem"}}>
                                        <img className='flagImage' alt='India flag' src='https://b.zmtcdn.com/images/flags_z10/in.png'></img>
                                    </div> 
                                    <span>+91</span>
                                </div>
                                <i  className='countryDropDown'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdAyKd"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
                                </i>
                                <span className='countryInputDivider'></span>
                            </div>
                        </div>
                        <input className='phoneNumberInput' placeholder='Phone' onKeyDown={validateNumber}></input>
                    </div>
                    <button className='OtpButton'>
                        {Constants.SENT_ONE_TIME_PASSWORD}
                    </button>
                </section>
            </div>
        </div>
    </>
  )
}

export default SignUp;