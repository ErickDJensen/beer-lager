import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BeerInfo extends Component {

    componentDidMount() {
        this.getBeerInfo();
    }
    
    getBeerInfo = () => {
        console.log('In getBeerInfo');
        this.props.dispatch({type: 'FETCH_BEERINFO'});
    } 
    
    render() {
        return (
            <div>
                <h1>Beer Info</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Beer Style</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.props.reduxStore.beerInfo.map(beer => <tr key={beer.id}>
                        <td>{beer.name}</td>
                        <td>{beer.description}</td>
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

export default withRouter(connect(putPropsOnRedux)(BeerInfo));
