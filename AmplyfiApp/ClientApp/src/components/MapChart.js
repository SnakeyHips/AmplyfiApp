import React, { Component } from 'react';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from '../assets/world-110m.json';

class MapChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worldData: [],
    }
  }

  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }

  componentDidMount() {
    if(!this.props.loading) {
      this.setState({
        worldData: feature(worldData, worldData.objects.countries).features
      })
    }
  }

  render() {
    return (
      <svg width="100%" height="90%" viewBox="0 0 800 350">
        <g className="countries">
          {
            this.state.worldData.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className="country"
                fill="#212121"
                stroke="#FFFFFF"
                strokeWidth={ 0.5 }
              />
            ))
          }
        </g>
        <g className="markers">
          {
           this.props.countries.map((country, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(country.coordinates)[0] }
                cy={ this.projection()(country.coordinates)[1] }
                r={5}
                fill="#FFC107"
                className="marker"
              />
            ))
          }
        </g>
      </svg>
    )
  }
}
export default MapChart;