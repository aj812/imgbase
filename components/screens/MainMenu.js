import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Button,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,
  Alert,
  TextInput,
  List,
  FlatList,
  ListItem,
    } from 'react-native';
import { Constants } from 'expo';


import { getTheme } from 'react-native-material-kit';



export default class MainMenu extends Component {
  static navigationOptions = {
    title: 'Main Menu',
  }
  constructor(props) {
    super(props);

    this.state = {  };

    }


  render() {

    const theme = getTheme();
    const { navigate } = this.props.navigation;

    return (


      <View style={ styles.maincontainer }>

        <FlatList
          data={[{ link: <Button title={'Search imgBase'} onPress={()=> navigate('ImgBaseList')} />, key: '1' },
                 { link: <Button title={'Tag New Photos'} onPress={()=> navigate('CameraPhotosList')} />, key: '2' },
               ]}
          renderItem={ ({item}) => <View> {item.link} </View>}
        />

   </View>

)}
}

const styles = StyleSheet.create({
  maincontainer: {
      top: 10,
    }
});
