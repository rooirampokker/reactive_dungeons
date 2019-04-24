import React, { Component } from 'react';
import Dungeon              from './containers/Dungeon'
import QuickCard            from './components/QuickCard';

class App extends Component {
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
