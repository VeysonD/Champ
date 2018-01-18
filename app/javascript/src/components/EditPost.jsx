import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardTitle } from 'material-ui/Card';


class EditPost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      factorial: 0,
      checked: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
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

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    })
  }

  updateCheck() {
    const oldState = this.state.checked;
    this.setState({
      checked: !oldState
    });
  }

  submitPost() {
    axios.put(`/api/posts/${this.props.match.params.id}`, {
      title: this.state.title,
      body: this.state.body,
      published: this.state.checked
    }).then((post) => {
      console.log('What is the submitted post:', post);
    }).catch((err) => {
      console.error(err);
    });
    window.location.href="/"
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
                <ToolbarTitle text="Write a new post"/>
              </ToolbarGroup>
            </Toolbar>
            <form
              noValidate autoComplete="off"
              style={{ display: 'flex', flexWrap: 'wrap'}}
            >
              <TextField
                id="title"
                required={ true }
                floatingLabelText="Title"
                value={ this.state.title }
                onChange={ this.handleTitleChange }
                style={{
                  marginLeft: '80px',
                  marginRight: '80px',
                  width: 200,
                }}
              />
            </form>
            <form
              noValidate autoComplete="off"
              style={{ display: 'flex', flexWrap: 'wrap'}}
            >
              <TextField
                id="body"
                floatingLabelText="Body"
                multiLine={ true }
                rowsMax={ 10 }
                value={ this.state.body }
                onChange={ this.handleBodyChange }
                style={{
                  marginLeft: '80px',
                  marginRight: '80px',
                  width: 200,
                }}
              />
            </form>
            <Checkbox
              label="Published"
              style={{
                marginTop: '16px',
                marginLeft: '80px',
                maxWidth: 250,
                marginBottom: 16
              }}
              checked={ this.state.checked }
              onCheck={ this.updateCheck }
            />
          </Card>
          <Link to="/">
            <RaisedButton
              primary
              label="Go back"
            />
          </Link>
          <RaisedButton
            secondary
            label="Edit Post"
            onClick={ this.submitPost }
          />
        </Paper>
      </MuiThemeProvider>
    )
  }
};

export default EditPost;
