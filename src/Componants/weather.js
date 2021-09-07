import React from 'react'
import {Row,Col,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 class Weather extends React.Component {
    render() {
        return(
            <div>

     <Table striped bordered hover>

  <tbody>
    <tr>
      <td>Description</td>
      <td><p>{this.props.seeWeathetState.description}</p></td>
   
    </tr>
    <tr>
    <td>Date</td>
      <td> <p>{this.props.seeWeathetState.date}</p></td>
    </tr>
 

  </tbody>
</Table>
            
            </div>
        );
    }
}
export default Weather;