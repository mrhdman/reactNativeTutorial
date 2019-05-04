import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 150, backgroundColor: 'blue'}} />
        <View style={{height: 10, backgroundColor: 'skyblue'}} />
        <View style={{height: 200, backgroundColor: 'red'}} />
      </View>
    )
  }
}