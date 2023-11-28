## 方法说明

二维坐标系中点p[x,y]到原点长度为r，与x轴正方向夹角为a,将原点和p连线沿着逆时针旋转b角度，如何求p‘点坐标[x',y']

```
cos a = x/r;
sin a = y/r;
cos(a+b) = x'/r;
sin(a+b) = y'/r;
```
得到
```
r = x/cos a;
r = y/sin a;
x' = r*cos(a+b);
y' = r*sin(a+b);
```
再根据二角和差公式可以得到
```
x' = x * cos b - y * sin b;
y' = y * cos b + x * sin b;
```


二角和公式和差公式是用来计算三角函数的和与差的公式。下面是二角和公式和差公式的表达：

1. 二角和公式：
   - 正弦函数的二角和公式：sin(A + B) = sin(A) * cos(B) + cos(A) * sin(B)
   - 余弦函数的二角和公式：cos(A + B) = cos(A) * cos(B) - sin(A) * sin(B)
   - 正切函数的二角和公式：tan(A + B) = (tan(A) + tan(B)) / (1 - tan(A) * tan(B))

2. 二角差公式：
   - 正弦函数的二角差公式：sin(A - B) = sin(A) * cos(B) - cos(A) * sin(B)
   - 余弦函数的二角差公式：cos(A - B) = cos(A) * cos(B) + sin(A) * sin(B)
   - 正切函数的二角差公式：tan(A - B) = (tan(A) - tan(B)) / (1 + tan(A) * tan(B))
  
```javascript
   // 顶点着色器程序
   var VSHADER_SOURCE =
      'attribute vec4 a_Position;\n' +  // 声明a_Position
      'uniform float u_SinB,u_CosB;\n' +  // 声明旋转角度B点正余弦值
      'void main() {\n' +
      '  gl_Position.x = a_Position.x*u_CosB-a_Position.y*u_SinB;\n' +
      '  gl_Position.y = a_Position.y*u_CosB+a_Position.x*u_SinB;\n' +
      '  gl_Position.z = a_Position.z;\n' +
      '  gl_Position.w = 1.0;\n' +
   '}\n';
```

```javascript
   const u_SinB = gl.getUniformLocation(gl.program, "u_SinB")
   const u_CosB = gl.getUniformLocation(gl.program, "u_CosB")
   // 定义旋转角度
   const angle = 45
   // 将角度转换为弧度
   const radian = Math.PI * angle / 180
   const sinb = Math.sin(radian)
   const cosb = Math.cos(radian)
   // 设置偏移量到uniform变量上
   gl.uniform1f(u_SinB, sinb)
   gl.uniform1f(u_CosB, cosb)
```