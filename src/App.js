import React, { Component } from 'react';
import FormContainer        from './containers/Form';
import Dungeon              from './containers/Dungeon'
import QuickCard            from './components/QuickCard';

class App extends Component {
  constructor(props) {
      super(props);
      this.tileSource = require('./data/tileSource.json');
  }
  /*
  *
  */

  render() {
    return (
        <div className="container">
            <QuickCard
                title   = 'Enter your dungeon dimensions'
                content = <FormContainer />
            />
            <div>
                <Dungeon></Dungeon>
            </div>
        </div>
    );
  }
}

export default App;
