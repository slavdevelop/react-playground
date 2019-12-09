import React from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const { isLightTheme, light, dark } = context;

        const theme = isLightTheme ? light : dark;

        return (
          <div style={{ color: theme.syntax, background: theme.bg }}>
            <h2>Book List</h2>
            <ul>
              <li>Drama</li>
              <li>History</li>
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default BookList;
