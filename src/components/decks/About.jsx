import React, {Component} from 'react';
import SideNav from './SideNav'
import '../../styles/About.css'
import { wordBubble } from '../../services/wordBubble'


class About extends Component {

  componentDidMount() {
    wordBubble()
  }
 
  render(){
    return (
      <div className="Deck">
          <SideNav pages={['About', 'Toolkit']}/>
          <div className='PagesSection'>
          <div className='Page' id='About'>
              <h1 className="PageTitle">About</h1>
              <hr></hr>
              <div className="AboutBox">
              <p className='AboutText'>
              Revenue operations professional, specializing in sales growth strategy and supporting analytics. Currently a part of an amazing team at Transplace selling transportation management services and technology and delivering supply chain excellence globally.
              </p>
              <p className='AboutText'>
                As an economics nerd, I’m a big fan of measuring things and making complex simple. At the same time, I am well aware of differences between real life and mathematical models. My value add in most environments is curiosity, persistence, and intellectual humility.
              </p>
              <p className='AboutText'>
              I made this website to show off my CSS skills <b>AND ALSO</b> to build and share a library of resources related to revenue growth and operations. I hope you have fun scrolling through the (Re)Blog section. Sometime in the future, I plan to also start creating original content on the subject and I will cleverly name it the Blog section, stay tuned!
              </p>
              </div>
          </div>
          <div className='Page' id='Toolkit'>
              <h1 className="PageTitle">Toolkit</h1>
              <hr></hr>
              <div id="bubble"></div>
          </div>
          </div>
      </div>
    );
  }

}

export default About;
