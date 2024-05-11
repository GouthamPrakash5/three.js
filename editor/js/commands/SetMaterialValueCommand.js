import { Command } from '../Command.js';

/**
 * @param editor Editor
 * @param object THREE.Object3D
 * @param attributeName string
 *  @param attributeElement string
 * @param newValue number, string, boolean or object
 * @constructor
 */
class SetMaterialValueCommand extends Command {

	constructor( editor, object, attributeName, attributeElement, newValue, materialSlot ) {

		super( editor );

		this.type = 'SetMaterialValueCommand';
		this.name = `Set Material.${attributeName}`;
		this.element = `Set Material.${ attributeElement}`;
		this.updatable = true;

		this.object = object;
		this.materialSlot = materialSlot;

		this.material = this.editor.getObjectMaterial( object, materialSlot );

		this.oldValue = ( this.material !== undefined ) ? this.material[ attributeName ] : undefined;
		this.newValue = newValue;

		this.attributeName = attributeName;
		this.attributeElement = attributeElement ;

	}

	execute() {

		this.material[ this.attributeName ] = this.newValue;
		this.material[ this.attributeElement ] = this.newValue;
		this.material.needsUpdate = true;

		this.editor.signals.objectChanged.dispatch( this.object );
		this.editor.signals.materialChanged.dispatch( this.object, this.materialSlot );

	}

	undo() {

		this.material[ this.attributeName ] = this.oldValue;
		this.material[ this.attributeElement ] = this.oldValue;
		this.material.needsUpdate = true;

		this.editor.signals.objectChanged.dispatch( this.object );
		this.editor.signals.materialChanged.dispatch( this.object, this.materialSlot );

	}

	update( cmd ) {

		this.newValue = cmd.newValue;

	}

	toJSON() {

		const output = super.toJSON( this );

		output.objectUuid = this.object.uuid;
		output.attributeName = this.attributeName;
		output.attributeElement = this.attributeElement;
		output.oldValue = this.oldValue;
		output.newValue = this.newValue;

		return output;

	}

	fromJSON( json ) {

		super.fromJSON( json );

		this.attributeName = json.attributeName;
		this.attributeElement = json.attributeElement;
		this.oldValue = json.oldValue;
		this.newValue = json.newValue;
		this.object = this.editor.objectByUuid( json.objectUuid );

	}

}

export { SetMaterialValueCommand };
