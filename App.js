import React, { Component } from 'react';
import {  StyleSheet, Text, View, SectionList} from 'react-native';


//flat list rows:
const sections = [
  {
    id: 0,
    title: 'Basic components',
    data: [
      {id: 0, text: 'Image'},
      {id: 1, text: 'Camera'},
      {id: 2, text: 'View'},
      {id: 3, text: 'Text'},
    ]
  },{
    id: 1,
    title: 'Lists',
    data: [
      {id: 4, text: 'Flat'},
      {id: 5, text: 'Section'},
    ]
  }
  
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

  //render Section
  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList 
        style = {styles.container}
        sections={sections}
        renderItem = {this.renderItem}
        renderSectionHeader = {this.renderSectionHeader}
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
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})