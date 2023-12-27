import * as THREE from "three";
import gsap from "gsap";
import { GUI } from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 初始化调试工具
const gui = new GUI();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const { width, height } = sizes;

// 创建场景
const scene = new THREE.Scene();

// 创建几何形状

// 定义顶点位置
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "red",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 添加调试
gui.add(mesh.position, "x").min(-3).max(3).step(0.01).name("mesh.position.x");
gui.add(mesh.position, "y", -3, 3, 0.01).name("mesh.position.y");
gui.add(mesh, "visible").name("mesh.visible");
gui.add(mesh.material, "wireframe").name("mesh.material.wireframe");
gui.addColor(mesh.material, "color").name("mesh.material.color");
const debugObject = {
  spin: () => {
    gsap.to(mesh.rotation, {
      duration: 2,
      y: mesh.rotation.y + Math.PI * 2,
    });
  },
};
gui.add(debugObject, "spin").name("debugObject.spin");

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
