import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import TaskRow from './TaskRow'

var styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start'
  },

  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: '600'
  }
});

export default class TaskList extends React.Component{
  constructor(props, context){
    super(props, context);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => { r1 !== r2 }
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos)
    }
  }

  componentWillReceiveProps(nextProps){
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource });
  }

  renderRow(todo){
    return (<TaskRow todo={todo}/>);
  }

  render(){
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

        <TouchableHighlight
          onPress={this.props.onPressStarted}
          style={styles.button}>
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
      );
  }
}

TaskList.propTypes = {
  onPressStarted: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}