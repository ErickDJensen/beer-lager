import React, { Component } from 'react'

class LogBeerForm extends Component {
    render() {
        return (
            <div className="section-container">
                <div className="row">
                    <div className="col s12 l5 offset-l3">
                    <h1 className="indigo-text">Log Beer Form</h1>
                    <form>
                        <div className="input-field">
                            <input type="text"></input>
                            <label>Beer Name</label>
                        </div>
                        <div className="input-field">
                            <textarea class="materialize-textarea"></textarea>
                            <label>Comments</label>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default LogBeerForm
