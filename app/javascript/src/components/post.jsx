import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>
        Champ3
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
      </div>
    )
  }
}

export default Post;
