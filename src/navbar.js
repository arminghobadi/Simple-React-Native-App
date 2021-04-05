import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import { SCREENS } from './enums'

export class Navbar extends React.Component {

  render() {
    const { switchScreen } = this.props
    
    return (
      <View style={styles.container}>
        <Button title='Train our ML' onPress={() => switchScreen(SCREENS.TRAIN)} />
        <Button title='Test our ML' onPress={() => switchScreen(SCREENS.TEST)} />
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'blue',
    width: '100%'
  }
})