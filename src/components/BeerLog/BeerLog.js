import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './BeerLog.css';


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


    render() {
        return (
            <>
            <div className="container">
                <h1>Beer Log</h1>
                <button>Log In Beer</button>
                <table>
                    <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Beer Name</th>
                            <th>Beer Style</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th>Comments</th>
                            <th>Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {this.props.reduxStore.beerLog.map(beer => <tr key={beer.id}>
                        <td>{beer.brewery_name}</td>
                        <td>{beer.beer_name}</td>
                        <td>{beer.beer_style_name}</td>
                        <td>{beer.date}</td>
                        <td>{beer.rating}</td>
                        <td>{beer.comments}</td>
                        <td></td>
                        <td><button>Edit</button><div className="divider"/><button onClick={() => this.deleteEntry(beer.id)}>Delete</button></td>
                        </tr>)}
                 
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})


export default withRouter(connect(putPropsOnRedux)(Beer_Log));
