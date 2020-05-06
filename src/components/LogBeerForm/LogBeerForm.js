import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './LogBeerForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import {storage} from '../Firebase';

class LogBeerForm extends Component {

    

    state = {
        // image: null,
        // url: '',
        // progress: 0,
        brewery: '',
        beerStyle: '',
        beerName: '',
        date: '',
        rating: '',
        comments: ''
      }

      componentDidMount = () => {
          this.props.dispatch({type: 'FETCH_BEERINFO'})
          this.props.dispatch({type: 'FETCH_BREWERIES'})
      }
    
    //   handleChange = (event) => {
    //     if(event.target.files[0]) {
    //       const image = event.target.files[0];
    //       this.setState({image});
    //     }
    //   }
    
    //   handleUpload = () => {
    //     const {image} = this.state;
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on('state_changed',
    //      (snapshot) => {
    //       //progress function
    //       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //       this.setState({progress});
    //      }, 
    //      (error) => {
    //        //error function
    //        console.log(error);
    //      }, 
    //      () => {
    //        //complete function
    //        storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //          console.log(url);
    //          this.setState({url});
    //        })
    //      });
    //   }

    handleClick = (event) => {
        event.preventDefault();
        console.log('In handleClick', this.state);
        this.props.dispatch({type: 'POST_BEERINFO', payload: {
            brewery_name: this.state.brewery,
            beer_style_name: this.state.beerStyle,
            beer_name: this.state.beerName,
            date: this.state.date,
            rating: this.state.rating,
            comments: this.state.comments,
            user_id: this.props.reduxStore.user.id
        }});
        this.props.history.push('/home');
    }
    
    handleChangeFor = (name, event) => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    goBack = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="formImage">
                <div className="beerForm">
                    <div className="container">
                        <h1 className="formHeading">Log Beer Form</h1>
                        <Form>
                        <div value={this.state.brewery} onChange={(event) => this.handleChangeFor('brewery', event)}>
                        <label className="formLabel">Brewery:</label>
                                <select>
                                    {this.props.reduxStore.breweries && 
                                    <>
                                    <option value="" defaultValue="Choose your option">Choose your option</option>
                                        {this.props.reduxStore.breweries.map(beer => 
                                            <option key={beer.id}value={beer.name}>{beer.name}</option>
                                            )}
                                        </>
                                    }
                                </select>
                            </div>
                            <div value={this.state.beerName} onChange={(event) => this.handleChangeFor('beerName', event)}>
                                <label className="formLabel">Beer Name:</label>
                                <input type="text"></input>
                            </div>
                            <div value={this.state.beerStyle} onChange={(event) => this.handleChangeFor('beerStyle', event)}>
                                <label className="formLabel">Beer Style:</label>
                                <select>
                                    {this.props.reduxStore.beerInfo && 
                                    <>
                                    <option value="" defaultValue="Choose your option">Choose your option</option>
                                        {this.props.reduxStore.beerInfo.map(beer => 
                                            <option key={beer.id}value={beer.name}>{beer.name}</option>
                                            )}
                                        </>
                                    }
                                </select>
                            </div>
                            <div value={this.state.date} onChange={(event) => this.handleChangeFor('date', event)}>
                                <label className="formLabel">Date:</label>
                                <input type="date" required></input>
                            </div>
                            
                            <div className="stars" value={this.state.rating} onChange={(event) => this.handleChangeFor('rating', event)}>
                            <label className="formLabel">Rating:</label>
                                <input value="5" className="star star-5" id="star-5" type="radio" name="star" />
                                <label className="star star-5" htmlFor="star-5"></label>
                                <input value="4" className="star star-4" id="star-4" type="radio" name="star" />
                                <label className="star star-4" htmlFor="star-4"></label>
                                <input value="3" className="star star-3" id="star-3" type="radio" name="star" />
                                <label className="star star-3" htmlFor="star-3"></label>
                                <input value="2" className="star star-2" id="star-2" type="radio" name="star" />
                                <label className="star star-2" htmlFor="star-2"></label>
                                <input value="1" className="star star-1" id="star-1" type="radio" name="star" />
                                <label className="star star-1" htmlFor="star-1"></label>
                            </div>
                            <div className="comments" value={this.state.comments} onChange={(event) => this.handleChangeFor('comments', event)}>
                                <label className="formLabel">Comments:</label>
                                <textarea rows="3" cols="45" maxLength = "500" placeholder="Enter comments here"></textarea>
                            </div>
                            {/* <div>
                                <progress value={this.state.progress} max="100" />
                                <input type="file" onChange={this.handleChange} />
                                <button onClick={this.handleUpload}>Upload</button>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                            </div> */}
                            <div>
                                <Button variant="light" onClick={this.handleClick}>Submit</Button><div className="dividerForm"/><Button variant="light" onClick={this.goBack}>Go Back</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(putPropsOnRedux)(LogBeerForm));