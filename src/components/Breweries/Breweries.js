import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Breweries extends Component {

    componentDidMount() {
        this.getBreweries();
    }
    
    getBreweries = () => {
        console.log('In getBreweries');
        this.props.dispatch({type: 'FETCH_BREWERIES'});
    } 

    render() {
        return (
            <div>
                <h1>Breweries</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.props.reduxStore.breweries.map(brew => <tr key={brew.id}>
                        <td>{brew.name}</td>
                        <td>{brew.location}</td>
                        <td> <a href={brew.website} target="_blank" rel="noopener noreferrer">Website</a></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(putPropsOnRedux)(Breweries));
