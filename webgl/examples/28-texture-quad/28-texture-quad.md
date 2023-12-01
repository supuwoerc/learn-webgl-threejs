## 方法说明

* `gl_FragCoord` 是片元着色器的内置变量，包含的坐标信息的x,y分量是基于canvas坐标系的！
* `gl_FragColor` 中分量范围在0-1之间，所以需要除上颜色缓冲区的宽或者高来求出对于数据
* `gl.drawingBufferWidth` 是颜色缓冲区的宽度，`gl.drawingBufferHeight` 是颜色缓冲区的高度

```javascript
    // 顶点着色器程序
    var VSHADER_SOURCE =
        'attribute vec4 a_Position;\n' +  // 声明a_Position
        'attribute vec2 a_TexCoord;\n' +  // 声明a_TexCoord
        'varying vec2 v_TexCoord;\n' +  // 声明a_TexCoord
        'void main() {\n' +
        '  gl_Position = a_Position;\n' +               // 设置顶点的位置，必须设置，由全局变量a_Position赋值
        '  v_TexCoord = a_TexCoord;\n' +               // 传递属性到片元着色器
        '}\n';
    // 片元着色器程序
    var FSHADER_SOURCE =
        'precision mediump float;\n' +     // 指定变量的范围和精度
        'uniform sampler2D u_Sampler;\n' +     // 声明u_Sampler
        'varying vec2 v_TexCoord;\n' +     // 声明v_TexCoord
        'void main() {\n' +
        '  gl_FragColor = texture2D(u_Sampler,v_TexCoord);\n' +
        '}\n';
```
 
```javascript
        // 设置uniform变量
        gl.uniform1f(u_Width, gl.drawingBufferWidth)
        gl.uniform1f(u_Height, gl.drawingBufferHeight)
```