## 方法说明

* 只有顶点着色器才能使用`attribute`属性，片元着色器只能使用uniform变量或者varying变量
* 

```javascript
gl.getAttribLocation(program, "attribute_name");
// 当uniform_name不存在的时候，getUniformLocation将返回null而不是-1
gl.getUniformLocation(program, "uniform_name"); 
``` 

```javascript
    // 片元着色器程序
    var FSHADER_SOURCE =
        'precision mediump float;\n' +   // 指定变量的范围和精度
        'uniform vec4 u_FragColor;\n' +  // 声明u_FragColor
        'void main() {\n' +
        '  gl_FragColor = u_FragColor;\n' + // 设置顶点的颜色
        '}\n';
```

```javascript
    // 获取a_Position对应存储地址
    const a_Position = gl.getAttribLocation(gl.program, "a_Position")
    const a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize")
    const u_FragColor = gl.getUniformLocation(gl.program, "u_FragColor")
    if (a_Position < 0 || a_PointSize < 0 || u_FragColor < 0) {
        console.log("未发现attribute变量或者uniform变量", a_Position, a_PointSize, u_FragColor)
    } else {
        // 传入顶点大小到aa_PointSize
        gl.vertexAttrib1f(a_PointSize, 10.0)
        // 设置清空画布的颜色缓冲区颜色值
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // 清空画布
        gl.clear(gl.COLOR_BUFFER_BIT);
        const gl_points = []
    
        // 声明canvas点击事件回调函数
        function clickHandle(ev, canvas, gl, a_Position) {
            const rect = canvas.getBoundingClientRect();
            const x = ((ev.clientX - rect.left) - canvas.width / 2) / (canvas.width / 2);
            const y = (canvas.height / 2 - (ev.clientY - rect.top)) / (canvas.height / 2);
            let color = [1.0, 0.0, 0.0, 1.0] // 第一象限
            if (x < 0 && y > 0) {
                color = [0.0, 1.0, 0.0, 1.0] // 第二象限
            }
            if (x < 0 && y < 0) {
                color = [0.0, 0.0, 1.0, 1.0] // 第三象限
            }
            if (x > 0 && y < 0) {
                color = [1.0, 1.0, 1.0, 1.0] // 第四象限
            }
            gl_points.push({
                position: [x, y],
                color: color
            })
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl_points.forEach(({position, color}) => {
                const [x, y] = position
                gl.vertexAttrib3f(a_Position, x, y, 0.0)
                gl.uniform4f(u_FragColor, ...color)
                gl.drawArrays(gl.POINTS, 0, 1)
            })
        }
    
        // 画布添加事件
        canvas.addEventListener("click", (ev) => {
            clickHandle(ev, canvas, gl, a_Position)
        })
    }
```

`precision mediump float` 是在着色器中用于声明浮点数精度的语句。它指定了浮点数的精度级别为中等（medium precision）。

在 WebGL（或OpenGL）中，着色器需要对浮点数进行计算，包括顶点着色器和片元着色器。由于不同硬件和图形 API 实现的精度支持可能有所不同，显式地指定浮点数的精度可以确保在不同设备上获得一致的结果。

具体而言，`precision mediump float` 声明了浮点数在着色器中的默认精度。`mediump` 表示中等精度，相对于 `lowp`（低精度）和 `highp`（高精度）而言，它提供了一种平衡，可以在大多数情况下提供足够的精度而不会过度消耗计算资源。

需要注意的是，精度修饰符只适用于浮点数类型，如 `float`、`vec2`、`vec3` 等。它不适用于整数类型。

使用 `precision mediump float` 可以确保浮点数在着色器中以中等精度进行计算，从而在不同设备上获得一致的结果，并在大多数情况下提供足够的精度。然而，具体的精度级别仍受硬件和图形 API 实现的限制，因此在某些情况下可能需要使用更高或更低的精度级别。