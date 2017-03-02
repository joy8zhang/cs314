//////////////////////////////////////////////////////////////////
// UBC CPSC 314 (2017_W2)
// Assignment 2:  coding
/////////////////////////////////////////////////////////////////


// SETUP RENDERER AND SCENE
var scene = new THREE.Scene();
var body;
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff); // white background colour
document.body.appendChild(renderer.domElement);

// SETUP CAMERA
var camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000); // view angle, aspect ratio, near, far
camera.position.set(-8,3,10);
camera.lookAt(scene.position);
scene.add(camera);

// SETUP ORBIT CONTROL OF THE CAMERA
var controls = new THREE.OrbitControls(camera);
controls.damping = 0.2;

////////////////////////////////////////////////////////////////////////////////
//  loadOBJ( ):  loads OBJ file vertex mesh, with vertex normals
////////////////////////////////////////////////////////////////////////////////

function loadOBJ(objName, file, material, scale, xOff, yOff, zOff, xRot, yRot, zRot) {
  var onProgress = function(query) {
    if ( query.lengthComputable ) {
      var percentComplete = query.loaded / query.total * 100;
      console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
  };
  var onError = function() {
    console.log('Failed to load ' + file);
  };
  var loader = new THREE.OBJLoader();
  loader.load(file, function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    object.position.set(xOff,yOff,zOff);
    object.rotation.x= xRot;
    object.rotation.y = yRot;
    object.rotation.z = zRot;
    object.scale.set(scale,scale,scale);
    object.name = objName;
    scene.add(object);

  }, onProgress, onError);
}

////////////////////////////////////////////////////////////////////////////////////
//   resize( ):  adjust camera parameters if the window is resized
////////////////////////////////////////////////////////////////////////////////////

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);
resize();

////////////////////////////////////////////////////////////////////////////////////
//   create the needed objects
////////////////////////////////////////////////////////////////////////////////////

  // FLOOR WITH CHECKERBOARD 

var floorTexture = new THREE.ImageUtils.loadTexture('images/cloud.jpg');
//floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
//floorTexture.repeat.set(10,10);
var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
var floorGeometry = new THREE.PlaneBufferGeometry(10, 10);
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = 0;
floor.rotation.x = Math.PI / 2;
scene.add(floor);

  // LIGHTS:  needed for phong illumination model

var light = new THREE.PointLight(0xFFFFFF);
light.position.x=-70;
light.position.y=100;
light.position.z=70;
scene.add(light);
var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

  // MATERIALS

var brownMaterial = new THREE.MeshPhongMaterial( { 
     ambient: 0x402020, color: 0xf4f142, specular: 0x808080, shininess: 50.0, shading: THREE.SmoothShading });
var whiteMaterial = new THREE.MeshLambertMaterial( { 
     ambient: 0x519CE1, color: 0xC9D9E9, specular: 0x005FB6, shininess: 40.0, shading: THREE.SmoothShading });
     
var pinkMaterial = new THREE.MeshLambertMaterial( { 
     ambient: 0xF290BF, color: 0xF290BF, specular: 0x005FB6, shininess: 40.0, shading: THREE.SmoothShading });
var normalMaterial = new THREE.MeshNormalMaterial();

  // Sphere

/*var sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
var whiteSphere = new THREE.Mesh( sphereGeometry, whiteMaterial );
scene.add( whiteSphere );
whiteSphere.position.set(0,1,0);
*/
  //Cloud
var sphereGeometry1 = new THREE.SphereGeometry( 0.8,32, 32 );

var sphereGeometry2 = new THREE.SphereGeometry( 0.85, 32, 32 );
var sphereGeometry3 = new THREE.SphereGeometry( 0.7, 32, 32 );
var sphereGeometry4 = new THREE.SphereGeometry( 0.9, 32, 32 );
var whiteSphere1 = new THREE.Mesh( sphereGeometry2, whiteMaterial );
var whiteSphere2 = new THREE.Mesh( sphereGeometry1, whiteMaterial );
var whiteSphere3 = new THREE.Mesh( sphereGeometry4, whiteMaterial );
var whiteSphere4 = new THREE.Mesh( sphereGeometry3, whiteMaterial );

scene.add( whiteSphere1 );
scene.add( whiteSphere2 );
scene.add( whiteSphere3 );
scene.add( whiteSphere4 );
whiteSphere1.position.set(0.5,1,0);
whiteSphere2.position.set(2,1,0);
whiteSphere3.position.set(1,1,0.5);
whiteSphere4.position.set(1,1,-0.5);

  //sub cloud1
