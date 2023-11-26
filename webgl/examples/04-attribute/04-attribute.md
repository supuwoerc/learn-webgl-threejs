## 方法说明

* `WebGLRenderingContext.getAttribLocation()` 方法返回了给定WebGLProgram对象中某属性的下标指向位置(存储地址)。

* `WebGLRenderingContext.vertexAttrib[1234]f[v]()` 是 WebGL API 的方法，可以为顶点 attribute 变量赋值。

```javascript
gl.getAttribLocation(program, "attribute_name");
``` 

```javascript
// 设置attribute的坐标为(0.5, 0.5, 0.0)
gl.vertexAttrib3f(a_Position, 0.5, 0.5, 0.0)
// 等同于
gl.vertexAttrib3fv(a_Position,[0.5, 0.5, 0.0])
```

在 WebGL（或OpenGL）中，`uniform` 和 `attribute` 是用于在顶点着色器和片元着色器之间传递数据的关键字，它们有以下区别：

1. **作用域**：`uniform` 是全局的，它在整个着色器程序中都是可见的，而 `attribute` 则是每个顶点独有的。

2. **传递方式**：`uniform` 是从应用程序（JavaScript）向着色器发送数据的方式，而 `attribute` 是从应用程序向顶点着色器发送数据的方式。

3. **数据类型**：`uniform` 可以包含各种类型的数据，如标量、矢量、矩阵等，而 `attribute` 通常用于传递顶点相关的数据，如顶点位置、法线、纹理坐标等。

4. **数据数量**：`uniform` 只有一个值，即在整个渲染过程中保持不变，而 `attribute` 是一个数组，包含多个值，每个值对应一个顶点。

5. **更新方式**：`uniform` 的值在每次绘制调用之前可以通过 JavaScript 代码进行更新，而 `attribute` 的值在绘制调用期间保持不变，只有在切换绘制的顶点时才会更新。

6. **用途**：`uniform` 通常用于传递对整个渲染过程都相同的数据，如视图矩阵、投影矩阵、光照参数等。而 `attribute` 通常用于传递与顶点相关的数据，如顶点位置、顶点颜色、法线方向等。

需要注意的是，在 WebGL 2 中，`attribute` 被废弃，取而代之的是 `in` 关键字，用于表示输入数据。而 `uniform` 保持不变，仍然用于表示全局的、在整个着色器程序中可见的数据。

综上所述，`uniform` 和 `attribute` 在作用域、传递方式、数据类型、数据数量、更新方式和用途等方面存在明显的区别，它们在着色器程序中扮演不同的角色。