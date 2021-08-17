import React, { useState } from 'react';
import Navbar from './NavBar';
import Homepage from './pages/Homepage';
import LocationPage from './pages/LocationPage';

const BodyContainer = ()=>{
    const [currentPage, setCurrentPage] = useState('Home');

 
    const renderPage = () => {
     
      if (currentPage === 'Homepage') {
        return <Homepage />;
      }
      if (currentPage === 'LocationPage') {
        return <LocationPage />;
      }
      else return <Homepage />
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
         
          {renderPage()}
        </div>
      );
}

export default BodyContainer;