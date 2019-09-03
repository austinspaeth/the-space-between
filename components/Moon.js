import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Moon extends PureComponent {
  render() {
    return (
      <Entity source={{gltf2: asset('moon/scene.gltf')}} style={{transform:[
          {translate: [30, 0, -35]},
          {scaleX: 1 },
          { scaleY: 1},
          { scaleZ: 1}
        ]}} />
    );
  }
}