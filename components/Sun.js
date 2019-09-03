import React from 'react';
import {Text, asset, Image, View} from 'react-360';


export default class Sun extends React.Component {
  render() {
    return (
      <View
        style={{
			display:'flex',
			justifyContent:'center',
			backgroundColor:'blue',
			alignItems:'center',
			width:1000,
			height:600,
            transform: [{translate: [-120, 0, -220]}],
        }}>
		<Image style={{width:800,  transform: [{translate: [0, 0, 0]}], height:800}} source={asset('sun/sun.png')} />
      </View>
    );
  }
}