import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ListView
} from 'react-native';

import TaskRow from './TaskRow'

var styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start'
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
      </View>
      );
  }
}

TaskList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}