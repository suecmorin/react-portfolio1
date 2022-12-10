import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';


  function footer() {
     return (
        <div style={ footstyle } className="footer">
         <button className='twitter' MDBIcon fab icon="twitter" role='button'> </button>
        <button className='github' MDBIcon fab icon="github"  role='button'> </button>
        <button className='linkedin' MDBIcon fab icon="linkedin" role='button'> </button>
        </div>
     )
  }

  export default Footer;