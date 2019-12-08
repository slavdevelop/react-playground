import React from 'react';

import CustomContext from './CustomContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        { label: 'Item 1', callback: this.itemCallback },
        { label: 'Menu item 2', callback: this.item2Callback },
        { label: 'Apple', callback: this.appleCallback },
        { label: 'This is orange', callback: this.orangeCallback },
        { label: 'Conetxt menu is fun' },
        { label: 'Cool', callback: this.coolCallback }
      ]
    };
  }

  itemCallback() {
    alert('clicked on Item 1');
  }

  item2Callback() {
    alert('clicked on Item 2');
  }

  appleCallback() {
    alert('clicked on Apple');
  }
  orangeCallback() {
    alert('clicked on Orange');
  }
  coolCallback() {
    alert('clicked on Cool');
  }
  render() {
    return (
      <div>
        <h1>Hello, React</h1>
        <p>Implementing custom context menu in react.js</p>
        <p> Right click anywhere on the screen to see the menu defined below</p>
        {JSON.stringify(this.state.menu)}
        <CustomContext items={this.state.menu}></CustomContext>
      </div>
    );
  }
}

export default App;
