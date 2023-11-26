## 方法说明

* `WebGLRenderingContext.getAttribLocation()` 方法返回了给定WebGLProgram对象中某属性的下标指向位置(存储地址)。

* `WebGLRenderingContext.vertexAttrib[1234]f[v]()` 是 WebGL API 的方法，可以为顶点 attribute 变量赋值。

```javascript
gl.getAttribLocation(program, "attribute_name");
``` 

```javascript
// 设置attribute的坐标为(0.5, 0.5, 0.0)
gl.vertexAttrib1f(a_Position, 0.5, 0.5, 0.0)
```