import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

class Search extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <input type='text' placeholder='Search...'></input>
        <Button variant='success'>Search</Button>
      </ButtonToolbar>
    );
  }
}
export default Search;
