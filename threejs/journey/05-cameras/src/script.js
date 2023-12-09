import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const sizes = {
  width: 800,
  height: 600,
};

const { width, height } = sizes;

// 创建场景
const scene = new THREE.Scene();

// 创建蓝色立方体
const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
const material = new THREE.MeshBasicMaterial({
  color: "blue",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
// const aspectRatio = width / height;
// const camera = new THREE.OrthographicCamera(
//   -5 * aspectRatio,
//   5 * aspectRatio,
//   5,
//   -5,
//   0.1,
//   100
// );
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 5;
// console.log(camera.position.length());
scene.add(camera);

// 创建控制器
const controls = new OrbitControls(camera, document.querySelector(".webgl"));
// controls.target.y = 2;
controls.enableDamping = true;
controls.dampingFactor = 0.01;
// controls.update();
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);

// 借助鼠标实现相机移动
// const cursor = {
//   x: 0,
//   y: 0,
// };
// window.addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX / width - 0.5;
//   cursor.y = -(e.clientY / width - 0.5);
// });
// const tick = () => {
//   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
//   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
//   camera.position.y = cursor.y * 5;
//   camera.lookAt(mesh.position);
//   renderer.render(scene, camera);
//   requestAnimationFrame(() => {
//     tick();
//   });
// };
// tick();

// 借助轨道控制器完成视角切换
const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
