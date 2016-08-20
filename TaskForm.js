import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 3

  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA'
  },
  button: {
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05A5D1'

  },
  cancelButton: {
    backgroundColor: '#667'
  }
});

export default class TaskFrom extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      todo: ''
    }
  }

  onAddPressed(){
    this.props.onAdd(this.text)
  }

  onChange(text){
    this.text = text;
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange.bind(this)} />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed.bind(this)}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
      );
  }
}

TaskFrom.propTypes = {
  onAdd: React.PropTypes.func,
  onCancel: React.PropTypes.func
}