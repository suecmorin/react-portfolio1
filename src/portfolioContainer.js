import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/aboutme';
import Project from './components/pages/project';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   if (currentPage === 'AboutMe') {
      return <div> <Header/> <AboutMe /> <Footer/> </div>; 
    }
    if (currentPage === 'Project') {
      return <div> <Header/> <Project /> <Footer/> </div>;
    }
    if (currentPage === 'Resume') {
      return <div> <Header/> <Resume /> <Footer/> </div>;
    } 
    return <div> <Header/> <Contact /> <Footer/> </div>;
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
