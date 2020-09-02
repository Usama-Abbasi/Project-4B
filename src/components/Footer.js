import React from 'react'
import useWebAnimations, { zoomInLeft} from '@wellyshen/use-web-animations';

const Footer = () => {
    const { ref } = useWebAnimations({ ...zoomInLeft });
    return (
        <div className='footer'>
            <div>
                <h1 className='footerH1'>Care To Join Us?</h1>
                <h4 className='footerH3' ref={ref}>Embark on an exciting career with us to learn and grow alongside the best in the industry</h4>
                <hr />
            </div>
        </div>
    )
}

export default Footer;