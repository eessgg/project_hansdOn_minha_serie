import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'

const Home = () => {
  return <h1>Home</h1>
}

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/generos' component={Generos} />
          <Route path='/generos/novo' component={NovoGenero} />
          <Route path='/generos/:id' component={EditarGenero} />

          <Route path='/series' component={Series} />
          <Route path='/series/novo' component={NovaSerie} />
          <Route path='/series/:id' component={InfoSerie} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
