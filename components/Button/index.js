import {ThemeContext} from '../../theme-context';
import React  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default (props) => {
    console.log(props);

    return (
        <ThemeContext.Consumer>
            { theme => <Button {...props}  style={{backgroundColor: theme.background}} /> }
        </ThemeContext.Consumer>
    );
};

