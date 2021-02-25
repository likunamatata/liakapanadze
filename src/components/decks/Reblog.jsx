import React from 'react';
import SideNav from './SideNav'


function Reblog () {
 
    return (
      <div className="Deck">
          <SideNav pages={['Articles', 'Podcasts', 'Videos']}/>
          <div className='PagesSection'>
          <div className='Page' id='Articles'>
            <h1 className="PageTitle">Articles</h1>
            <hr></hr> 
          </div>
          <div className='Page' id='Podcasts'>
              <h1 className="PageTitle">Podcasts</h1>
              <hr></hr>
          </div>
          <div className='Page' id='Videos'>
              <h1 className="PageTitle">Videos</h1>
              <hr></hr>
          </div>
          </div>
      </div>
    );


}

export default Reblog;