import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Post from '../src/components/Post';
import NewPost from '../src/components/NewPost';
import EditPost from '../src/components/EditPost';

// CHANGE FIRST ROUTE LATER!!!

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={ Post } />
          <Route exact path="/new" component={ NewPost } />
          <Route exact path="/edit" component={ EditPost } />
        </Switch>
      </BrowserRouter>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
