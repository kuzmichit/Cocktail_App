
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {bootstrap} from 'bootstrap';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";


class App extends React.Component {
  
  render() {
  
    const { name } = this.props;
    console.log(document.getElementById('go'))
    
    return (
      <Router>
        <div className='text-primary' id='go'>
        ggggggggg
          <Row>
          <Col>
            Tab to edit
          </Col>
          
          <Col>
            Tab to edit
          </Col>
          </Row>
        </div>
      </Router>
  )
  }
}

export default App;
