import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Favorites.css';
// import Card from 'react-bootstrap/Card'

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
          <>
            <div className="favorite">
            <div className="homeContainer">
                <h1 className="homeHeading">Favorites</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Beer Name</th>
                            <th>Beer Style</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th>Comments</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {this.props.reduxStore.favorites.map(beer => <tr key={beer.id}>
                        <td>{beer.brewery_name}</td>
                        <td>{beer.beer_name}</td>
                        <td>{beer.beer_style_name}</td>
                        <td>{beer.date}</td>
                        <td id="favoritesCell"><img className="starpic" src="../images/fivestar.jpeg" alt="stars"></img></td>
                        <td className="tableComments">{beer.comments}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            </div>
            </>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(putPropsOnRedux)(Favorites));
