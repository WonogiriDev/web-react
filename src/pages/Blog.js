import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

import '../assets/Blog.css'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwonogiridev')
      this.setState({ data: res.data.items })
    } catch (error) {
      console.log(error)
    }
  }

  handleList(data, i) {
    return (
      <Link
        to={{
          pathname: `/blog/${i}`,
          state: { item: data }
        }}
        key={i}
        className="box">
          <div className="list">
            <h3>{data.title}</h3>
            <p className="author">{data.author}</p>
          </div>
      </Link>
    )
  }
  
  render() {
    return (
      <div>
        {this.state.data.map((data, i) => this.handleList(data, i))}
      </div>
    )
  }
}

export default Blog