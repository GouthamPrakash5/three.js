import * as THREE from 'three';

import { zipSync, strToU8 } from 'three/addons/libs/fflate.module.js';

import { UIButton,UISelect, UINumber, UIPanel, UIInput, UIRow, UIText } from './libs/ui.js';

function SidebarGunParticle( editor ) {

	const config = editor.config;
	const signals = editor.signals;
	const strings = editor.strings;

	const save = editor.utils.save;

	const container = new UIPanel();
	container.setId( 'app' );

	const headerRow = new UIRow();
	headerRow.add( new UIText( strings.getKey( 'sidebar/gun/particle' ).toUpperCase() ) );
	container.add( headerRow );

	// Title

	const titleRow = new UIRow();
	const title = new UISelect( config.getKey( 'project/title' ) ).setLeft( '100px' ).setWidth( '150px' ).onChange( function () {

		config.setKey( 'project/title', this.getValue() );

	} );

	titleRow.add( new UIText( strings.getKey( 'sidebar/gun/particle type' ) ).setClass( 'Label' ) );
	titleRow.add( title );

	container.add( titleRow );

	//  position
    

    
	const gunPositionRow = new UIRow();
	const gunPositionX = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );
	const gunPositionY = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );
	const gunPositionZ = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );

	gunPositionRow.add( new UIText( strings.getKey( 'sidebar/gun/position' ) ).setClass( 'Label' ) );
	gunPositionRow.add( gunPositionX, gunPositionY, gunPositionZ );

	container.add( gunPositionRow );



// momentum

const gunMomentumRow = new UIRow();
const gunMomentumX = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );
const gunMomentumY = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );
const gunMomentumZ = new UINumber().setPrecision( 3 ).setWidth( '50px' ).onChange( update );

gunMomentumRow.add( new UIText( strings.getKey( 'sidebar/gun/momentum' ) ).setClass( 'Label' ) );
gunMomentumRow.add( gunMomentumX, gunMomentumY, gunMomentumZ );

container.add( gunMomentumRow );





// Editable

const editableRow = new UIRow();
const editable = new UIInput( config.getKey( 'project/editable' ) ).setLeft( '100px' ).onChange( function () {

    config.setKey( 'project/editable', this.getValue() );

} );

editableRow.add( new UIText( strings.getKey( 'sidebar/gun/energy' ) ).setClass( 'Label' ) );
editableRow.add( editable );

container.add( editableRow );

// no of particles


const numberRow = new UIRow();
const number = new UIInput( config.getKey( 'project/editable' ) ).setLeft( '100px' ).onChange( function () {

    config.setKey( 'project/editable', this.getValue() );

} );

numberRow.add( new UIText( strings.getKey( 'sidebar/gun/number' ) ).setClass( 'Label' ) );
numberRow.add( number );

container.add( numberRow );

 






	// Signals

	signals.editorCleared.add( function () {

		title.setValue( '' );
		config.setKey( 'project/title', '' );

	} );

	return container;

}

function update() {

    const gun = editor.selected;

    if ( gun !== null ) {

        const newPosition = new THREE.Vector3( gunPositionX.getValue(), gunPositionY.getValue(), gunPositionZ.getValue() );
        if ( gun.position.distanceTo( newPosition ) >= 0.01 ) {

            editor.execute( new SetPositionCommand( editor, gun, newPosition ) );

        }
    }



    if ( gun !== null ) {

        const newMomentum = new THREE.Vector3( gunMomentumX.getValue(), gunMomentumY.getValue(), gunMomentumZ.getValue() );
        if ( gun.momentum.distanceTo( newmomentum ) >= 0.01 ) {

            editor.execute( new SetMomentumCommand( editor, gun, newMomentum ) );

        }
    } 
}

export { SidebarGunParticle };