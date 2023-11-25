## 方法说明

要想 WebGL 绘制图像就必须使用着色，示例中存在两个着色器，顶点着色器程序：`VSHADER_SOURCE`和片元着色器程序：`FSHADER_SOURCE`，
两个着色器的代码都是使用字符串初始化

> 顶点着色器：用来描述顶点特性（例如位置，大小）的程序，顶点（vertex）是指二维或者三维图形的端点或者交点

```javascript
    var VSHADER_SOURCE =
        'void main() {\n' +
        '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' + // Set the vertex coordinates of the point
        '  gl_PointSize = 10.0;\n' +                    // Set the point size
        '}\n';
```

> 片元着色器：进行逐片元处理的程序（例如光照），片元是可以理解为像素（图像的单元，片元包括这个像素的位置、颜色和其他信息）

```javascript
    var FSHADER_SOURCE =
        'void main() {\n' +
        '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color
        '}\n';
```

`vec4`表示由四个浮点数组成的矢量，由4个分量组成的矢量被称为齐次坐标，它能够提高处理三维数据的效率，所以被大量使用

> 齐次坐标：（x,y,z,w）。齐次坐标（x,y,z,w）等价于三维坐标（x/w,y/w,z/w）。
所以如果齐次坐标的第四个分量是1，你就可以将它当做单位坐标来使用。w的值必须大于等于0的。
如果w趋近于0，那么它所表示的点将趋近于无穷远，所以在齐次坐标系中可以有无穷的概念。
齐次坐标的存在，似的用矩阵乘法来描述顶点变换成为可能，三维图形系统在计算过程中，通常使用齐次坐标来表示顶点的三维坐标。

`WebGLRenderingContext.drawArrays()` 方法用于从向量数组中绘制图元
> MDN文档链接：[drawArrays](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays)

```javascript
void gl.drawArrays(mode, first, count);
```