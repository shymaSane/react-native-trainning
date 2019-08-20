import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.seq1}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Life Is Cool</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  seq1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderStyle: 'dotted',
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 0.5
  }
})