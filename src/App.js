
import React from "react";

class App extends React.Component {
  
  render() {
    const { name } = this.props;
    console.log('test console')
    return (
      <div style={{'marginTop':'300px'}}>
        <h1>
          Hello finally culo non da
        </h1>
      </div>
    );
  }
}

export default App;
