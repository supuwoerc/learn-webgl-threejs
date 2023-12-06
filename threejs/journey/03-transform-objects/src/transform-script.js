import * as THREE from "three";
// 定义画布大小
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

// 设置位置
// mesh.position.x = 1;
// mesh.position.y = -1;
// mesh.position.z = 1;
// 借助Vector3的set方法
mesh.position.set(1, -1, 1);

// 设置缩放
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// 设置旋转1：rotation
// 修改坐标轴顺序，默认旋转顺序是XYZ
// mesh.rotation.reorder("YXZ");
// readonly rotation: Euler;
// 不建议直接修改，在ts项目中会报错，需要借助方法来调整旋转
// 因为旋始终按照定义好的轴顺序，所以下面两行代码顺序不会影响旋转结果
// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.x = Math.PI * 0.5;

scene.add(mesh);

const length = mesh.position.length();
// 坐标原点到mesh中心点距离
console.log("🚀 ~ file: script.js:21 ~ positionLength:", length);

// 坐标原点到mesh中心点距离
const point = new THREE.Vector3(0, 0, 0);
const distance = mesh.position.distanceTo(point);
console.log("🚀 ~ file: script.js:25 ~ distance:", distance);

// 单位向量
const meshPositionnormalize = mesh.position.normalize();
const normalizeVLength = meshPositionnormalize.length();
console.log("🚀 ~ file: script.js:30 ~ normalizeVLength:", normalizeVLength);

// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 0.2;

// Object3D方法：lookAt
camera.lookAt(mesh.position);
scene.add(camera);

// 创建坐标轴辅助工具
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);
