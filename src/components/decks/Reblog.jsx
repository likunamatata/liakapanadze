import React, {Component} from 'react';
import SideNav from './SideNav'
import {getData} from '../../services/api'
import Podcasts from '../blog/podcasts'
import Articles from '../blog/articles'
import '../../styles/Reblog.css'


class Reblog extends Component {

  constructor() {
    super();
    this.state = {
      articles : '',
      podcasts : '',
      videos : ''
    };
  }

  componentDidMount = async () => {
    const res = await getData();
    const resLatestFirst = res.reverse();
    const articles = resLatestFirst.filter(r => r.gsx$resourcetype.$t === 'Article')
    const podcasts = resLatestFirst.filter(r => r.gsx$resourcetype.$t === 'Podcast')
    const videos = resLatestFirst.filter(r => r.gsx$resourcetype.$t === 'Video')

    this.setState({
      articles: articles,
      podcasts: podcasts,
      videos: videos
    });
  };

  render(){
    const podcasts = !this.state.podcasts? '' : <Podcasts data={this.state.podcasts}/>
    const articles = !this.state.articles? '' : <Articles data={this.state.articles}/>
    // const videos = !this.state.videos? '' : <Podcasts data={this.state.videos}/>
    return (
      <div className="Deck">
          <SideNav pages={['Articles', 'Podcasts', 'Videos']}/>
          <div className='PagesSection'>
          <div className='Page' id='Articles'>
            <h1 className="PageTitle">Articles</h1>
            <hr></hr> 
            {articles}
          </div>
          <div className='Page' id='Podcasts'>
              <h1 className="PageTitle">Podcasts</h1>
              <hr></hr>
              {podcasts}
          </div>
          <div className='Page' id='Videos'>
              <h1 className="PageTitle">Videos</h1>
              <hr></hr>
              <h4>Coming soon...</h4>
          </div>
          </div>
      </div>
    );
  }


}

export default Reblog;