import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          Router works!
        </div>
      </BrowserRouter>
    )
  }
}

export default Post;
