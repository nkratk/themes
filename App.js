import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {ThemeContext, themes} from './theme-context';
import ThemedButton from '../components/Button';



export default class App extends Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton onPress={this.toggleTheme} />
      </ThemeContext.Provider>
    );
  }
};
