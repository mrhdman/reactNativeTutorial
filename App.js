import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  OxfordButton() {
    Alert.alert('Oxford, Mississippi.')
  }
  BornButton() {
    Alert.alert('Naples, Florida.')
  }
  NowButton() {
    Alert.alert('Atlanta, Georgia.')
  }
  TexasButton() {
    Alert.alert('Austin, Texas.')
  }

  render() {
    return(
      <View style={StyleSheet.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.OxfordButton}
            title="Where am I from?"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this.BornButton}
            title="Where was I born?"
            color="red"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this.NowButton}
            title="Where do I live now?"
          />
          <Button
            onPress={this.TexasButton}
            title="Where did I live in Texas?"
            color="orange"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});