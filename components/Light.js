import React, { PureComponent } from 'react';
import { asset, View } from 'react-360';
import AmbientLight from 'AmbientLight';

export default class Light extends PureComponent {


  render() {
    return (
		<AmbientLight intensity={.1}/>
    );
  }
}