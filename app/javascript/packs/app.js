import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'

import PostBoard from '../src/components/PostBoard';
import Post from '../src/components/Post';
import NewPost from '../src/components/NewPost';
import EditPost from '../src/components/EditPost';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
    };
  }
  componentWillMount() {
    axios
      .get('/api/posts')
      .then(posts => this.state.allPosts = posts)
      .catch(error => console.error(error));
    console.log('what is the state:', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>
          Champ
          </h1>
          <header class="navbar bg-gray">
            <section class="navbar-section navbar-brand mr-2">Post History</section>
            <section class="navbar-section">
              <div class="input-group input-inline">
                <Link to="/posts/new">
                  Write new post here
                </Link>
              </div>
            </section>
          </header>

          <Switch>
            <Route exact path="/" component= { PostBoard } />
            <Route path="/posts/new" component={ NewPost } />
            <Route path="/posts/:id" component={ Post } />
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
