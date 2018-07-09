import React, { Component } from 'react';
import Todoinput from './components/component/reduxInput'
import TodoContent from './components/component/reduxContent'
import TodoInfo from './components/component/reduxinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todoinput/>
        <TodoContent/>
        <TodoInfo/>
      </div>
    );
  }
}

export default App;
