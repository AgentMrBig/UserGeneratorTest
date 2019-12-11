import React from 'react';
import * as THREE from 'three';

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  let threeJSDiv = document.getElementById('3js');

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  animate();
}
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();

const ThreejsSpaceBG = props => {
  return <div id="3js"></div>;
};

export default ThreejsSpaceBG;
