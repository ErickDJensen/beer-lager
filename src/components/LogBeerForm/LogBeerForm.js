import React, { Component } from 'react'
import './LogBeerForm.css'
import {storage} from '../Firebase';

class LogBeerForm extends Component {

    state = {
        image: null,
        url: '',
        progress: 0,
      }
    
      handleChange = (event) => {
        if(event.target.files[0]) {
          const image = event.target.files[0];
          this.setState({image});
        }
      }
    
      handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
         (snapshot) => {
          //progress function
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
         }, 
         (error) => {
           //error function
           console.log(error);
         }, 
         () => {
           //complete function
           storage.ref('images').child(image.name).getDownloadURL().then(url => {
             console.log(url);
             this.setState({url});
           })
         });
      }
    

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Log Beer Form</h1>
                        <form className="beerform">
                            <div>
                                <label>Brewery:</label>
                                <select>
                                    <option value="" defaultValue="Choose your option">Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Beer Name:</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Beer Style:</label>
                                <select>
                                    <option value="" defaultValue="Choose your option">Choose your option</option>
                                    <option value="1">Belgian Style</option>
                                    <option value="2">Bocks</option>
                                    <option value="3">Brown Ale</option>
                                    <option value="4">Dark Lager</option>
                                    <option value="5">Hybrid</option>
                                    <option value="6">India Pale Ale</option>
                                    <option value="7">Pale Ale</option>
                                    <option value="8">Pilsner</option>
                                    <option value="9">Porter</option>
                                    <option value="10">Specialty Beer</option>
                                    <option value="11">Stout</option>
                                    <option value="12">Wheat Beer</option>
                                    <option value="13">Wild/Sour Beer</option>
                                </select>
                            </div>
                            <div>
                                <label>Date:</label>
                                <input type="date"></input>
                            </div>
                            <label>Rating:</label>
                            <div className="stars">
                                <input className="star star-5" id="star-5" type="radio" name="star" />
                                <label className="star star-5" htmlFor="star-5"></label>
                                <input className="star star-4" id="star-4" type="radio" name="star" />
                                <label className="star star-4" htmlFor="star-4"></label>
                                <input className="star star-3" id="star-3" type="radio" name="star" />
                                <label className="star star-3" htmlFor="star-3"></label>
                                <input className="star star-2" id="star-2" type="radio" name="star" />
                                <label className="star star-2" htmlFor="star-2"></label>
                                <input className="star star-1" id="star-1" type="radio" name="star" />
                                <label className="star star-1" htmlFor="star-1"></label>
                            </div>
                            <div>
                                <label>Comments:</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <progress value={this.state.progress} max="100" />
                                <input type="file" onChange={this.handleChange} />
                                <button onClick={this.handleUpload}>Upload</button>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default LogBeerForm
