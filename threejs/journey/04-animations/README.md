## 方法说明

* window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。




## 方法说明
```javascript
let latestRenderTime = Date.now();
const tick = () => {
  const current = Date.now();
  const timeOffset = current - latestRenderTime;
  latestRenderTime = current;
  // 获取上一帧渲染到当前帧的时间差 * 每一帧旋转角度  
  mesh.rotation.y += Math.PI * 0.001 * timeOffset;
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
```

## 方法说明
```javascript
// 借助THREE.Clock解决不同计算机渲染帧率不同导致的问题
const clock = new THREE.Clock();
const tick = () => {
  const elapedTime = clock.getElapsedTime();
  // 1s => 2*Math.PI,一秒转动一圈
  mesh.rotation.y = elapedTime * 2 * Math.PI;
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
```

## 方法说明
```javascript
// 借助函数来实现简单动画
const clock = new THREE.Clock();
const tick = () => {
  const elapedTime = clock.getElapsedTime();
  camera.position.x = Math.cos(elapedTime);
  camera.position.y = Math.sin(elapedTime);
  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    tick();
  });
};
tick();
```

## 方法说明
```javascript
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
```