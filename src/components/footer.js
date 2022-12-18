import React from 'react';
import {  FaGithubSquare } from 'react-icons/fa';
import {  FaLinkedinIn } from 'react-icons/fa';
import {  FaEnvelope } from 'react-icons/fa';

  function Footer() {
     return (
        <div className="footer" >
        
         <a  className='icon' href='mailto:suecmorin@gmail.com' ><FaEnvelope /></a>
         <a className='icon' href='https://github.com/suecmorin' ><FaGithubSquare/></a>
         <a className='icon' href='http://www.linkedin.com/susan-m-b0a66b23'><FaLinkedinIn /></a>
        </div>
     )
  }

  export default Footer;