import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Favorites.css';

class Favorites extends Component {

  componentDidMount() {
    this.getFavorites();
}

getFavorites = () => {
    console.log('In getFavorites');
    this.props.dispatch({type: 'GET_FAVORITES'});
}


    render() {
        return (
            <div>
                <p>Favorites</p>
                <>
                {JSON.stringify(this.props.reduxStore.favorites)}
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

const putPropsOnRedux = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(putPropsOnRedux)(Favorites));
