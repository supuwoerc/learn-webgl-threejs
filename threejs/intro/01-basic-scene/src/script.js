import * as THREE from "three";
console.log(1);
const sizes = {
  width: 800,
  height: 600,
};
const { width, height } = sizes;
const scene = new THREE.Scene();
// 创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "lightblue",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 5;
scene.add(camera);
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
const clock = new THREE.Clock();
const tick = () => {
  mesh.rotation.y = clock.getElapsedTime();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
