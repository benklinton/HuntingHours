import React from 'react';
import './style.css';
import { Container, Form, Button } from 'react-bootstrap';


class App extends React.Component {

  state = {
    hours: ''
  }


  handleChange(e) {
    this.setState({hours: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

render() {
  return (
   <Container>
     <h1 className='text-center margin-top'>Please enter your play time for Hunt:Showdown</h1>
     <h3 className='text-center'>Round to the nearest hour</h3>
     <Form className="form-center" onSubmit={this.handleSubmit}>
       <Form.Control className="input-style" type='text' value={this.state.hours} onChange={this.handleChange.bind(this)}></Form.Control>
       <Button type="submit" value='submit' variant="outline-secondary" className="button-style">Submit</Button>
     </Form>

   </Container>
  );
}
}


export default App;
