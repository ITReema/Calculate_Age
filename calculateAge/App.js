import React, { Component } from 'react';
import { Text, TextInput, View, TouchableHighlight } from 'react-native';

export default class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    firstValue: '',
    secondValue: '',
    bd: 0
  };
}

yearofbirth = () => {
  const { firstValue, secondValue} = this.state;

  this.setState({
    bd: Number(secondValue) - Number(firstValue)
  });
}

render() {
  return (
    <View>
      <TextInput
        value={this.state.firstValue}
        placeholder="Enter year of birth"
        onChangeText={(firstValue) => this.setState({firstValue})}
      />
      <TextInput
        value={this.state.secondValue}
        placeholder="current year"
        onChangeText={(secondValue) => this.setState({secondValue})}
      />

      <TouchableHighlight onPress={this.yearofbirth}>
        <Text>Calculate Age</Text>
        
      </TouchableHighlight>

      <Text>{`Age:  ${this.state.bd}`}</Text>
    </View>
  );}}
