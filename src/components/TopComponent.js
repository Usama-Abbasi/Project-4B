import React from 'react';
import useWebAnimations, { slideInUp, slideInRight} from '@wellyshen/use-web-animations';
const TopComponent = () => {
    const { ref} = useWebAnimations({...slideInRight});
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6 topAnimation'>
                <img src='img/work.gif' alt='About us' width={500} />
            </div>
            <div className='col-12 col-lg-6'>
                <h1 className='topRight' ref={ref}>Scalable extended business office services</h1>
            </div>
           
        </div>
        </div>
     );
}
 
export default TopComponent;