import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1.25, backgroundColor: 'red'}} />
        <View style={{flex: 8, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}