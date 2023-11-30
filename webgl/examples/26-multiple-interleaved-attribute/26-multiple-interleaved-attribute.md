## 方法说明
 
```javascript
    // 顶点着色器程序
    var VSHADER_SOURCE =
        'attribute vec4 a_Position;\n' +  // 声明a_Position
        'attribute float a_PointSize;\n' +  // 声明a_PointSize
        'void main() {\n' +
        '  gl_Position = a_Position;\n' +               // 设置顶点的位置，必须设置，由全局变量a_Position赋值
        '  gl_PointSize = a_PointSize;\n' +             // 设置顶点的大小，可以不设置，默认为1.0(float类型，改为10就会渲染失败)
   '}\n';
``` 

```javascript
    // 创建和设置缓冲区对象
    function initVertexBuffers(gl, a_Position, a_PointSize) {
        // 设置顶点坐标和大小[x,y,size]
        const verticesInfo = new Float32Array([
            0.3, 0.3, 10.0,
            -0.3, 0.3, 20.0,
            0.0, -0.3, 30.0
        ])
        const vertexBuffers = gl.createBuffer()
        if (!vertexBuffers) {
            console.log("创建缓冲区对象失败")
            return -1
        }
        const elementSize = verticesInfo.BYTES_PER_ELEMENT
        // 绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
        // 写入缓冲区对象数据
        gl.bufferData(gl.ARRAY_BUFFER, verticesInfo, gl.STATIC_DRAW)
        // 分配缓冲区对象到a_Position
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, elementSize * 3, 0)
        // 启用attribute
        gl.enableVertexAttribArray(a_Position)
        // 分配缓冲区对象到a_PointSize
        gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, elementSize * 3, elementSize * 2)
        // 启用attribute
        gl.enableVertexAttribArray(a_PointSize)
        // 解绑gl.ARRAY_BUFFER
        gl.bindBuffer(gl.ARRAY_BUFFER, null)
        return verticesInfo.length / 3
    }
```

> stride ：一个 GLsizei，以字节为单位指定连续顶点属性开始之间的偏移量 (即数组中一行长度)。
不能大于 255。如果 stride 为 0，则假定该属性是紧密打包的，即不交错属性，每个属性在一个单独的块中，下一个顶点的属性紧跟当前顶点之后。

> offset: GLintptr指定顶点属性数组中第一部分的字节偏移量。必须是类型的字节长度的倍数。