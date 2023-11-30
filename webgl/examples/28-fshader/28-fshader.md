## 方法说明

* `gl_FragCoord` 是片元着色器的内置变量，包含的坐标信息的x,y分量是基于canvas坐标系的！
* `gl_FragColor` 中分量范围在0-1之间，所以需要除上颜色缓冲区的宽或者高来求出对于数据
* `gl.drawingBufferWidth` 是颜色缓冲区的宽度，`gl.drawingBufferHeight` 是颜色缓冲区的高度

```javascript
        // 片元着色器程序
        var FSHADER_SOURCE =
            'precision mediump float;\n' +     // 指定变量的范围和精度
            'uniform float u_Width;\n' +     // 声明u_Width
            'uniform float u_Height;\n' +  // 声明u_Height
            'void main() {\n' +
            '  gl_FragColor = vec4(gl_FragCoord.x/u_Width,0.0,gl_FragCoord.y/u_Height,1.0);\n' + // 设置顶点的颜色
            '}\n';
```
 
```javascript
        // 设置uniform变量
        gl.uniform1f(u_Width, gl.drawingBufferWidth)
        gl.uniform1f(u_Height, gl.drawingBufferHeight)
```