const calculateStreamer = require('./calculate_streamer_2');

console.log("Within range");
var x = calculateStreamer.countNearScore(1.5, 20, 20, 30, 5);
console.log(x);

var x = calculateStreamer.countNearScore(1.5, 25, 20, 30, 5);
console.log(x);

var x = calculateStreamer.countNearScore(1.5, 30, 20, 30, 5);
console.log(x);

console.log("Close to range");
var x = calculateStreamer.countNearScore(1.5, 19, 20, 30, 5);
console.log(1, x);

var x = calculateStreamer.countNearScore(1.5, 32, 20, 30, 5);
console.log(2, x);

var x = calculateStreamer.countNearScore(1.5, 17, 20, 30, 5);
console.log(3, x);

var x = calculateStreamer.countNearScore(1.5, 34, 20, 30, 5);
console.log(4, x);

console.log("Out range");
var x = calculateStreamer.countNearScore(1.5, 14, 20, 30, 5);
console.log(x);

var x = calculateStreamer.countNearScore(1.5, 35, 20, 30, 5);
console.log(x);

console.log("--500 threshold (avg viewer)");
console.log("Within range");
var x = calculateStreamer.countNearScore(1.5, 1250, 1000, 1500, 300);
console.log(x);

console.log("Close to range");
var x = calculateStreamer.countNearScore(1.5, 900, 1000, 1500, 300);
console.log(1, x);

var x = calculateStreamer.countNearScore(1.5, 1650, 1000, 1500, 300);
console.log(2, x);

var x = calculateStreamer.countNearScore(1.5, 800, 1000, 1500, 300);
console.log(3, x);

var x = calculateStreamer.countNearScore(1.5, 1750, 1000, 1500, 300);
console.log(4, x);

console.log("Out range");
var x = calculateStreamer.countNearScore(1.5, 1801, 1000, 1500, 300);
console.log(x);

var x = calculateStreamer.countNearScore(1.5, 650, 1000, 1500, 300);
console.log(x);
