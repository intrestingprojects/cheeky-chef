import React from 'react'
import "../../Css/Common.css"
function SocialLoginBtn({ svg, title }) {


    return (
    <div className='loginOptions'>
        <i className='loginOptionsLogo'>
            {svg}
        </i>
        <span>{title}</span>
    </div>
    );
}

export default SocialLoginBtn