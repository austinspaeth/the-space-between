import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Earth extends PureComponent {


  render() {
    return (
      <Entity source={{gltf2: asset('earth/scene.gltf')}} style={{transform:[
          {translate: [-80, 0, 85]},
          {scaleX: 2 },
          { scaleY: 2},
          { scaleZ: 2}
        ]}} />
    );
  }
}