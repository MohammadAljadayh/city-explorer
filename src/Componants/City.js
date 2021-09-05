import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


import {Form, Button,Row,Col,Table,Image,Alert } from "react-bootstrap";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     locationData: "",
     displayMap: false,
     errorrMsg: "",
     displayErrorr: false,
    };
  }
  getLocationFromApi = async (event) => {
    event.preventDefault();

  try {
      let targetLocation = event.target.targetLocation.value;
      let locationURL = `https://eu1.locationiq.com/v1/search.php?key=pk.d2a3a0e0cc39a01e35a94035f3566cec&q=${targetLocation}&format=json`;
      let locationResult = await axios.get(locationURL);
    
      // console.log( locationResult.data);
      // console.log(this.state. locationData.lat);
      //  console.log(this.state. locationData.lon);
      
      this.setState({
        locationData:locationResult.data[0],
        displayMap: true,
      });
    
    
  }
 catch {
  this.setState({
    errorrMsg: "Error Unable to geocode",
    displayErrorr: true,
  });
}
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.getLocationFromApi} >
          <Form.Group controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control
                  className="form-text"
                  type="text"
                  placeholder="Enter City Name"
                  name="targetLocation"
                ></Form.Control>
              </Col>
              <Col>
                <Button variant="primary" type="submit" value="search">Search</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <div>
   
        <br /> 
        <br /> 
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>Location Details</th>
      <th>Value</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>City Name</td>
      <td><p>{this.state.locationData.display_name}</p></td>
   
    </tr>
    <tr>
    <td>location lat</td>
      <td> <p>{this.state.locationData.lat}</p></td>
    </tr>
    <tr>
    <td>location lon</td>
      <td><p>{this.state.locationData.lon}</p></td>
    </tr>
    

  </tbody>
</Table>
     
<br /> 

      <Alert  >
        <Alert.Heading>{this.state.displayErrorr && this.state.errorrMsg}</Alert.Heading>
    
      </Alert>


<br />
{this.state.displayMap && (
            <Image thumbnail
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.30819d0d14daf4a98f432c25d296412a&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=15&size=480x450&format=png&maptype=roadmap&markers=icon:small-red-cutout|${this.state.locationData.lat},${this.state.locationData.lon},&markers=icon:small-red-cutout|${this.state.locationData.lat},${this.state.locationData.lon}`}
              alt="map"
              roundedCircle
            />
          )}
        </div>
      </div>
    );
  }
}

export default City;