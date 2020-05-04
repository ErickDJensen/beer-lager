import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Favorites.css';

class Favorites extends Component {
    render() {
        return (
            <div>
                <p>Favorites</p>
                <>
  <Card>
    <Card.Img variant="top" className = "image" src="./images/coffee.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img className = "image" variant="bottom" src="./images/coffee.jpg" />
  </Card>
</>
            </div>
        )
    }
}

export default Favorites
