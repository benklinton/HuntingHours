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
    this.clearText()
    this.runApp();
  }

  clearText () {
    document.getElementById('start').innerHTML += ""
    document.getElementById('road').innerHTML+= ""
    document.getElementById('flight').innerHTML+= "";
    document.getElementById('tv').innerHTML+= "";
    document.getElementById('swim').innerHTML+= "";
  }

  runApp () {
    let userHours = this.state.hours
     let flightHours = userHours / 19
     let roadtripHours = userHours / 42
     let convertMin = userHours * 60
     let tvHours = convertMin / 42
     let swimHours = userHours / 7
     document.getElementById('start').innerHTML += "You have played enough Hunt:Showdown to..."
     document.getElementById('road').innerHTML+= "Drive from LA to NYC "+ Math.round(roadtripHours) + " times";
     document.getElementById('flight').innerHTML+= "Fly nonstop fron NYC to Singapore (Worlds Longest Flight) "+ Math.round(flightHours) + " times";
     document.getElementById('tv').innerHTML+= "Watch an episode of your favorite TV show (average runtime 42 minutes) "+ Math.round(tvHours) + " times";
     document.getElementById('swim').innerHTML+= "Swim the English Channel "+ Math.round(swimHours) + " times";

  }

render() {
  return (
   <Container>
     <h1 className='text-center margin-top'>Please enter your play time for Hunt:Showdown</h1>
     <h3 className='text-center'>Round to the nearest hour</h3>
     <Form className="form-center" onSubmit={this.handleSubmit.bind(this)}>
       <Form.Control className="input-style" type='text' vlaue={this.state.hours} onChange={this.handleChange.bind(this)}></Form.Control>
       <Button type="submit" value='submit' variant="outline-secondary" className="button-style">Submit</Button>
     </Form>
    <div id='start' className='results'></div>
    <div id='road' className='results'></div>
    <div id="flight" className='results'></div>
    <div id="tv" className='results'></div>
    <div id="swim" className='results'></div>
   </Container>
  );
}
}


export default App;
