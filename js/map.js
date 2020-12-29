// map.js
// JavaScript File

// Load the AWS SDK for Node.js
// var AWS = require(['aws-sdk']);
// Set the region 
// AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// var params = {
//   TableName: 'jurassicMap',
//   Key: {
//     'dinoId': {S: 'raptor1'}
//   }
// };

// Call DynamoDB to read the item from the table
// ddb.getItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Item);
//   }
// });


function drawMarker(x, y, radius, color) {
	const canvas = document.getElementById('map_canvas');
	const context = canvas.getContext('2d');
	context.lineWidth = 2;
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
}

function main() {
	const canvas = document.getElementById("map_canvas");
	const canvasOffset = $("#map_canvas").offset();
	const offsetX = canvasOffset.left;
	const offsetY = canvasOffset.top;

	const ctx = canvas.getContext("2d");
	const map_img = new Image();
	map_img.src = "img/jpMap_600x750.png";
	canvas.width = map_img.width;
	canvas.height = map_img.height;

	map_img.onload = function() {
		ctx.drawImage(map_img, 0, 0);
		// Draw markers
		drawMarker(173, 281, 5, 'red'); // Raptor 1
		drawMarker(450, 135, 5, 'white'); // Triceratops 1
		drawMarker(249, 250, 5, 'green'); // Vehicle 1
		drawMarker(265, 245, 5, 'green'); // Vehicle 2
	};

}

main();
