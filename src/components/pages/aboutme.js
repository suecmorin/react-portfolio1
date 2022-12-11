import React from 'react';
import avatar from '../images/newavatar.png';
function AboutMe() {
  return (
    <div>
          <h2 className=" " href="#aboutMe">About Me</h2>
          <img className="image" src={avatar} width="48px" height="48px" alt="avatar"></img>              
        <p>
          I have ten years experience in the computer industry in technical writing, <br></br>
           course development and education management, as well as more than ten years <br></br> 
           customer service  and retail leadership. Finishing FullStack Developer Boot Camp, <br></br>
            I am ready for a new challenge. 
        </p>    
</div>
  );
}

export default AboutMe;