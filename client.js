// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Location} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    
	frame: () => {
		const cameraQuat = r360.getCameraQuaternion();
		textPanel.recenter(cameraQuat, 'all'); 
	},
    fullScreen: true,
    ...options,
  });




  // Render your app content to the default cylinder surface
const textPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
const sunPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
const moonLocation = new Location([0,0,0])


  r360.renderToLocation(
    r360.createRoot('Moon'),
    moonLocation
  );
 


sunPanel.renderToLocation([-100,0,0])


   r360.renderToLocation(
    r360.createRoot('Earth'),
    r360.getDefaultLocation(),
  );
 
    r360.renderToLocation(
	r360.createRoot('Light'),
    r360.getDefaultLocation(),
  );

 

    r360.renderToLocation(
	r360.createRoot('MoonLight'),
	r360.getDefaultLocation(),
    
  );


  r360.renderToSurface(
    r360.createRoot('Hud'),
    textPanel,
  );

  r360.renderToSurface(
    r360.createRoot('Sun'),
	sunPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('stars/8k.jpg'), { format: '2D'});
}

window.React360 = {init};
