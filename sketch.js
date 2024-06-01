let foo, foo1
let speakButton
function setup() {
  createCanvas(800, 800);
	frameRate(5);
	foo = new p5.Speech(); // speech synthesis object
    foo1= new p5.Speech();
    speakButton = createButton("Speak it");
    speakButton.size(100, 100);
    speakButton.mousePressed(speakit); // callback for speech
}

function speakit() {
  background(220);
	
		navigator.geolocation.getCurrentPosition(

    // Success callback
    function(position) {
			background(220);
			textSize(32);
            
            
			text("latitude: " + position.coords.latitude, 5, 100);
			text("longitude: " + position.coords.longitude, 5, 200);
            text("全世界工人联合起来", 5,300)
            foo1.setLang("en-US");
            foo1.speak("latitude: " + position.coords.latitude +",longitude: " + position.coords.longitude)
            
            foo.setLang("zh-CN");
            foo.speak("全世界工人联合起来")
            

            
            

        /*
        position is an object containing various information about
        the acquired device location:

        position = {
            coords: {
                latitude - Geographical latitude in decimal degrees.
                longitude - Geographical longitude in decimal degrees. 
                altitude - Height in meters relative to sea level.
                accuracy - Possible error margin for the coordinates in meters. 
                altitudeAccuracy - Possible error margin for the altitude in meters. 
                heading - The direction of the device in degrees relative to north. 
                speed - The velocity of the device in meters per second.
            }
            timestamp - The time at which the location was retrieved.
        }
        */

    },

    // Optional error callback
    function(error){

        /* 
        In the error object is stored the reason for the failed attempt:

        error = {
            code - Error code representing the type of error 
                    1 - PERMISSION_DENIED
                    2 - POSITION_UNAVAILABLE
                    3 - TIMEOUT

            message - Details about the error in human-readable format.
        }
        */

    }
);
	
}