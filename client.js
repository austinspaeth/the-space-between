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

	const sunPanel = new Location([-800,500,600]);
	const moonLocation = new Location([0,0,0]);

	const moonLabelPanel = new Surface(300, 100, Surface.SurfaceShape.Flat);
	moonLabelPanel.setAngle(4.045, -59.972,3);

	const earthLabelPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
	earthLabelPanel.setAngle(.86, -59.692,3.15);

	const sunLabelPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
	sunLabelPanel.setAngle(.54, -59.692,3.15);

  r360.renderToLocation(
    r360.createRoot('Moon'),
    moonLocation
  );
 




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
    r360.createRoot('MoonLabel'),
    moonLabelPanel
  );

  r360.renderToSurface(
    r360.createRoot('EarthLabel'),
    earthLabelPanel
  );

  r360.renderToSurface(
    r360.createRoot('SunLabel'),
    sunLabelPanel
  );




    r360.renderToLocation(
    r360.createRoot('Sun'),
	sunPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('stars/8k.jpg'), { format: '2D'});
}

window.React360 = {init};
