import * as d3 from "d3";
import us_data from '../data/us.json'

export const drawMap = (visited) => {
  var chart_width = 800;
  var chart_height = 400;

  //to position and scale the map
  var projection = d3.geoAlbersUsa()
    .scale([chart_width])
    .translate([chart_width/2, chart_height/2]);


  var path = d3.geoPath()
    .projection(projection);
  
  var svg = d3.select('.map-container')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height)

  
  
  //Choropleth maps - to highlight certain areas
  var color = [
    'grey',
    'green'
  ]

  us_data.features.forEach((us_e, us_i) => {
    visited.forEach((v_e, v_i) => {
      if (us_e.properties.name !== v_e.state) {
        return null;
      }
      us_data.features[us_i].properties.num = parseFloat(v_e.num);
    }
   )
 })


  svg.selectAll('path')
    .data(us_data.features)
    .enter()
    .append('path')
    .attr("d", path)
    .attr('fill', function (d) {
      var num = d.properties.num
      return color[num]
    })
    .attr('stroke', 'white')
    .attr('stroke-width', 5)
    .append('text')
    .text(function (d) {
      var num = d.properties.num
      return color[num]
    })
  
}