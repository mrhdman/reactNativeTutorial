import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'O'},
            {key: 'OX'},
            {key: 'OXF'},
            {key: 'OXFO'},
            {key: 'OXFOR'},
            {key: 'OXFORD'},
            {key: 'OXFORD,'},
            {key: 'OXFORD,M'},
            {key: 'OXFORD,Mi'},
            {key: 'OXFORD,Mis'},
            {key: 'OXFORD,Miss'},
            {key: 'OXFORD,Missi'},
            {key: 'OXFORD,Missis'},
            {key: 'OXFORD,Mississ'},
            {key: 'OXFORD,Mississi'},
            {key: 'OXFORD,Mississip'},
            {key: 'OXFORD,Mississipp'},
            {key: 'OXFORD,Mississippi'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 30,
    height: 44,
  },
})