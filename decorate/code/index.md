## 1. 字符串转为数组

```js
const newarr = (ret?.str || "").trim().split(",").filter(Boolean);
```

::: info 详解
1. ret?.str: 这部分使用了可选链运算符（?.）。如果ret对象存在且具有str属性，则获取其值；否则返回undefined。这种写法可以防止在ret未定义或没有str属性时抛出错误。

2. (ret?.str || ""): 如果ret.str存在并且不是一个假值（例如null, undefined, false, "", 0, NaN），则使用ret.str的值，否则使用空字符串""。这样确保即使ret.str不存在或为空也能继续进行后续操作。

3. .trim(): 对上一步得到的字符串（无论是ret.str的实际值还是空字符串）调用trim()方法，去除字符串两端的空白字符（包括空格、制表符、换行符等）。

4. .split(","): 再对修剪后的字符串调用split(",")方法，根据逗号（","）将字符串分割成一个数组。例如，"a,b,c,"会被分割成数组["a", "b", "c"]。

5. .filter(Boolean): 最后对由逗号分隔的字符串数组应用filter(Boolean)函数。Boolean函数作为过滤器，会把数组中的每个元素转换为布尔值，然后只保留那些转换结果为true的元素。在字符串中，非空字符串
:::