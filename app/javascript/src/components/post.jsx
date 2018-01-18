import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardTitle } from 'material-ui/Card';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      factorial: 0,
      checked: false
    };

  }
  componentWillMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
      .then((post) => {
        this.setState({
          title: post.data.title,
          body: post.data.body,
          factorial: post.data.factorial,
          checked: post.data.published,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <MuiThemeProvider>
        <Paper style={{ width: '95%', margin: 'auto', marginTop: 12, padding: 12 }}>
          <Card style={{ margin: 'auto', padding: 12, marginBottom: 12}}>
            <CardTitle style={{ fontSize: '40px'}}>
              Champ
            </CardTitle>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Champ Post"/>
              </ToolbarGroup>
            </Toolbar>
            <Subheader>
              { this.state.title } { this.state.factorial }
            </Subheader>
            <Subheader>
              { this.state.body }
            </Subheader>
            <Checkbox
              label="Published"
              style={{
                marginTop: '16px',
                marginLeft: '20px',
                maxWidth: 250,
                marginBottom: 16
              }}
              checked={ this.state.checked }
              disabled= { true }
            />
          </Card>
          <Link to="/">
            <RaisedButton
              primary
              label="Go back"
            />
          </Link>
        </Paper>
      </MuiThemeProvider>
    )
  }
};

export default Post;
