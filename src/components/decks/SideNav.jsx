import React, {Component} from 'react';
import Thumbnail from './Thumbnail'


class SideNav extends Component {
    constructor(props) {
      super(props);
      this.state = {
          pages: props.pages
        }
      };
  
    render() {
        const {pages} = this.state
        const thumbnails = pages.map((page, index) => (
          <Thumbnail title={page} key={index} num={index}/>
        ))
      return (
        <div className="SideNav">
          {thumbnails}
        </div>
      );
    }
  }
  
  export default SideNav;
  