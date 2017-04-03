import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Card>
				    <CardTitle title="Redux Material UI Starter" />
				  </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;