var sphereGeometry1 = new THREE.SphereGeometry( 0.8,32, 32 );

var sphereGeometry2 = new THREE.SphereGeometry( 0.85, 32, 32 );
var sphereGeometry3 = new THREE.SphereGeometry( 0.7, 32, 32 );
var sphereGeometry4 = new THREE.SphereGeometry( 0.9, 32, 32 );
var whiteSphere1 = new THREE.Mesh( sphereGeometry2, whiteMaterial );
var whiteSphere2 = new THREE.Mesh( sphereGeometry1, whiteMaterial );
var whiteSphere3 = new THREE.Mesh( sphereGeometry4, whiteMaterial );
var whiteSphere4 = new THREE.Mesh( sphereGeometry3, whiteMaterial );

scene.add( whiteSphere1 );
scene.add( whiteSphere2 );
scene.add( whiteSphere3 );
scene.add( whiteSphere4 );
whiteSphere1.position.set(-0.5,3,-3);
whiteSphere2.position.set(-2,3,-3);
whiteSphere3.position.set(-1,3,-3.5);
whiteSphere4.position.set(-1,3,-3.5);

 //sub cloud2
var sphereGeometry1 = new THREE.SphereGeometry( 0.8,32, 32 );

var sphereGeometry2 = new THREE.SphereGeometry( 0.85, 32, 32 );
var sphereGeometry3 = new THREE.SphereGeometry( 0.7, 32, 32 );
var sphereGeometry4 = new THREE.SphereGeometry( 0.9, 32, 32 );
var whiteSphere1 = new THREE.Mesh( sphereGeometry2, whiteMaterial );
var whiteSphere2 = new THREE.Mesh( sphereGeometry1, whiteMaterial );
var whiteSphere3 = new THREE.Mesh( sphereGeometry4, whiteMaterial );
var whiteSphere4 = new THREE.Mesh( sphereGeometry3, whiteMaterial );

scene.add( whiteSphere1 );
scene.add( whiteSphere2 );
scene.add( whiteSphere3 );
scene.add( whiteSphere4 );
whiteSphere1.position.set(2.5,2,3);
whiteSphere2.position.set(4,2,3);
whiteSphere3.position.set(3,2,3.5);
whiteSphere4.position.set(3,2,3.5);

 // subcloud 3
var sphereGeometry1 = new THREE.SphereGeometry( 0.8,32, 32 );

var sphereGeometry2 = new THREE.SphereGeometry( 0.85, 32, 32 );
var sphereGeometry3 = new THREE.SphereGeometry( 0.7, 32, 32 );
var sphereGeometry4 = new THREE.SphereGeometry( 0.9, 32, 32 );
var whiteSphere1 = new THREE.Mesh( sphereGeometry2, whiteMaterial );
var whiteSphere2 = new THREE.Mesh( sphereGeometry1, whiteMaterial );
var whiteSphere3 = new THREE.Mesh( sphereGeometry4, whiteMaterial );
var whiteSphere4 = new THREE.Mesh( sphereGeometry3, whiteMaterial );

scene.add( whiteSphere1 );
scene.add( whiteSphere2 );
scene.add( whiteSphere3 );
scene.add( whiteSphere4 );
whiteSphere1.position.set(-3.5,2,-2);
whiteSphere2.position.set(-4,2,-2);
whiteSphere3.position.set(-3,2,-2.5);
whiteSphere4.position.set(-3,2,-2.5);


 // Wings
 
var wingGeometry = new THREE.TorusKnotGeometry( 0.2, 0.2, 100, 16 );
var wing1 = new THREE.Mesh( wingGeometry,  pinkMaterial );
scene.add(wing1);
wing1.matrixAutoUpdate = false;

var wing2 = new THREE.Mesh( wingGeometry,  pinkMaterial );
scene.add(wing2);
wing2.matrixAutoUpdate = false;

  

  // Leg

var legLength = 0.5;
var legAngle = 30;       // animation parameter
var legGeometry = new THREE.BoxGeometry( 0.1, legLength, 0.1 );

var leg = new THREE.Mesh( legGeometry, normalMaterial );
scene.add( leg );
var legf2 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add( legf2 );
var legb1 = new THREE.Mesh( legGeometry,normalMaterial );
scene.add( legb1 );
var legb2 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add( legb2 );


leg.matrixAutoUpdate = false;
legf2.matrixAutoUpdate = false;
legb1.matrixAutoUpdate = false;
legb2.matrixAutoUpdate = false;



  // Foreleg
