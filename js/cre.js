var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 50;	// Time Between Switch
	 
// Image List
images[0]= '52308115_399121940888605_8458569323579965440_n.jpg' 
images[1]= '52581007_2402802109940323_2715279857834524672_n.jpg'
images[2]= '52605712_340104186609311_725139751153172480_n.jpg'


// Change Image
function changeImg(){
	document.slide.src = images[i];
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;