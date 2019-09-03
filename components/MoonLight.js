import React, { PureComponent } from 'react';
import { asset, View } from 'react-360';
import DirectionalLight from 'DirectionalLight';

export default class MoonLight extends PureComponent {


  render() {
    return (
		<DirectionalLight style={{transform:[
          {rotateX: '90deg' },
          { rotateY: '-45deg'},
          { rotateZ: '0deg'}
        ]}}  intensity={1.25}/>
    );
  }
}