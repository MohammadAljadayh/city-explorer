import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,CardColumns} from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
        {this.props.disMovie.map((item) => {
          return (
            <div>
                <Card>
              {
               <Card.Header> original 
                {item.original}
                </Card.Header>
              }
              <Card.Body>
             <Card.Body>{item.overview}</Card.Body>
              {<Card.Text> Votes  : {item.averageVotes}</Card.Text>}
              {<Card.Img variant="top" src={item.imagel} height='280px'></Card.Img>}
              {<Card.Text>Popularity :{item.popularity}</Card.Text>}
              </Card.Body>
              {<Card.Footer>releasedOn : {item.releasedOn}</Card.Footer>}
              </Card>
            </div>
          )
            }
        )}
        </CardColumns>
      </div>
      );
  }
}
export default Movie;