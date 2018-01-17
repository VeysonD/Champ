import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'

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
  componentWillMount() {
    axios
      .get('/posts')
      .then(posts => this.state.allPosts = posts)
      .catch(error => console.error(error));
    console.log('what is the state:', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>
          Champ40
          </h1>
          <header class="navbar bg-gray">
            <section class="navbar-section navbar-brand mr-2">Post History</section>
            <section class="navbar-section">
              <div class="input-group input-inline">
                <div>
                  Write new post here
                </div>
              </div>
            </section>
          </header>

          <Switch>
            <Route path="/posts/:id" component={ Post } />
            <Route path="/posts/new" component={ NewPost } />
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
