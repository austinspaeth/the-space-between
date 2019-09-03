import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-360';
import Moon from './components/Moon';
import Earth from './components/Earth';
import Light from './components/Light';
import MoonLight from './components/MoonLight';
import Hud from './components/HUD';
import Sun from './components/Sun';

export default class BoldlyGo extends React.Component {
	render() {
		return (
		<View style={styles.panel}>
			<Text>Test</Text>
		</View>
		);
	}
};


const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


AppRegistry.registerComponent('Moon', () => Moon,console.log('MOON'));
AppRegistry.registerComponent('Light', () => Light);
AppRegistry.registerComponent('Earth', () => Earth);
AppRegistry.registerComponent('MoonLight', () => MoonLight);
AppRegistry.registerComponent('Hud', () => Hud);
AppRegistry.registerComponent('Sun', () => Sun);