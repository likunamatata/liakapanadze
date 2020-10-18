import React, {Component} from 'react';
import { drawMap } from '../services/map'
import visited from '../data/visited.json'

class Map extends Component {

  componentDidMount() {
    drawMap(visited);
  }

  render() {
    return (
      <div className="map-container">
      </div>
    );
  }


}

export default Map;