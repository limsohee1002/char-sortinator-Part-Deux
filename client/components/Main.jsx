import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({inputVal: e.target.value})
  }

  handleSubmit(e) {
    axios
      .post('submit', {input: this.state.inputVal})
  }

  render() {
    return (
      <div>
        <form>
          submit
          <input type="text" 
                 value={this.state.inputVal} 
                 onChange={this.handleOnChange} />
          <input type="submit" 
                 value="submit" 
                 onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Main;