import * as  THREE from 'three';
import  { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const canvas = document.getElementById('canvas');

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000)
camera.position.z = 5;
  
//3. object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00, emissive: "#458585" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: 0x00fe00, wireframe: true ,side: THREE.DoubleSide});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.y = -1.5;
scene.add(boxMesh);

// 4. Light
const light = new THREE.PointLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//  5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

  
// 6. Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enableDamping = true;
controls.enablePan = true;

// 7. Animation
const animate = () => {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  
  controls.update();
  renderer.render(scene, camera);

};
animate();

// 8.Handing window resizing 
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});