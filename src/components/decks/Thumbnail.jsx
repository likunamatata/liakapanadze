import React from 'react';

function Thumbnail (props) {
 
    return (
      <a className="Thumbnail"href={`#${props.title}`}>
            <p className='ThumbnailNum'>{props.num + 1}</p>
            <p className='ThumbnailTitle'>{props.title}</p>
      </a>
    );


}

export default Thumbnail;
