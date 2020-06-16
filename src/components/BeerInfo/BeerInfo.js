import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


class BeerInfo extends Component {

    componentDidMount() {
        this.getBeerInfo();
    }
    
    //function to get beer style info from database to display on the beer info page
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
                            <th className="text">Beer Style</th>
                            <th className="text">Description</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.props.reduxStore.beerInfo.map(beer => <tr key={beer.id}>
                        <td className="text">{beer.name}</td>
                        <td className="text">{beer.description}</td>
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
