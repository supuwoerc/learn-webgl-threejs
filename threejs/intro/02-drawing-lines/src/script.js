import * as THREE from "three";
const sizes = {
  width: 800,
  height: 600,
};
const { width, height } = sizes;
const scene = new THREE.Scene();
// 创建顶点连线
const material = new THREE.LineDashedMaterial({ color: "red" });
// 方式1
// const points = [
//   new THREE.Vector3(-10, 0, 0),
//   new THREE.Vector3(0, 10, 0),
//   new THREE.Vector3(10, 0, 0),
// ];
// const geometry = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line(geometry, material);
// scene.add(line);
// 方式2
const points = new Float32Array([-10, 0, 0, 0, 10, 0, 10, 0, 0]);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
const mesh = new THREE.Line(geometry, material);
scene.add(mesh);
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
