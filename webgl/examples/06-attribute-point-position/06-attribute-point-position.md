## 方法说明

* `WebGLRenderingContext.getAttribLocation()` 方法返回了给定WebGLProgram对象中某属性的下标指向位置(存储地址)。

* `WebGLRenderingContext.vertexAttrib[1234]f[v]()` 是 WebGL API 的方法，可以为顶点 attribute 变量赋值。

```javascript
gl.getAttribLocation(program, "attribute_name");
``` 

```javascript
    // 需要绘制的全部点坐标信息
    const gl_points = []
    // 声明canvas点击事件回调函数
    function clickHandle(ev, canvas, gl, a_Position) {
        const rect = canvas.getBoundingClientRect();
        const x = ((ev.clientX - rect.left) - canvas.height / 2) / (canvas.height / 2);
        const y = (canvas.width / 2 - (ev.clientY - rect.top)) / (canvas.width / 2);
        gl_points.push([x, y])  // 添加点击位置的信息到数组
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl_points.forEach(([x, y]) => {
            gl.vertexAttrib3f(a_Position, x, y, 0.0)
            gl.drawArrays(gl.POINTS, 0, 1)
        })
    }
    
    // 画布添加事件
    canvas.addEventListener("click", (ev) => {
        clickHandle(ev, canvas, gl, a_Position)
    })
```

> 为什么要将所有点的信息全部记录在一个数组里，然后每次点击绘制每一个点？似乎在每次点击之前的点都已经绘制过了，
> 为何要再次清空画布之后重新绘制全部点，这样做不是浪费性能嘛？

WebGL的绘制操作是在颜色缓冲区中进行的，绘制结束后才将缓冲区的内容现实到屏幕上，之后缓冲区会自动重置，缓冲区中的内容会
丢失（默认行为），这就是为什么要记录下全部点的信息的原因。