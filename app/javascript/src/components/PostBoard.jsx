import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardTitle } from 'material-ui/Card';


class PostBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      allPosts: null,
      open: false,
      currentPost: null,
    };
    this.closeConfirmationBox = this.closeConfirmationBox.bind(this);
  }
  componentWillMount() {
    axios.get('/api/posts').then(posts => {
      this.setState({ allPosts: posts.data })
    })
    .catch(error => console.error(error));
  }
  openConfirmationBox(id) {
   console.log('Open Confirmationbox post id:', this.state);
    this.setState({
      open: true,
      currentPost: id
    });
  }
  closeConfirmationBox() {
    this.setState ({
      open: false,
      currentPost: null
    });
  }

  destroyPost() {
    console.log('Destroying post id:', this.state.currentPost);

    axios.delete(`/api/posts/${this.state.currentPost}`)
      .then(post => {
        axios.get('/api/posts').then(posts => {
          this.setState({
            allPosts: posts.data,
            open: false,
            currentPost: null
          });
        })
        .catch(error => console.error(error));
      })
      .catch(err => {
        this.setState({
          open: false,
          currentPost: null
        });
        console.error(err);
      });
  }

  render() {
    const actions = [
      <FlatButton label="Sure thing!" primary onClick={() => this.destroyPost()} />,
      <FlatButton label="Cancel" primary onClick={this.closeConfirmationBox} />
    ];
    return (
      <MuiThemeProvider>
        <Paper style={{ width: '95%', margin: 'auto', marginTop: 12, padding: 12 }}>
          <Card style={{ margin: 'auto', padding: 12, marginBottom: 12}}>
            <CardTitle style={{ fontSize: '40px'}}>
              Champ
            </CardTitle>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Post History"/>
              </ToolbarGroup>
            </Toolbar>
            <Table style={{ width: '95%', margin: 'auto', marginTop: 12, padding: 12 }}>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Body</TableHeaderColumn>
                  <TableHeaderColumn>Published</TableHeaderColumn>
                  <TableHeaderColumn>Show</TableHeaderColumn>
                  <TableHeaderColumn>Edit</TableHeaderColumn>
                  <TableHeaderColumn>Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              { this.state.allPosts
                ?
                <TableBody stripedRows displayRowCheckbox={false}>
                  {this.state.allPosts.map(post => (
                    <TableRow key={post.id}>
                      <TableRowColumn>{post.title} {post.factorial}</TableRowColumn>
                      <TableRowColumn>{post.body}</TableRowColumn>
                      { post.published
                        ?
                        <TableRowColumn>Yes</TableRowColumn>
                        :
                        <TableRowColumn>No</TableRowColumn>
                      }
                      <TableRowColumn>
                        <Link to={`/posts/${post.id}`}>
                          <RaisedButton
                            secondary
                            label="Show"
                          />
                        </Link>
                      </TableRowColumn>
                      <TableRowColumn>
                        <Link to={`/posts/${post.id}/edit`}>
                          <RaisedButton
                            secondary
                            label="Edit"
                          />
                        </Link>
                      </TableRowColumn>
                      <TableRowColumn>
                        <RaisedButton
                          secondary
                          label="Delete"
                          onClick={() => this.openConfirmationBox(post.id)}
                        />
                      </TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
                :
                <TableBody stripedRows displayRowCheckbox={false}>
                </TableBody>
              }
            </Table>
          </Card>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.closeConfirmationBox}
          >Are you sure you want to delete this post?
          </Dialog>
          <Link to="posts/new">
            <RaisedButton
              primary
              label="Write a new post"
            />
          </Link>

        </Paper>
      </MuiThemeProvider>
    )
  }
};

export default PostBoard;
