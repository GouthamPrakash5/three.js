import { Selector } from './Selector.js';
import { SidebarMaterial } from './Sidebar.Material.js';
import { SetMaterialValueCommand } from './commands/SetMaterialValueCommand.js';
import { SetPositionCommand } from './commands/SetPositionCommand.js';
import { UIPanel, UIRow } from './libs/ui.js';
// import * as child from 'child_process';

function MenubarRun( editor ) {

	const signals = editor.signals;
	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/run' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Run

	const option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/run/run program' ) );
	
	options.add( option );
	option.onClick(
		function(){

// 			// Get all the geometries from the editor object
// const geometries = Object.values(editor.geometries);

// // Iterate through each geometry and log its type
//  geometries.forEach(geometry => {
//     console.log(geometry.type);
// });



// // Get all the geometries from the editor object
//  const geometries = Object.values(editor.geometries);

// // Initialize an empty string to store the types
// let typesString = '';

// // Iterate through each geometry and append its type to the string
// for (let i = 0; i < geometries.length; i++) {
//     typesString += geometries[i].type + '\n';
// }

// Log the types string outside the loop
// console.log(typesString);


// app.js
{/* <script src="child_process.js"></script> */}
// fetch('hello.js')
//     .then(response => response.arrayBuffer())
//     .then(bytes => WebAssembly.instantiate(bytes, {}))
//     .then(obj => {
//         const { instance } = obj;
//         // Call the exported function to retrieve the output
//         const resultPointer = instance.exports.printMessage();
//         // Convert the result pointer to a string and log it
//         const resultString = new TextDecoder('utf-8').decode(new Uint8Array(instance.exports.memory.buffer, resultPointer));
//         console.log(resultString);
//         // Free the memory allocated for the result
//         instance.exports.free(resultPointer);
//     });







       // console.log(editor.scene.children)
		//   console.log(Object.values(editor.scene.children)[1].rotation)
		const obj = {
			ip: 0,
			user: "user",
			time: 0,
			object: []
		};
		
		for (let i = 0; i < Object.values(editor.geometries).length; i++) {
			obj.object.push({
				name:Object.values(editor.scene.children)[i+1].name,
				type: Object.values(editor.geometries)[i].type,
				position :Object.values(editor.scene.children)[i+1].position,
				rotation: Object.values(editor.scene.children)[i+1].rotation,
				dimension:Object.values(editor.geometries)[	i].parameters,
				material: Object.values(editor.materials)[i].type,
				mag: [0, 0, 0]
			});
		}
		
	// const jsonString = JSON.stringify(obj);
		   console.log(obj);
	
	
	
	// JSON post method
	async function postData(url = "", data = {}) {
		// Default options are marked with *
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
		  "Content-Type": "application/json",
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	  });
	  return response.json(); // parses JSON response into native JavaScript objects
	}
	
	postData("http://127.0.0.1:3000/", obj).then((data) => {
	  console.log(data); // JSON data parsed by `data.json()` call
	});


	
		   // Set up options for the fetch request
		// const options = {
		// 	// mode: 'no-cors', //important
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json' // Set content type to JSON
		// 	},
		// 	body: JSON.stringify(obj) // Convert JSON data to a string and set it as the request body
		// 	};

		// 	// Make the fetch request with the provided options
		// 	fetch('http://127.0.0.1:3000/api/post/', options)
		// 	.then(response => {
		// 		// Check if the request was successful
		// 		console.log(response);
		// 		if (!response.ok) {
		// 		throw new Error('Network response was not ok');
		// 		}
		// 		// Parse the response as JSON
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		// Handle the JSON data
		// 		console.log(data);
		// 	})
		// 	.catch(error => {
		// 		// Handle any errors that occurred during the fetch
		// 		console.error('Fetch error:', error);
		// 	});
	
	// console.log(editor.geometries)
		
	//  console.log(Object.values(editor.geometries)[2].parameters)
	// console.log(Object.values(editor.geometries))
	//   console.log(Object.values(editor.geometries)[1].type)
//  console.log(Object.values(editor.materials)[3].type)
// console.log(editor.strings)
// console.log(editor.materials)


// // JSON to Text file

// // Your JSON object
// // const jsonData = {a: "b", c: "e"};

// // Convert JSON object to a string
// const jsonString = JSON.stringify(obj);

// // Create a Blob from the JSON string
// const blob = new Blob([jsonString], { type: 'text/plain' });

// // Create a link element
// const a = document.createElement('a');
// a.download = 'data.txt'; // File name
// a.href = URL.createObjectURL(blob);
// a.textContent = 'Download JSON';

// // Append the link to the body
// document.body.appendChild(a);

// // Simulate click on the link to trigger download
// // a.click();


// console.log(a)



		}
	);


	return container;

}



export { MenubarRun };
