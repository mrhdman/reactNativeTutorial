import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 100, height: 500, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 500, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 500, backgroundColor: 'blue'}} />
      </View>
    )
  }
}