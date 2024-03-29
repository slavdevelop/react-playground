import React from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <div>
            <button onClick={context.toggleTheme}>Toggle the theme</button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