var foreLegLength = 0.5;
var legAngle = 30;
var legGeometry = new THREE.BoxGeometry( 0.1, foreLegLength, 0.1 );

var flegf1 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add(flegf1);
flegf1.matrixAutoUpdate = false;

var flegf2 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add(flegf2);
flegf2.matrixAutoUpdate = false;


var flegb1 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add(flegb1);
flegb1.matrixAutoUpdate = false;

var flegb2 = new THREE.Mesh( legGeometry, normalMaterial );
scene.add(flegb2);
flegb2.matrixAutoUpdate = false;

    // Hoove
var hooveGeometry = new THREE.CylinderGeometry( 0, 0.1, 0.2 );

var hoovef1 = new THREE.Mesh( hooveGeometry, normalMaterial );
scene.add(hoovef1);
hoovef1.matrixAutoUpdate = false;

var hoovef2 = new THREE.Mesh( hooveGeometry, normalMaterial );
scene.add(hoovef2);

var hooveb1 = new THREE.Mesh( hooveGeometry, normalMaterial );
scene.add(hooveb1);

var hooveb2 = new THREE.Mesh( hooveGeometry, normalMaterial );
scene.add(hooveb2);


hoovef2.matrixAutoUpdate = false;
hooveb1.matrixAutoUpdate = false;
hooveb2.matrixAutoUpdate = false;

  // Horn
var hornGeometry = new THREE.CylinderGeometry( 0, 0.05, 1 );
var horn = new THREE.Mesh( hornGeometry, brownMaterial );
scene.add(horn);
horn.matrixAutoUpdate = false;
  // Body

loadOBJ('body','horseC/horse_low_poly_torso_with_tail.obj',normalMaterial,1,0,0,0,0,0,0);

//////////////////////////////////////////////////////////////////
// printMatrix():  prints a matrix
//////////////////////////////////////////////////////////////////

function printMatrix(name,matrix) {       // matrices are stored column-major, although matrix.set() uses row-major
    console.log('Matrix ',name);
    var e = matrix.elements;
    console.log(e[0], e[4], e[8], e[12]);
    console.log(e[1], e[5], e[9], e[13]);
    console.log(e[2], e[6], e[10], e[14]);
    console.log(e[3], e[7], e[11], e[15]);
}

//////////////////////////////////////////////////////////////////
// setupBody():  build model Matrix for body, and then its children
//////////////////////////////////////////////////////////////////

var bodyHeight=0.1;
var bodyx = -1;
var bodyRotationX = -5.0*Math.PI/180.0
function setupBody(parentMatrix) {
//  printMatrix("body parent",parentMatrix);
  body.matrix.copy(parentMatrix);     // copy the parent link transformation
  body.matrix.multiply(new THREE.Matrix4().makeTranslation(bodyx,bodyHeight,0));        // post multiply by translate matrix
  body.matrix.multiply(new THREE.Matrix4().makeRotationX(bodyRotationX));      // post multiply by rotation matrix (3 deg rotation)
  
  //-3.0*Math.PI/180.0
  setupLeg(body.matrix); // draw children, i.e., attached objects
  setupLeg2(body.matrix);
  setupLeg3(body.matrix);
  setupLeg4(body.matrix);
  setupHorn(body.matrix);
  setupWing1(body.matrix);
  setupWing2(body.matrix);
  //setupLeg2(body.matrix);
  body.matrix.multiply(new THREE.Matrix4().makeScale(0.3,0.3,0.3));   // post multiply by scale matrix, to scale down body geometry
  body.updateMatrixWorld();         // force update of internal body.matrixWorld
}

//////////////////////////////////////////////////////////////////
// setupHead():  build model Matrix for head
//////////////////////////////////////////////////////////////////

//var legAngle = -15;
var legAngle1 = -15;
var legAngle2 = 15;
var legAngle3 = -15;
var legAngle4 = 15;

var legx = -0.2;
var legy = 1.0;
var legz = 0.5;

var flegAngle1 = -15;
var flegAngle2 = -15;
var flegAngle3 = -15;
var flegAngle4 = -15;


var hornAngle = 50;
var wingAngle = 50;
var cloudAngle = 50;

function setupLeg(parentMatrix) {
//  printMatrix("leg parent",parentMatrix);
  leg.matrix.copy(parentMatrix);     // copy the parent link transformation
  leg.matrix.multiply(new THREE.Matrix4().makeTranslation(legx,legy,legz));              // post multiply by translate matrix
  leg.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle1*Math.PI/180.0));           // post multiply by rotation matrix
  setupForeleg1(leg.matrix);
  leg.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  
  leg.updateMatrixWorld(); // force update of internal body.matrixWorld
}


