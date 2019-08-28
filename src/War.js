import React, { Component } from 'react'

export default class War extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className=" col-sm bg-danger" style={{ float: 'left', width: '100%', padding: '5%'}}>
                    <h1>War</h1>
                    {this.props.dragons.map(dragon => {
                        return (
                            <center>
                            <div className="card bg-warning">
                                <h3> {dragon.name} </h3>
                                <p> {dragon.description} </p>
                                <img className="rounded-circle" width="50%" alt="dragons" src={dragon.image} onClick={() => this.props.sendHome(dragon.id)} /> 
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
