import React from 'react';
import { AppRegistry } from 'react-360';
import Moon from './components/Moon';
import Earth from './components/Earth';
import Light from './components/Light';
import MoonLight from './components/MoonLight';
import Hud from './components/HUD';
import Sun from './components/Sun';

import MoonLabel from './components/MoonLabel';
import EarthLabel from './components/EarthLabel';
import SunLabel from './components/SunLabel';




AppRegistry.registerComponent('Moon', () => Moon,console.log('MOON'));
AppRegistry.registerComponent('Light', () => Light);
AppRegistry.registerComponent('Earth', () => Earth);
AppRegistry.registerComponent('MoonLight', () => MoonLight);
AppRegistry.registerComponent('Hud', () => Hud);
AppRegistry.registerComponent('Sun', () => Sun);
AppRegistry.registerComponent('MoonLabel', () => MoonLabel);
AppRegistry.registerComponent('EarthLabel', () => EarthLabel);
AppRegistry.registerComponent('SunLabel', () => SunLabel);