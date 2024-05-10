import * as THREE from 'three';

import { UIDiv, UIRow, UIText, UIInteger, UICheckbox, UINumber } from './libs/ui.js';

import { SetGeometryCommand } from './commands/SetGeometryCommand.js';

function GeometryParametersPanel( editor, object ) {

	const strings = editor.strings;

	const container = new UIDiv();

	const geometry = object.geometry;
	const parameters = geometry.parameters;

	// radiusTop

	const radiusTopRow = new UIRow();
	const radiusTop = new UINumber( parameters.radiusTop ).onChange( update );

	radiusTopRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/radiustop' ) ).setClass( 'Label' ) );
	radiusTopRow.add( radiusTop );

	container.ad
	+
	heightRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/height' ) ).setClass( 'Label' ) );
	heightRow.add( height );

	container.add( heightRow );

	// radialSegments

	const radialSegmentsRow = new UIRow();
	const radialSegments = new UIInteger( parameters.radialSegments ).setRange( 1, Infinity ).onChange( update );

	radialSegmentsRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/radialsegments' ) ).setClass( 'Label' ) );
	radialSegmentsRow.add( radialSegments );

	container.add( radialSegmentsRow );

	// heightSegments

	const heightSegmentsRow = new UIRow();
	const heightSegments = new UIInteger( parameters.heightSegments ).setRange( 1, Infinity ).onChange( update );

	heightSegmentsRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/heightsegments' ) ).setClass( 'Label' ) );
	heightSegmentsRow.add( heightSegments );

	container.add( heightSegmentsRow );

	// openEnded

	const openEndedRow = new UIRow();
	const openEnded = new UICheckbox( parameters.openEnded ).onChange( update );

	openEndedRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/openended' ) ).setClass( 'Label' ) );
	openEndedRow.add( openEnded );

	container.add( openEndedRow );



	// thetastart

	const thetaStartRow = new UIRow();
	const thetaStart = new UINumber( parameters.thetaStart ).onChange( update );

	thetaStartRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/thetastart' ) ).setClass( 'Label' ) );
	thetaStartRow.add( thetaStart );

	container.add( thetaStartRow );




	
	// thetalength

	const thetaLengthRow = new UIRow();
	const thetaLength = new UINumber( parameters.thetaLength ).onChange( update );

	thetaLengthRow.add( new UIText( strings.getKey( 'sidebar/geometry/cylinder_geometry/thetalength' ) ).setClass( 'Label' ) );
	thetaLengthRow.add( thetaLength );

	container.add( thetaLengthRow );








	//

	function update() {

		editor.execute( new SetGeometryCommand( editor, object, new THREE.CylinderGeometry(
			radiusTop.getValue(),
			radiusBottom.getValue(),
			height.getValue(),
			radialSegments.getValue(),
			heightSegments.getValue(),
			openEnded.getValue(),
			thetaStart.getValue (),
			thetaLength.getValue()

		) ) );

	}

	return container;

}

export { GeometryParametersPanel };
