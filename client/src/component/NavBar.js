import React from 'react';

function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
        
              <a href="#Homepage"
               onClick={() => handlePageChange('Homepage')}
                className=
                {currentPage === 'Homepage' ? 'nav-active' : 'nav ' }  >
                    Home</a>

              <a href="#LocationPage"
              onClick={() => handlePageChange('LocationPage')} 
              className=
              {currentPage === 'LocationPage' ? 'nav-active' : 'nav'}>
                  Recommendations</a>

           
       
     
      
      </div>
    );
}


export default Navbar;