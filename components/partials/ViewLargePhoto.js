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
  TextInput
    } from 'react-native';
import { Constants } from 'expo';

export default class ViewLargePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {  };

    this._onImgPress = this._onImgPress.bind(this);
    }

  _onImgPress(e) {
      console.log(e.target);
      Alert.alert(`TouchableHighlight working (${e.target})`);
    }

  render() {
    console.log(this.props);
    // let { photo } = this.props.resphoto;

    return (


         <TouchableHighlight onPress={this._onImgPress} key={this.props.resphoto.image.filename} >
          <View style={ styles.imgContainer }>
                  <Image
                    key={this.props.resphoto.image.filename}
                    source={this.props.resphoto.image}
                    resizeMode="contain"
                    style={ styles.resimg }
                  />
                  <TextInput value={'TextInput'} style={ styles.textarea } numberOfLines={4}/>
              </View>
          </TouchableHighlight>

)}
}

const styles = StyleSheet.create({
  textarea: {
    maxWidth: 320,
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  imgContainer: {
    width: 400,
    display: 'block',
    display: 'flex',
    marginTop: 20,
    marginLeft: 4,
    borderWidth: 1,
    borderRadius: 20,
  },
  touchable: {
    // backgroundColor: 'red',

  },
  resimg: {
    height: 320,
    width: 250,
    resizeMode: 'contain',
    display: 'flex',
    marginTop: 10,
    marginLeft: 0,
    padding: '50%',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
