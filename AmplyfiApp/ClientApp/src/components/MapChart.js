import React, { Component } from 'react';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from '../assets/world-110m.json';
import countries from '../assets/countries.json';

class MapChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worldData: []
    }
  }

  filteredCountries = this.filterCountries();

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

  filterCountries() {
    var temp = [];
    for(var i = 0; i < this.props.places.length; i++) {
      for(var j = 0; j < countries.length; j++) {
        if(countries[j].name === this.props.places[i] || countries[j].capital === this.props.places[i]){
          var swapLatLng = [countries[j].latlng[1], countries[j].latlng[0]];
          countries[j].latlng = swapLatLng;
          temp.push(countries[j]);
          break;
        }
      }
    }
    return temp;
  }

  render() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 800 450">
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
           this.filteredCountries.map((country, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(country.latlng)[0] }
                cy={ this.projection()(country.latlng)[1] }
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