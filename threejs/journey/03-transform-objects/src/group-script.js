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
const meshA = new THREE.Mesh(geometry, material);
const meshB = new THREE.Mesh(geometry, material);
const meshC = new THREE.Mesh(geometry, material);
meshA.position.set(-1.2, 0, 0);
meshB.position.set(1.2, 0, 0);
meshC.position.set(0, 1.2, 0);
// 创建组
const group = new THREE.Group();
group.add(meshA);
group.add(meshB);
group.add(meshC);

// 作用在group上
group.scale.set(0.5, 0.5, 0.5);
scene.add(group);

// 创建照相机
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
scene.add(camera);
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);
