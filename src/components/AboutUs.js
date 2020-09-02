import React from 'react';
import Typing from 'react-typing-animation';
const AboutUs = () => {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <h1 className='h1Text'>We Are</h1>
                <p className='paraText'>
                    <Typing >
                We Are
                A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery
                </Typing>
                </p>
            </div>
            <div className='col-12 col-lg-6'>
                <img src='img/about-img.png' alt='About us' />
            </div>
        </div>
        </div>
     );
}
 
export default AboutUs;