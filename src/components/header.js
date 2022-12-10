import React from 'react';


function header() {
    return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
        Susan C. Morin
        </a>
     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap 
        items-center text-base justify-center">
     <a href="aboutMe" className="mr-5 hover:text-white">
        About Me
     </a>
     <a href="projects" className="mr-5 hover:text-white">
        Projects
     </a>
     <a href="contact" className="mr-5 hover:text-white">
        Contact Me
     </a>
     <a href="resume" className="mr-5 hover:text-white">
        Resume
     </a>
     </nav>
     </div>
    </header>

    );
}

export default Header;
