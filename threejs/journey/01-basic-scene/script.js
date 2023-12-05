// 创建场景
const scene = new THREE.Scene();
// 创建红色的立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);
// 添加立方体到场景中
scene.add(mesh);
// 定义画布大小
const sizes = {
  width: 800,
  height: 600,
};
// 创建相机
const { width, height } = sizes;
const camera = new THREE.PerspectiveCamera(75, width / height);
// 移动相机
camera.position.z = 3;
// 添加相机到场景中
scene.add(camera);
// 获取画布元素
const canvas = document.querySelector(".webgl");
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas,
});
// 设置画布渲染尺寸
renderer.setSize(width, height);
// 渲染
renderer.render(scene, camera);
