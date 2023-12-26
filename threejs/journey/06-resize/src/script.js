import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
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

camera.position.z = 5;
scene.add(camera);

// 创建控制器&开启阻尼
const controls = new OrbitControls(camera, document.querySelector(".webgl"));
controls.enableDamping = true;
controls.dampingFactor = 0.01;
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 添加resize监听
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  // 避免双屏移动窗口,像素比不同
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
// 监听双击事件设置全屏幕
window.addEventListener("dblclick", () => {
  console.log("fullscreen");
  const webgl = document.querySelector(".webgl");
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    webgl.requestFullscreen();
  }
});
// 借助轨道控制器完成视角切换
const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
