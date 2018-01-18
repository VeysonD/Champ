import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';

import PostBoard from '../src/components/PostBoard';
import Post from '../src/components/Post';
import NewPost from '../src/components/NewPost';
import EditPost from '../src/components/EditPost';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: null
    };
  }

  componentWillMount() {
    axios.get('/api/posts').then(posts => {
      this.setState({ allPosts: posts.data })
    })
    .catch(error => console.error(error));
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
        { this.state.allPosts
          ?
          <div>
            <Switch>
              <Route exact path="/" render={() =>(
                <PostBoard allPosts={ this.state.allPosts } />
              )}
              />
              <Route path="/posts/new" component={ NewPost } />
              <Route exact path="/posts/:id" component={ Post } />
              <Route path="/posts/:id/edit" component={ EditPost } />
            </Switch>
          </div>
          :
          <Subheader>There are no posts currently</Subheader>
        }
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
