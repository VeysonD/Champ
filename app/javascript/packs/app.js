import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// import Hello from '../src/components/hello_react'; // testing hello_react
import Post from '../src/components/post';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
        RENDER MEEEEEEEEEEEE
          <Route path='/' component={Post}/>
        </div>
      </Router>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement('div')),
  )
})
