import React, { Component } from 'react';
import FormContainer        from './containers/Form';
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


        </div>
    );
  }
}

export default App;
