import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const moment = require('moment');

class EditBeerEntry extends Component {


    state = {
        brewery_name: this.props.details.brewery_name,
        beer_style_name: this.props.details.beer_style_name,
        beer_name: this.props.details.beer_name,
        date: moment(this.props.details.date).format('MM/DD/yyyy'),
        rating: this.props.details.rating,
        comments: this.props.details.comments,

    }




//fetches beer style and breweries list for the drop down menus
    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_BEERINFO' })
        this.props.dispatch({ type: 'FETCH_BREWERIES' })
    }

    //function that gathers data that has been updated and then updates the database
    handleClick = (event) => {
        event.preventDefault();
        console.log('In update handleClick', this.props.reduxStore.details.id);
        if (this.refs.rating.value > 5 || this.refs.rating.value < 1) {
            alert('rating must be between 1 and 5')
        }
        this.props.dispatch({
            type: 'PUT_BEERINFO', payload: {
                brewery_name: this.state.brewery_name,
                beer_style_name: this.state.beer_style_name,
                beer_name: this.state.beer_name,
                date: this.state.date,
                rating: this.state.rating,
                comments: this.state.comments,
                id: this.props.reduxStore.details.id,
            }
        });
        this.props.history.push('/home');
    }

    //function that takes in the info from each input
    handleChangeFor = (name, event) => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    //function that takes you back to the home page
    goBack = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="formImage">
                <div className="beerForm">
                    <div className="container">
                        <h1 className="formHeadingEdit">Edit Beer Form</h1>
                        <Form>
                            <div defaultValue={this.state.brewery_name} onChange={(event) => this.handleChangeFor('brewery_name', event)}>
                                <label className="formLabel">Brewery:</label>
                                <select value={this.state.brewery_name}>
                                    {this.props.reduxStore.breweries &&
                                        <>
                                            <option value="" defaultValue="Choose your option">Choose your option</option>
                                            {this.props.reduxStore.breweries.map(beer =>
                                                <option key={beer.id} value={beer.name}>{beer.name}</option>
                                            )}
                                        </>
                                    }
                                </select>
                            </div>
                            <div defaultValue={this.state.beer_name} onChange={(event) => this.handleChangeFor('beer_name', event)}>
                                <label className="formLabel">Beer Name:</label>
                                <input type="text" value={this.state.beer_name}></input>
                            </div>
                            <div value={this.state.beer_style_name} onChange={(event) => this.handleChangeFor('beer_style_name', event)}>
                                <label className="formLabel">Beer Style:</label>
                                <select value={this.state.beer_style_name}>
                                    {this.props.reduxStore.beerInfo &&
                                        <>
                                            <option value="" defaultValue="Choose your option">Choose your option</option>
                                            {this.props.reduxStore.beerInfo.map(beer =>
                                                <option key={beer.id} value={beer.name}>{beer.name}</option>
                                            )}
                                        </>
                                    }
                                </select>
                            </div>
                            <div value={this.state.date} onChange={(event) => this.handleChangeFor('date', event)}>
                                <label className="formLabel">Date:</label>
                                <input type="text" value={this.state.date}></input>
                            </div>
                            <div className="stars" value={this.state.rating} onChange={(event) => this.handleChangeFor('rating', event)}>
                                <label className="formLabel">Rating:</label>
                                <input type="number" name="rating" ref="rating" min="1" max="5" value={this.state.rating} onChange={(event) => this.handleChangeFor('rating', event)}></input>
                            </div>
                            <div className="comments" value={this.state.comments} onChange={(event) => this.handleChangeFor('comments', event)}>
                                <label className="formLabel">Comments:</label>
                                <textarea rows="3" cols="45" maxLength="500" placeholder="Enter comments here" value={this.state.comments}></textarea>
                            </div>
                            <div>
                                <Button variant="light" onClick={this.handleClick}>Submit</Button><div className="dividerForm" /><Button variant="light" onClick={this.goBack}>Go Back</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    details: reduxStore.details,
    reduxStore,
})

export default withRouter(connect(putPropsOnRedux)(EditBeerEntry));