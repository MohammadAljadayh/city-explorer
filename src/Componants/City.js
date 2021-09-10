import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./weather";
import Movies from "./Movies";
import {Form, Button,Row,Col,Table,Image,Alert } from "react-bootstrap";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     locationData: "",
     wheatherState:[],
     displayMap: false,
     errorrMsg: "",
     displayErrorr: false,
     movies: [],
    };
  }
  getLocationFromApi = async (event) => {
    event.preventDefault();

  try {
      let targetLocation = event.target.targetLocation.value;
      let locationURL =`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${targetLocation}&format=json`;
      let locationResult = await axios.get(locationURL);
    
      let WeatherUrl =`${process.env.REACT_APP_SERVER_URL}/weather?lat=${locationResult.data[0].lat}&lon=${locationResult.data[0].lon}`;
      let weatherObject = await axios.get(WeatherUrl);


      let movieUrl = `${process.env.REACT_APP_SERVER_URL}/movies?cityName=${ targetLocation}`;
      let moviesName =await axios.get(movieUrl);

      this.setState({
      locationData:locationResult.data[0],
        displayMap: true,
        movies :moviesName.data,
        wheatherState:weatherObject.data,
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
    console.log(this.state.wheatherState);
    console.log(this.state.movies);
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

{this.state.wheatherState.map(data=> {  
           return<Weather seeWeathetState={data} />
          }
          
          )}
<br /> 

{/* {this.state.movies.map(data=> {  
           return<Movies displayMovies={data} />
          }
          
          )} */}

< Movies displayMovies={this.state.movies} />


      <Alert  >
        <Alert.Heading>{this.state.displayErrorr && this.state.errorrMsg}</Alert.Heading>
    
      </Alert>


<br />
{this.state.displayMap && (
            <Image 
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.30819d0d14daf4a98f432c25d296412a&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=15&size=480x450&format=png&maptype=roadmap&markers=icon:small-red-cutout|${this.state.locationData.lat},${this.state.locationData.lon},&markers=icon:small-red-cutout|${this.state.locationData.lat},${this.state.locationData.lon}`}
              alt="map"
              roundedCircle
              thumbnail
            />
          )}

          <br />

       
          

        </div>
      </div>
    );
  }
}

export default City;