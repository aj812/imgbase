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
    } from 'react-native';
import { Constants } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ViewPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addedTags: ''
     };

    this._onImgPress = this._onImgPress.bind(this);
    this.removeActive = this.removeActive.bind(this);
    }

  _onImgPress() {
      // add img objs to active array in PhotosList state
      this.props.updateActiveArr(this.props.resphoto);
    }

    removeActive() {
      // clear active state and tags, run props func to rm from active array
      console.log('Remove clicked')
      this.setState({
        isActive: false,
        addedTags: ''
      })
      // props func to rm from activePhotos
      this.props.removeFromActiveArr(this.props.resphoto.image.filename)
    }

  renderLargeView() {

  }


  render() {

    return (

      <TouchableHighlight
        onPress={this._onImgPress}
        key={this.props.resphoto.image.filename} >

            <View style={ styles.imgContainer } >

                    <Image
                      key={this.props.resphoto.image.filename}
                      source={this.props.resphoto.image}
                      resizeMode="contain"
                      style={ styles.resimg }
                    />


                    {this.props.activePhotos.map(statephoto => {
                      if (statephoto.image.filename === this.props.resphoto.image.filename) { this.state.isActive = true }
                    }) }

                    { this.state.isActive && !this.props.fromImgbase
                      ? <Text name="removeactive" onPress={this.removeActive} style={ styles.removeactive } > X </Text>
                      : this.state.isActive }

                    { this.state.isActive && !this.props.fromImgbase
                      ? <TextInput value={this.state.addedTags} name="addtags" onChangeText={(text) => {this.setState({addedTags: text}); this.props.updateTags(this.props.resphoto.image.filename, text)}} placeholder={'Add Tags'} style={ styles.tagsbox } numberOfLines={4}/>
                      : this.state.isActive }


                </View>

          </TouchableHighlight>

)}
}

const styles = StyleSheet.create({
  removeactive: {
    zIndex: 50,
    width: 20,
    height: 20,
    // backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    top: 20,
    right: 20,
    position: 'absolute',
  },
  tagsbox: {
    maxWidth: 300,
    marginLeft: 30,
    marginTop: 15,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: 'white',
    height: 30,
  },
  imgContainer: {
    width: 360,
    // display: 'block',
    // display: 'flex',
    marginTop: 20,
    marginLeft: wp('8%'),
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 15,
  },
  touchable: {
    // backgroundColor: 'red',

  },
  resimg: {
    height: 320,
    width: 250,
    resizeMode: 'contain',
    // display: 'flex',
    marginTop: 10,
    marginLeft: 0,
    padding: '50%',
  },
  container: {
    // flex: 1,
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
