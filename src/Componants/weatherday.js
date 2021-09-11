
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col,Table } from "react-bootstrap";
  

class WeatherDay extends React.Component {
    render() {
      return (
        <Table striped bordered hover>

        <tbody>
          <tr>
            <td>Description</td>
            <td><p>{this.props.descWeather.description}</p></td>
         
          </tr>
          <tr>
          <td>Date</td>
            <td> <p>{this.props.descWeather.date}</p></td>
          </tr>
       
      
        </tbody>
      </Table>
      );
    }
  }
  export default WeatherDay;