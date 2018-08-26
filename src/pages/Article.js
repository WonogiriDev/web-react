import React from 'react'
import '../assets/Article.css'
import PropTypes from 'prop-types'

class Article extends React.Component {
  render() {
    const { title, author, content, pubDate } = this.props.location.state.item
    return (
      <div style={{ padding: '0 40vh' }}>
        <h1>{title}</h1>
        <div id="author">
          <h3>{author}</h3> - <p>{pubDate}</p>
        </div>
        <div className="text">
          <p>
            <span dangerouslySetInnerHTML={{ __html: content }}></span>
          </p>
        </div>
      </div>
    )
  }
}

Article.PropTypes = {
  item: PropTypes.object,
}

export default Article