## 方法说明

* `WebGLRenderingContext.bindBuffer()` 方法将给定的 WebGLBuffer 绑定到目标。
* `WebGLRenderingContext.bufferData()` 方法创建并初始化了 Buffer 对象的数据存储区。
* `WebGLRenderingContext.vertexAttribPointer()` 方法将绑定到gl.ARRAY_BUFFER的缓冲区对象分配到参数1指定的attribute变量

```javascript
    function initVertexBuffers(gl, a_Position) {
        // 设置顶点坐标
        const vertices = new Float32Array([
            0.5, 0.5, -0.5, 0.5, 0.0, -0.5
        ])
        // 创建缓冲区对象
        const vertexBuffers = gl.createBuffer()
        if (!vertexBuffers) {
            console.log("createBuffer创建缓冲区对象失败")
            return -1
        }
        // 绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
        // 写入数据到缓冲区对象
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        // 将缓冲区对象分配给attribute，分配缓冲区对象到attribute
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
        // 启用指定索引的顶点属性
        gl.enableVertexAttribArray(a_Position)
        // 返回坐标点个数
        return vertices.length / 2
    }
```

这个方法的作用是在 WebGL 上下文中初始化顶点缓冲区对象，并将顶点数据绑定到指定的顶点属性。
具体分析如下：

1. 首先，方法接受两个参数：`gl` 是 WebGL 上下文对象，`a_Position` 是指向顶点着色器中顶点位置属性的指针。

2. 创建一个包含顶点坐标的 `Float32Array` 数组 `vertices`，其中顶点坐标为 `[0.5, 0.5, -0.5, 0.5, 0.0, -0.5]`。这里的坐标是以两个值为一组表示的，每组两个值表示一个顶点的 x 和 y 坐标。

3. 使用 `gl.createBuffer()` 创建一个顶点缓冲区对象，并将返回的对象存储在 `vertexBuffers` 中。如果创建失败，则输出错误信息并返回 -1。

4. 使用 `gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)` 将顶点缓冲区对象绑定到 WebGL 上下文的 `ARRAY_BUFFER` 目标上。

5. 使用 `gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)` 将顶点数据写入到顶点缓冲区对象中。`gl.STATIC_DRAW` 表示数据不会频繁修改。

6. 使用 `gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)` 分配缓冲区对象到attribute。其中，`a_Position` 是指向顶点着色器中顶点位置属性的指针，`2` 表示每个顶点有两个分量，`gl.FLOAT` 表示每个分量的数据类型为浮点数，`false` 表示不需要进行归一化处理，`0` 表示相邻顶点数据的字节间隔，`0` 表示从缓冲区的开头开始。

7. 使用 `gl.enableVertexAttribArray(a_Position)` 开启attribute。

8. 最后，返回顶点坐标点的个数，即 `vertices.length / 2`，因为每个顶点由两个坐标值组成。

综上所述，这个方法的作用是将顶点坐标数据存储到顶点缓冲区对象中，并分配缓冲区对象到attribute，最后返回顶点坐标点的个数。这样可以在绘制过程中使用这些顶点数据进行渲染。
