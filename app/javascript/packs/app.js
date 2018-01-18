import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PostBoard from '../src/components/PostBoard';
import Post from '../src/components/Post';
import NewPost from '../src/components/NewPost';
import EditPost from '../src/components/EditPost';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ PostBoard } />
            <Route path="/posts/new" component={ NewPost } />
            <Route exact path="/posts/:id" component={ Post } />
            <Route path="/posts/:id/edit" component={ EditPost } />
          </Switch>
        </div>
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
