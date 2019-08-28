
import War from './War'
import Home from './Home'
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    dragons:[]
}

componentDidMount() {
  fetch('http://localhost:3001/dragons')
    .then(responseObj => responseObj.json())
    .then(result => this.setState({ dragons: result }));

}
// this callback function is swtiching the state of the dragon to the oppposite then returning it. To do this we need the id of the dragon
sendToWar = (selectedID) => {
  this.setState({
    dragons: this.state.dragons.map( dragon => {
      if(dragon.id === selectedID){
        dragon.atWar = !dragon.atWar
      }
      return dragon
    })
  })
}

// this callback function is swtiching the state of the dragon to the oppposite then returning it. To do this we need the id of the dragon
sendHome = (selectedID) => {
  this.setState({
    dragons: this.state.dragons.map( dragon => {
      if(dragon.id === selectedID){
        dragon.atWar = !dragon.atWar
      }
      return dragon
    })
  })
}



  render() {
    let homeDragons = this.state.dragons.filter( dragon => dragon.atWar ===  false)
    let warDragons = this.state.dragons.filter( dragon => dragon.atWar ===  true)
    return (
      <div>
        <Home dragons={homeDragons} sendToWar={this.sendToWar}/>
        <War dragons={warDragons} sendHome={this.sendHome} />
        
      </div>
    )
  }
}

