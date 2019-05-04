import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 500, height: 150, backgroundColor: 'blue'}} />
        <View style={{width: 500, height: 150, backgroundColor: 'skyblue'}} />
        <View style={{width: 500, height: 150, backgroundColor: 'red'}} />
      </View>
    )
  }
}