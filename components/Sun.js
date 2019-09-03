import React from 'react';
import {Text, asset, Image, View} from 'react-360';


export default class Sun extends React.Component {
  render() {
    return (
      <View
        style={{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			alignItems:'center',
            transform: [ {scaleX: .05 },
				{ scaleY:.05},
				{ scaleZ:.05},{translate: [0,0 , 0]}],
        }}>
		<Image style={{width:1000,  transform: [{translate: [0, 0, 0]}], height:1000}} source={asset('sun/sun.png')} />
      </View>
    );
  }
}