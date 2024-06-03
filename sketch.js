let foo, foo1
let speakButton
let capture
let img
function setup() {
  createCanvas(800, 800);
	frameRate(5);
    pixelDensity(1)
	foo = new p5.Speech(); // speech synthesis object
    foo1= new p5.Speech();
    capture = createCapture(VIDEO,{ flipped:true });
    capture.size(100,100);
    capture.hide()
    background(0)
    ellipse(width/2,height/2,100,100)
    
    speakButton = createButton("Speak it");
    speakButton.size(100, 100);
    speakButton.mousePressed(speakit); // callback for speech
}

function draw(){
    image(capture,0,0,800,800)

}

function speakit() {
  
	
		navigator.geolocation.getCurrentPosition(

    // Success callback
    function(position) {
			
			textSize(42);
            stroke(255)
            fill(0)
            
            
			text("latitude: " + position.coords.latitude, 5, 100);
			text("longitude: " + position.coords.longitude, 5, 200);
            text("全世界工人联合起来", 5,300)
            foo1.setLang("en-US");
            foo1.speak("latitude: " + position.coords.latitude +",longitude: " + position.coords.longitude)
            
            foo.setLang("zh-CN");
            foo.speak("全世界工人联合起来")

            let snap=canvas.toDataURL()
            print(snap)
            createImg(snap,0,0,800,800)
            getStreet()

            createP("latitude: " + position.coords.latitude +",longitude: " + position.coords.longitude)
            createP("全世界工人联合起来")
            

            
            

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



async function getStreet(){
    /* 
    if (img) {
      img.remove();
      //uncomment to delete old image;
    }
     */
    let loc = random(["city","desert","jungle","tundra","outer-space"])
    //img = await createImg("https://image.pollinations.ai/prompt/a%20view%20from%20the%20back%20of%20a%20taxi%20in%20a%20futuristic%20"+loc+"%20with%20a%20cool%20person%20in%20the%20backseat?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
    
    img = await createImg("https://image.pollinations.ai/prompt/three%20workers%20with%20yellow%20helments%20working%20on%20a%20larg%20construction%20site%20in%20a%20city%20along%20the%20highway?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene");
    //img.position(cx,cy)
   img.parent("sketch-holder")
   
   //cnv.image(img,0,0)
     
  }