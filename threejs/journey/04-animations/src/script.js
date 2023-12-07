import * as THREE from "three";
import gsap from "gsap";

const sizes = {
  width: 800,
  height: 600,
};

const { width, height } = sizes;

// 创建场景
const scene = new THREE.Scene();

// 创建蓝色立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: "blue",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
scene.add(camera);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);

// 借助requestAnimationFrame实现帧渲染
// const tick = () => {
//   mesh.rotation.y += Math.PI * 0.005;
//   renderer.render(scene, camera);
//   requestAnimationFrame(() => {
//     tick();
//   });
// };
// tick();

// 借助时间差解决不同计算机渲染帧率不同导致的问题
// let latestRenderTime = Date.now();
// const tick = () => {
//   const current = Date.now();
//   const timeOffset = current - latestRenderTime;
//   latestRenderTime = current;
//   mesh.rotation.y += Math.PI * 0.001 * timeOffset;
//   renderer.render(scene, camera);
//   requestAnimationFrame(() => {
//     tick();
//   });
// };
// tick();

// 借助THREE.Clock解决不同计算机渲染帧率不同导致的问题
// const clock = new THREE.Clock();
// const tick = () => {
//   const elapedTime = clock.getElapsedTime();
//   // 1s => 2*Math.PI,一秒转动一圈
//   mesh.rotation.y = elapedTime * 2 * Math.PI;
//   renderer.render(scene, camera);
//   requestAnimationFrame(() => {
//     tick();
//   });
// };
// tick();

// 借助函数来实现简单动画
// const clock = new THREE.Clock();
// const tick = () => {
//   const elapedTime = clock.getElapsedTime();
//   camera.position.x = Math.cos(elapedTime);
//   camera.position.y = Math.sin(elapedTime);
//   camera.lookAt(mesh.position);
//   renderer.render(scene, camera);
//   requestAnimationFrame(() => {
//     tick();
//   });
// };
// tick();

// 借助gsap实现动画
gsap.to(mesh.position, {
  delay: 1,
  duration: 1,
  x: 2,
});
gsap.to(mesh.position, {
  delay: 2,
  duration: 1,
  x: 0,
});
const tick = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
