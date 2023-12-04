## 方法说明


```javascript
    function loadTexture(gl, verticesLen, texture, u_Sampler, image) {
        // 反转Y轴
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        // 开启纹理单元0
        gl.activeTexture(gl.TEXTURE0);
        // 绑定纹理对象到目标target上
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 设置纹理参数
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        // 设置纹理图像
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        // 将纹理单元0传递到u_Sampler
        gl.uniform1i(u_Sampler, 0);
        // 清理画布并绘制
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, verticesLen);
    }
```