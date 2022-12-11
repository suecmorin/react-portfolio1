import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/AboutMe';
import Project from './components/pages/Project';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   if (currentPage === 'AboutMe') {
      return <div> <Header />  < AboutMe /> <Footer/> </div>; 
    }
    if (currentPage === 'Project') {
      return <div> <Header /> < Project /> < Footer /> </div>;
    }
    if (currentPage === 'Resume') {
      return <div> <Header /> <Resume /> < Footer /> </div>;
    } 
    return <div> <Header /> < Contact /> < Footer /> </div>;
  
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
