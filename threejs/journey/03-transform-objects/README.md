## 方法说明

* 继承自Object3D的对象都存在position属性，这是一个三维向量，默认值Vector3(0,0,0)
* Vector3方法length()：计算从(0, 0, 0) 到 (x, y, z)的欧几里得长度 （Euclidean length，即直线长度）
* Vector3方法distanceTo(v)：计算该向量到所传入的v间的距离
* Vector3方法normalize()：将该向量转换为单位向量（unit vector）(归一化)，也就是说，将该向量的方向设置为和原向量相同，但是其长度（length）为1

# 方法说明

* lookAt(vector3)方法是Object3D类提供的一个方法，用于使对象朝向目标点。

相关文档：https://threejs.org/docs/index.html?q=vector3#api/zh/math/Vector3

## 方法说明

* rotate方法使用的旋转轴是物体自身的！
* rotation.reorder方法用于定义旋转顺序

在Three.js中，`rotate`和`quaternion`都是用于旋转对象的方法和属性，但它们在实现上有一些区别。

1. `rotate`方法：`rotate`是一个方法，用于在对象的本地坐标系中应用旋转。它接受一个表示旋转角度的欧拉角参数（以弧度为单位），并将其应用于对象。这意味着旋转是相对于对象自身的局部坐标系进行的。每次调用`rotate`方法时，旋转都会在当前的旋转基础上叠加。

示例使用：

```javascript
object.rotateX(angle); // 绕X轴旋转
object.rotateY(angle); // 绕Y轴旋转
object.rotateZ(angle); // 绕Z轴旋转
```

2. `quaternion`属性：`quaternion`是对象的属性之一，它表示对象的旋转状态。Quaternion是一种四元数表示法，用于存储旋转信息。通过设置对象的`quaternion`属性，您可以直接指定对象的旋转状态，而不是通过应用连续的旋转操作来达到目标状态。Quaternion可以更好地处理复杂的旋转以及避免万向锁等问题。

示例使用：

```javascript
let quaternion = new THREE.Quaternion();
quaternion.setFromAxisAngle(axis, angle); // 使用轴和角度设置四元数
object.quaternion.copy(quaternion); // 将对象的quaternion属性设置为新的四元数
```

总结而言，`rotate`方法用于在对象的本地坐标系中应用旋转，而`quaternion`属性用于直接设置对象的旋转状态。`rotate`方法是基于欧拉角的旋转，而`quaternion`使用四元数表示旋转。在需要复杂旋转或避免旋转问题时，使用`quaternion`更为灵活和准确。