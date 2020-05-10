import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './BeerLog.css';
const moment = require('moment');


class Beer_Log extends Component {

componentDidMount() {
    this.getBeerLog();
}

getBeerLog = () => {
    console.log('In getLog');
    this.props.dispatch({type: 'FETCH_BEERLOG'});
}

deleteEntry = (id) => {
    console.log('In deleteEntry', id);
    this.props.dispatch({ type: 'DELETE_ENTRY', payload: {beer_id: id, user_id: this.props.reduxStore.user.id}});
}

updateEntry = (beer) => {
    console.log('In updateEntry', beer);
    this.props.dispatch({ type: 'SET_ENTRYDETAILS', payload: beer})
    this.props.history.push('/edit')
}

goToBeerLog = () => {
    this.props.history.push('/logbeerform');
}


    render() {
        return (
            <div className="home">
            <div className="homeContainer">
                <h1 className="homeHeading">Beer Log</h1>
                <button type="button" className="btn btn-success btn-lg btn-space" onClick={this.goToBeerLog}>Log A Beer </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Beer Name</th>
                            <th>Beer Style</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th>Comments</th>
                            <th></th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {this.props.reduxStore.beerLog.map(beer => <tr key={beer.id}>
                        <td>{beer.brewery_name}</td>
                        <td>{beer.beer_name}</td>
                        <td>{beer.beer_style_name}</td>
                        <td>{moment(beer.date).format("MMM Do YYYY")}</td>
                        <td>{beer.rating} out of 5</td>
                        <td className="tableComments">{beer.comments}</td>
                        <td></td>
                        <td><button type="button" className="btn btn-success btn-sm" onClick={(event) => this.updateEntry(beer)}>Edit</button><div className="divider"/><button type="button" className="btn btn-success btn-sm" onClick={() => this.deleteEntry(beer.id)}>Delete</button></td>
                        </tr>)}
                 
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})


export default withRouter(connect(putPropsOnRedux)(Beer_Log));
