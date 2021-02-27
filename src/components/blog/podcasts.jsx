import React, {Component} from 'react';
import '../../styles/Podcasts.css'


class Podcasts extends Component {
    constructor(props) {
        super();
        this.state = {
          data: props.data
        };
      }
 
    render(){
        const {data} = this.state
        const podcasts = data.map( (p, index) => {
            return(
                <div className="podcastBox" key={index}>
                    <div className="podcastText">
                        <h4>{p.gsx$title.$t}</h4>
                        <p>{p.gsx$source.$t}</p>
                        <p>{p.gsx$author.$t}</p>
                    </div>
                    <div className="podcastPreview">
                    <p dangerouslySetInnerHTML={{__html: p.gsx$link.$t}} />
                    <p className="podcastSummary">{p.gsx$summary.$t}</p>
                   </div>
                </div>

        )}
        )
        return (
        <div className="blogPage" id='podcasts'>
            {podcasts}
        </div>
        );
    }

}

export default Podcasts;