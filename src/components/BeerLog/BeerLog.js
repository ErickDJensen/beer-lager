import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './BeerLog.css'


class Beer_Log extends Component {

componentDidMount() {
    this.getLog();
}

getLog = () => {
    console.log('In getLog');
    this.props.dispatch({type: 'FETCH_BEERLOG'});
}


    render() {
        return (
            <div className="container">
                <h1>Beer Log</h1>
                <button className="waves-effect waves-light btn-small"><i className="material-icons right">add</i>Log In Beer</button>
                <table className="centered highlight">
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
                    
                    </tbody>
                </table>
                    {JSON.stringify(this.props.reduxStore.beerLog)}
            </div>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})


export default withRouter(connect(putPropsOnRedux)(Beer_Log));