function setupLeg2(parentMatrix) {
  
  legf2.matrix.copy(parentMatrix);// copy the parent link transformation
  legf2.matrix.multiply(new THREE.Matrix4().makeTranslation(0.2,1.0,0.5));              // post multiply by translate matrix
  legf2.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle2*Math.PI/180.0));           // post multiply by rotation matrix
  
  legf2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  
  setupForeleg2(legf2.matrix);
  legf2.updateMatrixWorld();
  }
  
function setupLeg3(parentMatrix) {
  
  legb1.matrix.copy(parentMatrix);// copy the parent link transformation
  legb1.matrix.multiply(new THREE.Matrix4().makeTranslation(-0.2,1.0,-0.5));              // post multiply by translate matrix
  legb1.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle3*Math.PI/180.0));           // post multiply by rotation matrix
  
  legb1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  
  setupForeleg3(legb1.matrix);
  legb1.updateMatrixWorld();
  }
  
function setupLeg4(parentMatrix) {
  
  legb2.matrix.copy(parentMatrix);// copy the parent link transformation
  legb2.matrix.multiply(new THREE.Matrix4().makeTranslation(0.2,1.0,-0.5));              // post multiply by translate matrix
  legb2.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle4*Math.PI/180.0));           // post multiply by rotation matrix
  
  legb2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  
  setupForeleg4(legb2.matrix);
  legb2.updateMatrixWorld();
  }

  
  //setup forelegs
  
function setupForeleg1(parentMatrix){
  flegf1.matrix.copy(parentMatrix);// copy the parent link transformation
  flegf1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5,0));              // post multiply by translate matrix
  flegf1.matrix.multiply(new THREE.Matrix4().makeRotationX(flegAngle1*Math.PI/180.0));           // post multiply by rotation matrix
  flegf1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  setupHoovef1(flegf1.matrix);
  flegf1.updateMatrixWorld();
  }
  
function setupForeleg2(parentMatrix){
  flegf2.matrix.copy(parentMatrix);// copy the parent link transformation
  flegf2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  flegf2.matrix.multiply(new THREE.Matrix4().makeRotationX(flegAngle2*Math.PI/180.0));           // post multiply by rotation matrix
  flegf2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  setupHoovef2(flegf2.matrix);
  flegf2.updateMatrixWorld();
  }
  
function setupForeleg3(parentMatrix){
  flegb1.matrix.copy(parentMatrix);// copy the parent link transformation
  flegb1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  flegb1.matrix.multiply(new THREE.Matrix4().makeRotationX(flegAngle3*Math.PI/180.0));           // post multiply by rotation matrix
  flegb1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  setupHooveb1(flegb1.matrix);
  flegf1.updateMatrixWorld();
  }
  
function setupForeleg4(parentMatrix){
  flegb2.matrix.copy(parentMatrix);// copy the parent link transformation
  flegb2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  flegb2.matrix.multiply(new THREE.Matrix4().makeRotationX(flegAngle4*Math.PI/180.0));           // post multiply by rotation matrix
  flegb2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*legLength,0));              // post multiply by translate matrix
  setupHooveb2(flegb2.matrix);
  flegb2.updateMatrixWorld();
  }
  
  //setup hooves
  
function setupHoovef1(parentMatrix){
  hoovef1.matrix.copy(parentMatrix);// copy the parent link transformation
  hoovef1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  hoovef1.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle*Math.PI/180.0));           // post multiply by rotation matrix
  hoovef1.updateMatrixWorld();
  }

function setupHoovef2(parentMatrix){
  hoovef2.matrix.copy(parentMatrix);// copy the parent link transformation
  hoovef2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  hoovef2.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle*Math.PI/180.0));           // post multiply by rotation matrix
  hoovef2.updateMatrixWorld();
  }

function setupHooveb1(parentMatrix){
  hooveb1.matrix.copy(parentMatrix);// copy the parent link transformation
  hooveb1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
   
  hooveb1.matrix.multiply(new THREE.Matrix4().makeRotationX(legAngle*Math.PI/180.0));           // post multiply by rotation matrix
 
  hooveb1.updateMatrixWorld();
  }
  
  function setupHooveb2(parentMatrix){
  hooveb2.matrix.copy(parentMatrix);// copy the parent link transformation
  hooveb2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.25,0));              // post multiply by translate matrix
  hooveb2.updateMatrixWorld();
  }
  
  
