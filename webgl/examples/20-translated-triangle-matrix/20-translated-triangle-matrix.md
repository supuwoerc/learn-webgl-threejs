## 方法说明

* WebGL和OpenGL一样，矩阵元素是按列主序在数组中的。
* WebGL API 的 WebGLRenderingContext.uniformMatrix[234]fv() 方法为 uniform 变量指定了矩阵值。
该方法的 3 个版本（uniformMatrix2fv()、uniformMatrix3fv() 和 unifomMatrix4fv()），分别以二阶、三阶和四阶方阵作为输入值，它们应是分别具有 4、9、16 个浮点数的数组。
```javascript
   // 顶点着色器程序
   var VSHADER_SOURCE =
           'attribute vec4 a_Position;\n' +  // 声明a_Position
           'uniform mat4 u_xformMatrix;\n' +  // 声明了一个矩阵的uniform变量
           'void main() {\n' +
           '  gl_Position = u_xformMatrix*a_Position;\n' + // 变换矩阵在前！
   '}\n';
```

```javascript
    // 按列主序
    const matrixArray = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        tx, ty, tz, 1.0,
    ])
    // 设置矩阵到uniform变量上
    gl.uniformMatrix4fv(u_xformMatrix, false, matrixArray)
```