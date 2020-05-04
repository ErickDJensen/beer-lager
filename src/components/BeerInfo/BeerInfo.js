import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


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
            <div className="background">
            <div className="container">
                <h1 className="heading">Beer Info</h1>
                <Table striped bordered hover>
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
                </Table>
            </div>
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(putPropsOnRedux)(BeerInfo));
