## 方法说明

* 创建方法1
```javascript
// 创建线的材质
const material = new THREE.LineDashedMaterial({ color: "red" });
// 使用向量定义坐标位置
const points = [
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 10, 0),
  new THREE.Vector3(10, 0, 0),
];
// 创建BufferGeometry & 通过setFromPoints设置点的坐标
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
```

* 创建方法2
```javascript
// 创建线的材质
const material = new THREE.LineDashedMaterial({ color: "red" });
// 使用向量定义坐标位置
const points = new Float32Array([-10, 0, 0, 0, 10, 0, 10, 0, 0]);
// 创建BufferGeometry & 通过setAttribute设置点的坐标
const geometry = new THREE.BufferGeometry();
// 对应WebGL中顶点着色器的用法
geometry.setAttribute("position",new THREE.BufferAttribute(points,3))
const line = new THREE.Line(geometry, material);
```