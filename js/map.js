// map.js
// JavaScript File
// Load the AWS SDK for Node.js
var AWS = require(['aws-sdk']);
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'jurassicMap',
  Key: {
    'dinoId': {S: 'raptor1'}
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});


function drawMarker(x, y, radius, color) {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
}

function main() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;

	var canvasOffset = $("#canvas").offset();
	var offsetX = canvasOffset.left;
	var offsetY = canvasOffset.top;

	var background = new Image();
	background.onload = function() {
		canvas.width = background.width;
		canvas.height = background.height;
		ctx.drawImage(background, 0, 0);

	}
	background.src = "img/jpMap_600x750.png";

	drawMarker(100, 200, 5, 'red'); // Raptor 1
	drawMarker(300, 325, 5, 'white'); // Triceratops 1
}