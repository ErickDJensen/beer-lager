import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Favorites extends Component {
    render() {
        return (
            <div>
                <p>Favorites</p>
                <>
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
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
    <Card.Img variant="bottom" src="" />
  </Card>
</>
            </div>
        )
    }
}

export default Favorites
