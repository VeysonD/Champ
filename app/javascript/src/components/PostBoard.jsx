import React, { Component } from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
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
    };
  }
  componentWillMount() {
    axios.get('/api/posts').then(posts => {
      console.log('What are the posts 1:', posts);
      this.setState({ allPosts: posts.data })
      console.log('what is the state 1:', this.state);
    })
    .catch(error => console.error(error));
    console.log('what is the state 2:', this.state);
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
                        <TableRowColumn>T</TableRowColumn>
                        :
                        <TableRowColumn>F</TableRowColumn>
                      }
                      <TableHeaderColumn>Show</TableHeaderColumn>
                      <TableHeaderColumn>Edit</TableHeaderColumn>
                      <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                  ))}
                </TableBody>
                :
                <TableBody stripedRows displayRowCheckbox={false}>
                </TableBody>
              }
            </Table>
          </Card>
          <RaisedButton
            primary
            label="Write a new post"
            href="/posts/new"
          />
        </Paper>

      </MuiThemeProvider>
    )
  }
};

export default PostBoard;
