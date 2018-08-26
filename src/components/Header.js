import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  componentDidMount() {
    document.title = 'Wonogiri Dev'
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Header