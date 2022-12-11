import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
  
      <header className="bg-gray-800 md:sticky top-0 z-10">
         <h3 className="title-font font-medium text-white mb-4 md:mb-0">
         Susan C. Morin
         </h3>
      <ul className="nav nav-tabs md:mr-auto md:ml-4 md:py-1 md:pl-4 
          md:border-l md:border-gray-700	flex flex-wrap 
          items-center text-base justify-center">  
      <li className="nav-item mr-5 hover:text-white">
        <a
          href="#about"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item mr-5 hover:text-white">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Project
        </a>
      </li>
    
      <li className="nav-item mr-5 hover:text-white">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item mr-5 hover:text-white">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </header>
  )
}

export default NavTabs;
