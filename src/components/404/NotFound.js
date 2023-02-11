import React, { Component } from 'react'
import './NotFound.css'

export default class NotFound extends Component {
    render() {
        return (
            <main className='NotFound'>
                <div className='NotFound-content'>
                    <h1>Error 404</h1>
                    <p>This page doesn't exist...</p>

                <div className='NotFound-img'></div>
                </div>

            </main>
        )
    }
}
