let foo, foo1;
let speakButton;
let capture;
let img;
let cnv;
let mylat;
let mylong;
let mymessage = "全世界工人联合起来";
function setup() {
  cnv = createCanvas(800, 800);
  cnv.parent("button");
  //frameRate(5);
  pixelDensity(1);
  foo = new p5.Speech(); // speech synthesis object
  foo1 = new p5.Speech();
  //capture = createCapture(VIDEO,{ flipped:true });
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment",
      },
    },
    //video: {
    //facingMode: "user"
    //}
  };
  capture = createCapture(VIDEO, constraints);
  capture.size(400, 400);
  capture.hide();
  background(0);
  ellipse(width / 2, height / 2, 100, 100);

  speakButton = createButton("Speak it");
  speakButton.size(300, 300);
  speakButton.mousePressed(speakit2); // callback for speech
  speakButton.parent("buttonholder");
}

function draw() {
  image(capture, 0, 0, 800, 800);
}

function speakit() {
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      mylat = position.coords.latitude;
      mylong = position.coords.longitude;

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
    function (error) {
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
  speakit2()
}

function speakit2() {
  let sp = createP("-----------------------------------");
  sp.parent("sketch-holder");
  textSize(42);
  stroke(255);
  fill(255, 0, 0);
  textStyle(BOLD);
  if(!mylat){
    mylat =39
    mylong=116
  }

  text("latitude: " + mylat, 5, 100);
  text("longitude: " + mylong, 5, 200);
  text("全世界工人联合起来", 5, 300);
  foo1.setLang("en-US");
  foo1.speak("latitude: " + mylat + ",longitude: " + mylong);

  foo.setLang("zh-CN");
  foo.speak("全世界工人联合起来");

  let snap = createImg(canvas.toDataURL(), "snapshot");
  print(snap);
  //createImg(snap,"snap shot")
  snap.parent("sketch-holder");
  print("hello");
  getStreet();

  let txt1 = createP("latitude: " + mylat + ",longitude: " + mylong);
  let txt2 = createP("全世界工人联合起来");
  txt1.parent("sketch-holder");
  txt2.parent("sketch-holder");
}

async function getStreet() {
  /* 
    if (img) {
      img.remove();
      //uncomment to delete old image;
    }
     */
  let loc = random([
    "a futuristic city",
    "an ancient monument site in desert",
    "a city on an alien world",
    "on a city floating in outer-space",
  ]);
  //img = await createImg("https://image.pollinations.ai/prompt/a%20view%20from%20the%20back%20of%20a%20taxi%20in%20a%20futuristic%20"+loc+"%20with%20a%20cool%20person%20in%20the%20backseat?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")

  //img = await createImg("https://image.pollinations.ai/prompt/three%20workers%20with%20yellow%20helments%20working%20on%20a%20larg%20construction%20site%20in%20"+loc+"?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene");
  let prmpts = [
    "https://image.pollinations.ai/prompt/%20workers%20from%20all%20around%20the%20world%20come%20together%20on%20the%20worksite,%20they%20cheer%20and%20are%20joyous%20as%20fireworks%20go%20off%20overhead?width=800&height=800&nologo=true&seed=",
    "https://image.pollinations.ai/prompt/%20workers%20from%20around%20the%20world%20unite,%20each%20one%20with%20a%20flag%20in%20hand%20and%20big%20red%20banner%20which%20reads%20%E2%80%9Cworkers%20of%20the%20world%20unite%E2%80%9D%20on%20a%20construction%20site%20?width=800&height=800&nologo=true&seed=",
    "https://image.pollinations.ai/prompt/%20workers%20from%20around%20the%20world%20unite,%20they%20dance%20around%20a%20building%20site%20holding%20hands%20and%20singing%20into%20megaphones%20?width=800&height=800&nologo=true&seed=",
    "https://image.pollinations.ai/prompt/%20workers%20from%20around%20the%20world%20unite,%20workers%20are%20all%20female%20wearing%20pink%20hard%20hats%20with%20banners%20reading%20%E2%80%9Cwomen%20workers%20unite%E2%80%9D%20on%20the%20building%20site%20?width=800&height=800&nologo=true&seed=",
    "https://image.pollinations.ai/prompt/%20workers%20from%20around%20the%20world%20unite,%20workers%20hold%20babies%20in%20their%20arms.%20They%20are%20high%20up%20on%20girders%20over%20the%20building%20site,%20they%20smile%20and%20point%20into%20the%20distance%20towards%20the%20sunset%20where%20there%20are%20half%20finished%20apartment%20complexes%20under%20construction%20%E2%80%9D%20on%20the%20building%20site%20?width=800&height=800&nologo=true&seed=",
  ];
  img = await createImg(random(prmpts) + floor(random(1026)), "street scene");

  //img.position(cx,cy)
  img.parent("sketch-holder");
  //createImg(img,"worker scene")

  //cnv.image(img,0,0)
}
