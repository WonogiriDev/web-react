import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Blog from './Blog'
import About from './About'
import Article from './Article'

import Header from '../components/Header'

import '../assets/App.css'

const App = () => (
  <div>
    <Header />
    <div className="body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Article} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </div>
)

export default App
