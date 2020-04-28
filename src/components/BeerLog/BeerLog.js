import React, { Component } from 'react'
import './BeerLog.css'
class Beer_Log extends Component {
    render() {
        return (
            <div class="container">
                <h1>Beer Log</h1>
                <table class="centered highlight">
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
                    <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Beer_Log
