import React, { Component } from 'react'

export default class Home extends Component {

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm bg-success" style={{ float: 'left', width: '100%', padding: '5%'}}>
                        <h1>Home</h1>
                        {this.props.dragons.map(dragon => {
                            return (
                                <center>
                                <div className="card bg-info">
                                    <h3> {dragon.name} </h3>
                                    <p> {dragon.description} </p>
                                    <img className="rounded-circle" width="50%" alt="dragons" src={dragon.image} onClick={() => this.props.sendToWar(dragon.id)} /> 
                                    <br></br>
                                </div>
                                </center>

                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}