//////////////////////////////////
//Extra///////////////////
///////////////////////////////////
  //Horn
function setupHorn(parentMatrix){
  horn.matrix.copy(parentMatrix);// copy the parent link transformation
  horn.matrix.multiply(new THREE.Matrix4().makeTranslation(0,2,1.3));              // post multiply by translate matrix
  horn.matrix.multiply(new THREE.Matrix4().makeRotationX(hornAngle*Math.PI/180.0));
  horn.updateMatrixWorld();
}
 //Wing 
function setupWing1(parentMatrix){
  wing1.matrix.copy(parentMatrix);// copy the parent link transformation
  wing1.matrix.multiply(new THREE.Matrix4().makeTranslation(-0.5,1.5,0));              // post multiply by translate matrix
  wing1.matrix.multiply(new THREE.Matrix4().makeRotationX(wingAngle*Math.PI/180.0));
  wing1.updateMatrixWorld();
}

function setupWing2(parentMatrix){
  wing2.matrix.copy(parentMatrix);// copy the parent link transformation
  wing2.matrix.multiply(new THREE.Matrix4().makeTranslation(0.5,1.5,0));              // post multiply by translate matrix
  wing2.matrix.multiply(new THREE.Matrix4().makeRotationX(wingAngle*Math.PI/180.0));
  wing2.updateMatrixWorld();
}


//////////////////////////////////////////////////////////////////
// updateWorld():  update all degrees of freedom, as needed, and recompute matrices
//////////////////////////////////////////////////////////////////

var clock = new THREE.Clock(true);

function updateWorld() {
  var modelMatrix = new THREE.Matrix4();
  modelMatrix.identity();
    // only start the matrix setup if the 'body' object has been loaded
  if (body != undefined) {   
    setupBody(modelMatrix);
  }
}

//////////////////////////////////////////////////////////////////
//  checkKeyboard():   listen for keyboard presses
//////////////////////////////////////////////////////////////////

var keyboard = new THREEx.KeyboardState();
var mode = 0;
function checkKeyboard() {
   body = scene.getObjectByName( 'body' );
   if (body != undefined) {
     body.matrixAutoUpdate = false;
   }

  for (var i=0; i<6; i++)
  {
    if (keyboard.pressed(i.toString()))
    {
      mode = i;
      break;
    }
  }
  switch(mode)
  {
    //add poses here:
   
    case 1:  {   // pose
      headAngle = -20;
      bodyRotationX = 30;
      legAngle3 = 140;
      legAngle4 = 40;
      legAngle2 = -80;
      flegAngle1 = -150;
      flegAngle4 =90;
      //flegAngle2 = 100;
      bodyHeight = 1.1;
      break;
      }
    case 2: {     // pose 
      headAngle = 30;
      legAngle2 = -80;
      legAngle = -10;
      legAngle1 = -80;
      legAngle3 = 80;
      legAngle4 = 80;
      bodyx = 1;
      bodyHeight = 0.8;
      break;
      }
    case 3: {
      headAngle = 0;
      flegAngle1 = -100;
      flegAngle2 = -115;
      flegAngle3 = -30;
      flegAngle4 = -30;
      legAngle4 = 30;
      legAngle3 = 30;
      bodyx = 1;
      bodyRotationX = -50;
      bodyHeight = 1.5;
      break;  
    }
  
    case 4:      {     // animation
        var t = clock.getElapsedTime();
        legAngle1 = 50*Math.sin(6*t)+20;
        flegAngle1 = 30*Math.sin(6*t)+10;
        
        legAngle2 = 50*Math.cos(6*t)+10;
        flegAngle2 = 30*Math.sin(6*t)+10;
        
        legAngle3 = 50*Math.sin(6*t)+20;
        flegAngle3 = 30*Math.sin(6*t)+10;
        
        legAngle4 = 50*Math.cos(6*t)+10;
        flegAngle4 = 30*Math.sin(6*t)+10;
        
        wingAngle = -50*Math.sin(6*t);3
       
        
        bodyx = 2*Math.cos(t)-2.25;
        bodyHeight = 1*Math.sin(6*t)+0.75;
        
      }
 
      camera.matrixAutoUpdate = true;
      break;
    case 4:
      break;
    default:
      break;
  }
}

//////////////////////////////////////////////////////////////////
//  update()
//////////////////////////////////////////////////////////////////

function update() {
  checkKeyboard();
  updateWorld();
  requestAnimationFrame(update);     // this requests the next update call
  renderer.render(scene, camera);
}

update();     // launch an infinite drawing loop
