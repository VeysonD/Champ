import React, { Component } from 'react';
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
              <TableBody stripedRows displayRowCheckbox={false}>
              </TableBody>
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
