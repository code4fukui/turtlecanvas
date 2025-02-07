# turtlecanvas

a simple turtle graphics library in JavaScript

## demo in Wirth

```html
<script type="module" src="https://code4fukui.github.io/Wirth/web.js"></script>
<script type="text/wirth">
function forward, hue, rotate, sleep from "https://code4fukui.github.io/turtlecanvas/turtlecanvas.js"

for i = 0 to 1000
  forward(i)
  hue(i / 3)
  sleep(1)
  rotate(100 + i / 100)
next
</script>
```
[Wirth](https://github.com/code4fukui/Wirth)
