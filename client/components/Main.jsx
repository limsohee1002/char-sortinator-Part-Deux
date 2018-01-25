import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
      sortedVal: [],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({inputVal: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({inputVal: ''})
    axios.post('submit', {input: this.state.inputVal})
         .then(res => this.setState({sortedVal: this.state.sortedVal.concat(res.data)}))
  }

  render() {
    return (
      <div className="form">
        <form>
          <input type="text" 
                 value={this.state.inputVal} 
                 onChange={this.handleOnChange} />
          <input type="submit" 
                 value="submit" 
                 onClick={this.handleSubmit} />
        </form>
        <ul>
          {this.state.sortedVal.map((val) => <li>{val}</li>)}
        </ul>
      </div>
    );
  }
}

export default Main;