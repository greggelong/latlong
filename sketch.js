let foo, foo1
let speakButton
let capture
let img
let cnv
function setup() {
    cnv  = createCanvas(800, 800);
    cnv.parent("button")
	//frameRate(5);
    pixelDensity(1)
	foo = new p5.Speech(); // speech synthesis object
    foo1= new p5.Speech();
    //capture = createCapture(VIDEO,{ flipped:true });
    var constraints = {
        audio: false,
        video: {
          facingMode: {
            exact: "environment"
          }
        }    
        //video: {
          //facingMode: "user"
        //} 
      };
    capture = createCapture(VIDEO,constraints);
    capture.size(400,400);
    capture.hide()
    background(0)
    ellipse(width/2,height/2,100,100)
    
    speakButton = createButton("Speak it");
    speakButton.size(300, 300);
    speakButton.mousePressed(speakit); // callback for speech
    speakButton.parent("buttonholder")
     
}

function draw(){
    image(capture,0,0,800,800)

}

function speakit() {
  
	
		navigator.geolocation.getCurrentPosition(

    // Success callback
    function(position) {
			createP("--------------------------------------------------")
			textSize(42);
            stroke(255)
            fill(255,0,0)
            textStyle(BOLD);
            
            
			text("latitude: " + position.coords.latitude, 5, 100);
			text("longitude: " + position.coords.longitude, 5, 200);
            text("全世界工人联合起来", 5,300)
            foo1.setLang("en-US");
            foo1.speak("latitude: " + position.coords.latitude +",longitude: " + position.coords.longitude)
            
            foo.setLang("zh-CN");
            foo.speak("全世界工人联合起来")

            let snap=createImg(canvas.toDataURL())
            print(snap)
            //createImg(snap,"snap shot")
            snap.parent("sketch-holder")
            print("hello")
            getStreet()

            let txt1 = createP("latitude: " + position.coords.latitude +",longitude: " + position.coords.longitude)
            let txt2 = createP("全世界工人联合起来")
            txt1.parent("sketch-holder")
            txt2.parent("sketch-holder")
            

            
            

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
    let loc = random(["a futuristic city","an ancient monument site in desert","a city on an alien world","on a city floating in outer-space"])
    //img = await createImg("https://image.pollinations.ai/prompt/a%20view%20from%20the%20back%20of%20a%20taxi%20in%20a%20futuristic%20"+loc+"%20with%20a%20cool%20person%20in%20the%20backseat?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
    
    img = await createImg("https://image.pollinations.ai/prompt/three%20workers%20with%20yellow%20helments%20working%20on%20a%20larg%20construction%20site%20in%20"+loc+"?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene");
    //img.position(cx,cy)
   img.parent("sketch-holder")
   //createImg(img,"worker scene")
   
   //cnv.image(img,0,0)
     
  }