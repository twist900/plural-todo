/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

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

  onPressStarted(){
    this.nav.push({ name: 'taskform'});
  }

  sceneConfig(){
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, nav){
    switch(route.name){
      case 'taskform':
        return <TaskForm
          onAdd={this.onAdd.bind(this)}
          onCancel={this.onCancel.bind(this)}
        />;
      default:
        return (
          <TaskList
            onPressStarted={this.onPressStarted.bind(this)}
            todos={this.state.todos} />);
    }
  }

  onAdd(task){
    console.log('A new task added', task);
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos});
    this.nav.pop();
  }

  onCancel(){
    console.log('Cancelled!');
    this.nav.pop();
  }

  render() {
    return (<Navigator
        initialRoute={{name: 'tasklist', index: 0}}
        ref={((nav) => {this.nav = nav})}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.sceneConfig}
      />);
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('main', () => PluralTodo);
