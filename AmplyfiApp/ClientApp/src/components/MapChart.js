import React, { Component } from 'react';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from '../assets/world-110m.json';
import countries from '../assets/countries.json';

class MapChart extends Component {

  constructor() {
    super()
    this.state = {
      worldData: [],
      countries: []
    }
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }

  componentDidMount() {
    if(!this.props.loading) {
      console.log(this.props.places)
      this.setState({
        worldData: feature(worldData, worldData.objects.countries).features,
        countries: countries.filter(item => this.props.places.includes(item.name))
      })
    }
  }

  render() {
    return (
      <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
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
            this.state.countries.map((country, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(country.latlng)[1] }
                cy={ this.projection()(country.latlng)[0] }
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