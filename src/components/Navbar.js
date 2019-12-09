import React from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {authContext => (
        <ThemeContext.Consumer>
          {themeContext => {
            const { isAuthenticated, toggleAuth } = authContext;
            const { isLightTheme, light, dark } = themeContext;

            const theme = isLightTheme ? light : dark;

            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Navigation</h1>
                <div>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
                <ul>
                  <li style={{ background: theme.ui }}>Home</li>
                  <li style={{ background: theme.ui }}>About</li>
                  <li style={{ background: theme.ui }}>Contacts</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
