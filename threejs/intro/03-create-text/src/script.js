import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
const sizes = {
  width: 800,
  height: 600,
};
const { width, height } = sizes;
const scene = new THREE.Scene();
// 创建文字
const geometry = new TextGeometry("聿", {
  size: 80,
});
const text = new THREE.Text(geometry, material);
scene.add(text);
// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 20;
scene.add(camera);
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
