import React, { Component } from 'react';
import {  StyleSheet, Text, View, FlatList} from 'react-native';


//flat list rows:
const rows = [
  {id: 0, text: 'name'},
  {id: 1, text: 'Email'},
  {id: 2, text: 'Birth Date'},
  {id: 3, text: 'Github Profile'},
  {id: 4, text: 'Cmpany'},
  {id: 5, text: 'Works'},
]

//extract the key
const extractKey = ({id}) => id.toString();

export default class App extends Component {

  //render list items 
  renderItem = ({item}) => {
    return (
      <Text style = {styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList 
        style = {styles.container}
        data = {rows}
        renderItem = {this.renderItem}
        keyExtractor = {extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  row: {
    flex: 1,
    marginBottom: 3,
    padding: 20,
    backgroundColor: 'skyblue',
  },

  
})