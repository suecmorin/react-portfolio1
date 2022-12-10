import React from 'react';

function AboutMe() {
  return (
    <section id="about">
  <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
                 href="#aboutMe">About Me</h2>
          <img src="../images/newavatar.png" alt="avatar" height="48" width="48"></img>              
        <p>
          I have ten years experience in the computer industry 
           in technical writing, course development and education management, as well as more than 
           ten years customer service  and retail leadership.
           Having completed FullStack Developer Boot Camp, I am ready for a new challenge. 
        </p>    
      </div>
  </div>
    </section>
  );
}

export default AboutMe;