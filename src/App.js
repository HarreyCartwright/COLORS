import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Pallete from './Pallete'
import seedColors from './seedColors'
import generatePalette from './colorHelpers'
import PalleteList from './PalleteList'
import SingleColorPallete from './SingleColorPallete'
class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PalleteList palletes={seedColors} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Pallete pallete={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPallete />} />
      </Switch>
      // <div>
      //   <Pallete pallete={generatePalette(seedColors[4])} />
      // </div>
    )
  }
}

export default App