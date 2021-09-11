import React from 'react'
import {Row,Col,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDay from "./weatherday";

 class Weather extends React.Component {
    render() {
        return(
            <div>


  <WeatherDay 
        descWeather={this.props.seeWeathetState}/>
       

        
            </div>
        );
    }
}
export default Weather;