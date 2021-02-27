import React, {Component} from 'react';
import '../../styles/Reblog.css'


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
                <div className="blogBox" key={index}>
                    <div className="blogText">
                        <a href={p.gsx$link.$t} className='blogTitle'>{p.gsx$title.$t}</a>
                        <p className="blogCredit">{`Via ${p.gsx$source.$t} By ${p.gsx$author.$t}`}</p>
                    </div>
                    <div className="blogPreview">
                    <p dangerouslySetInnerHTML={{__html: p.gsx$embed.$t}} />
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