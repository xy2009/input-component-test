import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber';

class App extends React.Component {

  state = {
    value: undefined,
  };
  render() {
    return (
      <div>
        <InputNumber value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value,
            })
          }}
        ></InputNumber>
        <InputNumber defaultValue='456' onChange={e => {
        }}></InputNumber>
        <InputNumber defaultValue='789' onChange={e => {
          console.log(e.target.value);
        }}></InputNumber>
      </div >
    );
  }

}

export default App;
