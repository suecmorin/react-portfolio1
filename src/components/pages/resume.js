import React from 'react';

export default function Resume() {
  return (
    <div className=" ">
      <h5>Front-End Proficiencies</h5>
      <ul className=" ">
      <li>HTML</li>  
      <li>CSS</li>  
      <li>Bootstrap</li>  
      <li>Javascript</li>
      <li>JQuery</li>  
      <li>React</li>  
      </ul>
      <h5>Back-End Proficiencies</h5>
      <ul className=" ">
      <li>Node</li>  
      <li>Inquirer</li>  
      <li>MySQL</li>  
      <li>MongoDB</li>
      </ul>
      <a href="../images/resume.md" download="Resume">
         <button type="button">Download Resume</button>
         </a>
    </div>
  );
}
