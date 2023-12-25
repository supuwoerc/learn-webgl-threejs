## 方法说明
```javascript
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / width - 0.5;
  cursor.y = -(e.clientY / width - 0.5);
});

// 借助鼠标实现相机移动
const tick = () => {
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * 5;
  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
```
```javascript
// 创建控制器
const controls = new OrbitControls(camera, document.querySelector(".webgl"));
controls.target.y = 2;
controls.update();
```

```javascript
// 开启阻尼
controls.enableDamping = true;
// 设置阻尼系数
controls.dampingFactor = 0.01;


// 借助轨道控制器完成视角切换
const tick = () => {
  controls.update();   // 开启阻尼后需要在每一帧更新controls
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
```