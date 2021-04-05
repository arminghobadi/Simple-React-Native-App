import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Navbar } from './navbar'

import { Train } from './train'
import { SCREENS } from './enums'



const Main = class Main extends React.PureComponent {
  state = {
    currentScreen: SCREENS.TEST
  }

  async componentDidMount() {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  render() {
    const { image, currentScreen } = this.state
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

    return (
      <View style={styles.container}>
        
        <View style={styles.app_section}>
          {
            currentScreen === SCREENS.TEST && <View><Text>test</Text></View>
          }
          {
            currentScreen === SCREENS.TRAIN && <Train />
          }
          {/* <Button title='armin' onPress={pickImage}></Button>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
        </View>
        
        <View style={styles.navbar_section}>
          <Navbar switchScreen={screen => this.setState({ currentScreen: screen })} />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue'
  },
  navbar_section: {
    height: '10%',
    maxHeight: 100,
    minHeight: 50
  },
  app_section: {
    height: '90%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
})

export { Main };