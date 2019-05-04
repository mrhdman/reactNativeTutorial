import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <TextInput
          style={{flex: 9, fontSize: 20, paddingLeft: 10}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          />
          <Text style={{paddingLeft: 10, fontSize: 22}}>
            {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
          </Text>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}