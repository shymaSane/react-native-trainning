import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  state = {
    counter: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({counter: (this.state.counter) + 1})
    }, 1000)
  }

  render() {
    const {counter} = this.state
    return (
      <View style = {styles.container}>
        <Text style ={styles.num1}>{counter}</Text>
        <Text style ={styles.num2}>{counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  num1: {
    color: 'red',
    fontSize: 80
  },
  num2: {
    color: 'blue',
    fontSize: 140
  },
  backGround: {
    backgroundColor: 'black'
  }

})