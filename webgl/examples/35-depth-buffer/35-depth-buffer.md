## 方法说明

```javascript
    function draw() {
        const canvas = document.getElementById("canvas")
        const viewMatrix = new Matrix4()
        const perspectiveMatrix = new Matrix4()
        viewMatrix.setLookAt(0, 0, 5, 0, 0, -100, 0, 1, 0);
        perspectiveMatrix.setPerspective(35, canvas.width / canvas.height, 1, 100);
        gl.uniformMatrix4fv(u_ModelMatrix, false, (perspectiveMatrix.multiply(viewMatrix)).elements);
        // 开启隐藏面清除
        gl.enable(gl.DEPTH_TEST);
        // 设置清理画布的颜色
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        // 清空画布&深度缓冲区
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, verticesLen);
    }
```

```javascript
    function draw() {
        const canvas = document.getElementById("canvas")
        const viewMatrix = new Matrix4()
        const perspectiveMatrix = new Matrix4()
        viewMatrix.setLookAt(0, 0, 5, 0, 0, -100, 0, 1, 0);
        perspectiveMatrix.setPerspective(35, canvas.width / canvas.height, 1, 100);
        gl.uniformMatrix4fv(u_ModelMatrix, false, (perspectiveMatrix.multiply(viewMatrix)).elements);
        // 开启隐藏面清除
        gl.enable(gl.DEPTH_TEST);
        // 开启隐藏面清除
        gl.enable(gl.POLYGON_OFFSET_FILL);
        // 设置清理画布的颜色
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        // 清空画布&深度缓冲区
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // 制订多边形偏移参数
        gl.polygonOffset(1.0, 1.0);
        gl.drawArrays(gl.TRIANGLES, 0, verticesLen);
    }
```