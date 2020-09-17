//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;
let controls;
let loader;

function init() {
  container = document.querySelector(".scene");
  
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  //Create scene
  scene = new THREE.Scene();
  //Camera setup
  camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.2, 10000);
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  camera.position.set(0, 0, 10);
  controls.update();

  // const ambient = new THREE.AmbientLight(0x404040, 1);
  // ambient.position.set(-5, 10, 1);
  // scene.add(ambient);

  // const light = new THREE.DirectionalLight(0xffffff, 1.5);
  // light.position.set(0, 20, 10);
  // scene.add(light);



  directionalLight = new THREE.DirectionalLight(0xffffff,10);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(0xc4c4c4,1);
  light.position.set(0,300,500);
  scene.add(light);
  light2 = new THREE.PointLight(0xc4c4c4,1);
  light2.position.set(500,100,0);
  scene.add(light2);
  light3 = new THREE.PointLight(0xc4c4c4,1);
  light3.position.set(0,100,-500);
  scene.add(light3);
  light4 = new THREE.PointLight(0xc4c4c4,1);
  light4.position.set(-500,300,500);
  scene.add(light4);







  
  container.appendChild(renderer.domElement);

  //Load Model
  loader = new THREE.GLTFLoader();
  loader.load("./name/scene.gltf", function(gltf) { //папка с объектом gltf
    house = gltf.scene.children[0];
    house.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  // house.rotation.x += 0.001;
  // house.rotation.y += 0.001;
  // house.rotation.z += 0.001;

  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
