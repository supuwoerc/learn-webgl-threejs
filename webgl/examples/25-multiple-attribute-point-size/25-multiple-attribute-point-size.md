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
        // 设置顶点坐标
        const vertices = new Float32Array([
            0.3, 0.3, -0.3, 0.3, 0.0, -0.3
        ])
        const vertexBuffers = gl.createBuffer()
        if (!vertexBuffers) {
            console.log("创建缓冲区对象失败")
            return -1
        }
        // 绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
        // 写入缓冲区对象数据
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        // 分配缓冲区对象到attribute
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
        // 启用attribute
        gl.enableVertexAttribArray(a_Position)
        /*----------------------------------*/
        // 设置顶点大小
        const verticesSize = new Float32Array([
            10.0, 20.0, 30.0
        ])
        const sizeBuffers = gl.createBuffer()
        if (!sizeBuffers) {
            console.log("创建缓冲区对象失败")
            return -1
        }
        // 绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffers)
        // 写入数据到缓冲区
        gl.bufferData(gl.ARRAY_BUFFER, verticesSize, gl.STATIC_DRAW)
        // 分配缓冲区对象到attribute
        gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0)
        // 启用attribute
        gl.enableVertexAttribArray(a_PointSize)
        // 解绑gl.ARRAY_BUFFER
        gl.bindBuffer(gl.ARRAY_BUFFER, null)
        return vertices.length / 2
    }
```