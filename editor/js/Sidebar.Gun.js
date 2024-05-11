import { UISpan } from './libs/ui.js';

import { SidebarProjectApp } from './Sidebar.Project.App.js';
/* import { SidebarProjectMaterials } from './Sidebar.Project.Materials.js'; */
import { SidebarProjectRenderer } from './Sidebar.Project.Renderer.js';
import { SidebarProjectImage } from './Sidebar.Project.Image.js';
import { SidebarProjectVideo } from './Sidebar.Project.Video.js';
import { SidebarGunParticle } from './Sidebar.Gun.Particle.js';

function SidebarGun( editor ) {

	const container = new UISpan();

	// container.add( new SidebarProjectRenderer( editor ) );

	/* container.add( new SidebarProjectMaterials( editor ) ); */

	container.add( new SidebarGunParticle( editor ) );

	// container.add( new SidebarProjectImage( editor ) );

	// if ( 'SharedArrayBuffer' in window ) {

	// 	container.add( new SidebarProjectVideo( editor ) );

	// }

	return container;

}
export {SidebarGun};