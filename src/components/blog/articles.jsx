import React, {Component} from 'react';
import '../../styles/Reblog.css'


class Articles extends Component {
    constructor(props) {
        super();
        this.state = {
          data: props.data
        };
      }
 
    render(){
        const {data} = this.state
        const articles = data.map( (p, index) => {
            return(
                <div className="blogBox" key={index}>
                    <div className="blogText">
                        <a href={p.gsx$link.$t} className='blogTitle'>{p.gsx$title.$t}</a>
                        <p className="blogCredit">{`Via ${p.gsx$source.$t} By ${p.gsx$author.$t}`}</p>
                    </div>
                    <div className="blogPreview">
                        <p className="articleSummary">{p.gsx$summary.$t}</p>
                   </div>
                </div>

        )}
        )
        return (
        <div className="blogPage" id='articles'>
            {articles}
        </div>
        );
    }

}

export default Articles;