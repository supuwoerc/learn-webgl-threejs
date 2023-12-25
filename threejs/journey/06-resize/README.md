## 方法说明
```javascript
// 添加窗口resize监听
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // 修改相机的宽高比率
  camera.aspect = sizes.width / height;
  // 更新摄像机投影矩阵,在任何参数被改变以后必须被调用
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});
```


```javaceript
// 设置设备的像素比到渲染器,避免HiDPI设备上绘图模糊
renderer.setPixelRatio(window.devicePixelRatio);
// 避免过高的像素比导致渲染卡顿,添加限制
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 添加resize监听
window.addEventListener("resize", () => {
  // 避免双屏移动窗口
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```