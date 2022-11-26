import React  from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity } from 'react-native';
export default function Article({route, navigation, navigation: { goBack }}) {
  

  const { name, type, weather } = route.params;
  var str ='<';
  return (
    
    <View style={{ flex: 1 }}>
      <View style={styles.bruh}>
        
        <Text style={[styles.title, {textAlign: 'center'}]}>{name} </Text>
        
    </View>
      
  
      <View style={{ flex: 1,paddingTop:15, paddingBottom: 80, height: 600}}>
        <Text style={[styles.title2, {paddingHorizontal:40}]}>Type: {type} </Text>
        <Text style={[styles.title2, {paddingHorizontal:40}]}>Weather: {weather} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bruh: {
    backgroundColor: 'blue',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#276FBF',
    paddingTop: 20
  },
  headerLogo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    fontWeight: '300',
    fontSize: 26,
    marginVertical: 10,
    color: 'white'
  },
  title2: {
    fontWeight: '300',
    fontSize: 26,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: 'black'
  },
  titleType: {
    fontWeight: '300',
    fontSize: 26,
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems:'center',
    color: 'white'
  },
  titleWeather: {
    fontWeight: '300',
    fontSize: 26,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems:'right',
    color: 'white'
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'blue'
  },
});