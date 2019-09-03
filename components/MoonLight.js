import React, { PureComponent } from 'react';
import { asset, View } from 'react-360';
import DirectionalLight from 'DirectionalLight';

export default class MoonLight extends PureComponent {


  render() {
    return (
		<DirectionalLight style={{transform:[
          {rotateX: '90deg' },
          { rotateY: '-20deg'},
          { rotateZ: '0deg'}
        ]}}  intensity={2.5}/>
    );
  }
}