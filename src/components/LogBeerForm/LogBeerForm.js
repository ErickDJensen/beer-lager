import React, { Component } from 'react'
import './LogBeerForm.css'
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
        comments: '',
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
    }
    
    handleChangeFor = (name, event) => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Log Beer Form</h1>
                        <form>
                        <div value={this.state.brewery} onChange={(event) => this.handleChangeFor('brewery', event)}>
                                <label>Brewery:</label>
                                <select>
                                    <option value="" defaultValue="Choose your option">Choose your option</option>
                                    <option value="10K Brewing">10K Brewing</option>
                                    <option value="2">56 Brewing </option>
                                    <option value="3">612 Brew </option>
                                    <option value="4">Able Seedhouse and Brewery</option>
                                    <option value="5">August Schell Brewing Co.</option>
                                    <option value="6">Badger Hill Brewing Co.</option>
                                    <option value="7">Bad Habit Brewing Co.</option>
                                    <option value="8">Bad Weather Brewing Co.</option>
                                    <option value="9">Bang Brewing</option>
                                    <option value="10">Bank Brewing Co.</option>
                                    <option value="11">Bauhaus Brew Labs</option>
                                    <option value="12">Beaver Island Brewing</option>
                                    <option value="13">Bemidji Brewing Co.</option>
                                    <option value="14">Bent Brewstillery</option>
                                    <option value="15">Bent Paddle Brewing Co.</option>
                                    <option value="16">Big Axe Brewing Company</option>
                                    <option value="17">Big Wood Brewery</option>
                                    <option value="18">Blacklist Brewing Company</option>
                                    <option value="19">Boom Island Brewing Co.</option>
                                    <option value="20">Borealis Fermentery</option>
                                    <option value="21">Brau Brothers Brewing Co.</option>
                                    <option value="22">Burning Brothers Brewing Co.</option>
                                    <option value="23">Castle Danger Brewery</option>
                                    <option value="24">Dangerous Man Brewing Co.</option>
                                    <option value="25">Eastlake Brewery and Tavern</option>
                                    <option value="26">Enki Brewing Co.</option>
                                    <option value="27">Excelsior Brewing Co.</option>
                                    <option value="28">Fair State Brewing Cooperative</option>
                                    <option value="29">Flat Earth Brewing Co.</option>
                                    <option value="30">Fulton Brewing Co.</option>
                                    <option value="31">Goat Ridge Brewing Co.</option>
                                    <option value="32">Gull Dam Brewing</option>
                                    <option value="33">Hammerheart Brewinging Co.</option>
                                    <option value="34">Harriet Brewing</option>
                                    <option value="35">Hayes Public House</option>
                                    <option value="36">Indeed Brewing Co.</option>
                                    <option value="37">Insight Brewing </option>
                                    <option value="38">Jack Pine Brewery</option>
                                    <option value="39">Junkyard Brewing Co.</option>
                                    <option value="40">Kinney Creek Brewery</option>
                                    <option value="41">Lake Superior Brewing Co.</option>
                                    <option value="42">Lazy Loon Brewing</option>
                                    <option value="43">Lift Bridge Brewery</option>
                                    <option value="44">LTD Brewing Co.</option>
                                    <option value="45">Lucid Brewing</option>
                                    <option value="46">Lupine Brewing Company</option>
                                    <option value="47">Lupulin Brewing Co.</option>
                                    <option value="48">LynLake Brewery</option>
                                    <option value="49">Mankato Brewery</option>
                                    <option value="50">Mantorville Brewing Co.</option>
                                    <option value="51">Maple Island Brewing Co.</option>
                                    <option value="52">Montgomery Brewing Co.</option>
                                    <option value="53">NorthGate</option>
                                    <option value="54">Olvalde Farm and Brewing Company</option>
                                    <option value="55">Pryes Brewing</option>
                                    <option value="56">Schram Vineyard Winery and Brewery</option>
                                    <option value="57">Sidhe Brewing Co.</option>
                                    <option value="58">Sisyphus Brewing</option>
                                    <option value="59">Sociable Cider Werks</option>
                                    <option value="60">South Fork Brewing Co.</option>
                                    <option value="61">Spilled Grain Brewhouse</option>
                                    <option value="62">Steel Toe Brewing Co.</option>
                                    <option value="63">Summit Brewing Co.</option>
                                    <option value="64">Surly Brewing Co.</option>
                                    <option value="65">Take 16 Brewing</option>
                                    <option value="66">Third Street Brewhouse</option>
                                    <option value="67">Tin Whiskers Brewing</option>
                                    <option value="68">Urban Growler Brewing Co.</option>
                                    <option value="69">Vine Park Brewing Co.</option>
                                    <option value="71">Voyageur Brewing Co.</option>
                                    <option value="72">Wabasha Brewing Co.</option>
                                    <option value="73">Take 16 Brewing</option>
                                    <option value="74">Wenonah Brewing Co.</option>
                                </select>
                            </div>
                            <div value={this.state.beerName} onChange={(event) => this.handleChangeFor('beerName', event)}>
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
                            <div className="stars" value={this.state.rating} onChange={(event) => this.handleChangeFor('rating', event)}>
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
                            <div>
                                <label>Comments:</label>
                                <textarea></textarea>
                            </div>
                            {/* <div>
                                <progress value={this.state.progress} max="100" />
                                <input type="file" onChange={this.handleChange} />
                                <button onClick={this.handleUpload}>Upload</button>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                            </div> */}
                            <div>
                                <button onClick={this.handleClick}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default LogBeerForm
