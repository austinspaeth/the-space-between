import React from 'react';
import {Text, View} from 'react-360';


export default class Hud extends React.Component {
  render() {
    return (
      <View
        style={{
			display:'flex',
			justifyContent:'flex-end',
			alignItems:'center',
			   layoutOrigin: [0, 0],
			width:1000,
			height:600,
            transform: [{translate: [0, 0, 0]}],
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '900',
            layoutOrigin: [0, 0],
			color:'#fff',
			
         
            transform: [{translate: [0, 0, 0]}],
          }}>
          T H E  S P A C E  B E T W E E N
        </Text>
      </View>
    );
  }
}