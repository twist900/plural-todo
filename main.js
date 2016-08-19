/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TaskList from './TaskList';

class PluralTodo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    }
  }

  render() {
    return (<TaskList todos={this.state.todos} />);
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('main', () => PluralTodo);
